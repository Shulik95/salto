/*
*                      Copyright 2023 Salto Labs Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import _ from 'lodash'
import { posix } from 'path'
import { logger } from '@salto-io/logging'
import { FILE_CABINET_PATH_SEPARATOR as sep } from '../constants'

const log = logger(module)

export type FileSize = {
  path: string
  size: number
}

type FolderSize = {
  path: string
  size: number
  folders: FolderSize[]
}

type FolderSizeMap = Record<string, FolderSize>
const BYTES_IN_GB = 1024 ** 3

export const largeFoldersToExclude = (
  files: FileSize[],
  maxFileCabinetSizeInGB: number
): string[] => {
  const createFlatFolderSizes = (fileSizes: FileSize[]): FolderSizeMap => {
    const flatFolderSizes: FolderSizeMap = {}
    fileSizes.forEach(({ path, size }) => {
      posix.dirname(path).split(sep).reduce((currentPath, nextFolder) => {
        const nextPath = posix.join(currentPath, nextFolder)
        if (nextPath in flatFolderSizes) {
          flatFolderSizes[nextPath].size += size
        } else {
          flatFolderSizes[nextPath] = {
            path: nextPath,
            size,
            folders: [],
          }
        }
        return nextPath
      })
    })
    return flatFolderSizes
  }

  const createFolderHierarchy = (flatFolderSizes: FolderSizeMap): FolderSize[] => {
    const folderGraph: FolderSize[] = []
    Object.keys(flatFolderSizes).forEach(folderName => {
      if (folderName.indexOf(sep) === -1) { // Top level folder
        folderGraph.push(flatFolderSizes[folderName])
      } else { // Sub folder
        const parentFolder = posix.dirname(folderName)
        flatFolderSizes[parentFolder].folders.push(flatFolderSizes[folderName])
      }
    })
    return folderGraph
  }

  const folderSizes = createFolderHierarchy(createFlatFolderSizes(files))
  const maxSizeInBytes = BYTES_IN_GB * maxFileCabinetSizeInGB
  const overflowSize = folderSizes.reduce((acc, folder) => acc + folder.size, 0) - maxSizeInBytes

  const filterSingleFolder = (largestFolder: FolderSize): FolderSize[] => {
    const nextLargeFolder = largestFolder.folders.find(folderSize => folderSize.size > overflowSize)
    if (!nextLargeFolder) {
      return [largestFolder]
    }
    return filterSingleFolder(nextLargeFolder)
  }

  const filterMultipleFolders = (): FolderSize[] => {
    const sortedSizes = _.orderBy(folderSizes, 'size', 'desc')
    const selectedFolders: FolderSize[] = []
    sortedSizes.reduce((selectedSize, folderSize) => {
      if (selectedSize < overflowSize) {
        selectedFolders.push(folderSize)
        return selectedSize + folderSize.size
      }
      return selectedSize
    }, 0)
    return selectedFolders
  }

  if (overflowSize <= 0) {
    return []
  }

  const largeTopLevelFolder = folderSizes.find(folderSize => folderSize.size > overflowSize)
  const foldersToExclude = largeTopLevelFolder
    ? filterSingleFolder(largeTopLevelFolder)
    : filterMultipleFolders()
  log.info(`Excluding large folder(s) with total size of ${foldersToExclude.reduce((sum, folder) => sum + folder.size, 0)}`
    + ` and name(s): ${foldersToExclude.map(folder => folder.path)}`)
  return foldersToExclude.map(folder => `${sep}${folder.path}${sep}`)
}

export const filterFilesInFolders = (files: string[], folders: string[]): string[] =>
  files.filter(file => !folders.some(folder => file.startsWith(folder)))

export const filterFilePathsInFolders = <T extends { path: string[] }>(files: T[], folders: string[]): T[] =>
  files.filter(file => !folders.some(folder => file.path.join(sep).startsWith(folder.slice(1))))