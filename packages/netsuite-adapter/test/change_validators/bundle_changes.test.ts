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

import { ElemID, InstanceElement, ObjectType, ReferenceExpression, toChange } from '@salto-io/adapter-api'
import { bundleType } from '../../src/types/bundle_type'
import bundleChangesValidation from '../../src/change_validators/bundle_changes'
import { fileType } from '../../src/types/file_cabinet_types'
import { NETSUITE, PATH } from '../../src/constants'

describe('bundle changes', () => {
  const bundleInstanceBefore = new InstanceElement('39609', bundleType().type, { id: '39609', name: 'testName' })
  const fileInstanceBefore = new InstanceElement('fileInstance', fileType(), {
    [PATH]: 'SuiteBundles/Bundle 39609/SomeInnerFolder/content.html',
    bundle: new ReferenceExpression(bundleInstanceBefore.elemID),
    availablewithoutlogin: false,
  })
  let fileInstanceAfter: InstanceElement
  let bundleInstanceAfter: InstanceElement
  let recordInstance: InstanceElement

  beforeEach(() => {
    bundleInstanceAfter = bundleInstanceBefore.clone()
    fileInstanceAfter = fileInstanceBefore.clone()
    recordInstance = new InstanceElement('instance', new ObjectType({ elemID: new ElemID(NETSUITE, 'currency') }),
      {
        bundle: new ReferenceExpression(bundleInstanceBefore.elemID),
      })
  })

  it('should have changeError when trying to deploy a bundle instance', async () => {
    bundleInstanceAfter.value.name = 'newName'
    const changeError = await bundleChangesValidation([
      toChange({ after: bundleInstanceAfter, before: bundleInstanceBefore }),
    ])
    expect(changeError).toHaveLength(1)
    expect(changeError[0]).toEqual(
      {
        message: 'Can\'t deploy bundle',
        severity: 'Error',
        elemID: bundleInstanceAfter.elemID,
        detailedMessage: 'This bundle doesn\'t exist in the target account, and cannot be automatically deployed. \nIt may be required by some elements in your deployment.\nYou can manually install this bundle in the target account: <guide to install>',
      }
    )
  })

  it('should have changeError when trying to deploy a fileCabinet instance that is included in a bundle', async () => {
    fileInstanceAfter.value.availablewithoutlogin = true
    const changeError = await bundleChangesValidation([
      toChange({ after: fileInstanceAfter, before: fileInstanceBefore }),
    ])
    expect(changeError).toHaveLength(1)
    expect(changeError[0]).toEqual(
      {
        message: 'Can\'t deploy file cabinet elements which are part of a bundle',
        severity: 'Error',
        elemID: fileInstanceAfter.elemID,
        detailedMessage: 'Netsuite does not support modifying file cabinet elements that are part of a bundle.\nUsually, these files are installed with the bundle itself.',
      }
    )
  })

  it('should not have changeError', async () => {
    const changeErrors = await bundleChangesValidation([
      toChange({ after: recordInstance }),
    ])
    expect(changeErrors).toHaveLength(0)
  })
})