/*
 *                      Copyright 2024 Salto Labs Ltd.
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
import { definitions, fetch as fetchUtils } from '@salto-io/adapter-components'
import { Options } from '../types'

const { cursorPagination } = fetchUtils.request.pagination

export const PAGINATION: definitions.ApiDefinitions<Options>['pagination'] = {
  cursor: {
    funcCreator: () =>
      cursorPagination({ pathChecker: fetchUtils.request.pagination.defaultPathChecker, paginationField: 'next' }),
  },
}
