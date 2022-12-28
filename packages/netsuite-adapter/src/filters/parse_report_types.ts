/*
*                      Copyright 2022 Salto Labs Ltd.
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

import { getChangeData, InstanceElement, isInstanceChange, isInstanceElement, isObjectType, ObjectType } from '@salto-io/adapter-api'
import _ from 'lodash'
import { collections } from '@salto-io/lowerdash'
import { FINANCIAL_LAYOUT, REPORT_DEFINITION, SAVED_SEARCH } from '../constants'
import { FilterCreator } from '../filter'
import { savedsearchType } from '../saved_search_parsing/parsed_saved_search'
import { financiallayoutType } from '../financial_layout_parsing/parsed_financial_layout'
import { reportdefinitionType } from '../report_definition_parsing/parsed_report_definition'
import { mapTypeToLayoutOrDefinition, typeNameToParser } from '../change_validators/report_types_move_environment'
import { savedsearchType as oldSavedSearch } from '../autogen/types/standard_types/savedsearch'
import { financiallayoutType as oldFinancialLayout } from '../autogen/types/standard_types/financiallayout'
import { reportdefinitionType as oldReportDefinition } from '../autogen/types/standard_types/reportdefinition'

const { awu } = collections.asynciterable

const typeNameToOldType: Record<string, ObjectType> = {
  [SAVED_SEARCH]: oldSavedSearch().type,
  [REPORT_DEFINITION]: oldReportDefinition().type,
  [FINANCIAL_LAYOUT]: oldFinancialLayout().type,
}

const filterCreator: FilterCreator = ({ elementsSource }) => ({
  onFetch: async elements => {
    const cloneReportInstance = (instance: InstanceElement, type: ObjectType): InstanceElement =>
    // We create another element not using element.clone because
    // we need the new element to have a parsed save search type.
      new InstanceElement(instance.elemID.name, type, instance.value,
        instance.path, instance.annotations)

    const assignSavedSearchValues = async (
      instance: InstanceElement,
      oldInstance: InstanceElement | undefined
    ): Promise<void> => {
      const layoutOrDefinition = mapTypeToLayoutOrDefinition[instance.elemID.typeName]
      const parser = typeNameToParser[instance.elemID.typeName]
      const parsedInstance = await parser(instance.value[layoutOrDefinition], instance.value.scriptid)
      Object.assign(instance.value, parsedInstance)
      if (oldInstance?.value[layoutOrDefinition] !== undefined) {
        if (_.isEqual(await parser(oldInstance.value[layoutOrDefinition], oldInstance.value.scriptid),
          parsedInstance)) {
          // In case the parsed definitions are equal that mean there is no reason
          // to change the definition string and create a change in the file.
          instance.value[layoutOrDefinition] = oldInstance.value[layoutOrDefinition]
        }
      }
    }
    await awu([reportdefinitionType, savedsearchType, financiallayoutType]).forEach(async parsedType => {
      const { type, innerTypes } = parsedType()
      _.remove(elements, e => isObjectType(e) && e.elemID.name === type.elemID.name)
      _.remove(elements, e => isObjectType(e) && e.elemID.name.startsWith(type.elemID.name))
      const instances = _.remove(elements, e => isInstanceElement(e)
          && e.elemID.typeName === type.elemID.name)
      elements.push(type)
      elements.push(...Object.values(innerTypes))
      const parsedInstances = await Promise.all(
        instances
          .filter(isInstanceElement)
          .map(instance => cloneReportInstance(instance, type))
          .map(async (instance: InstanceElement) => {
            await assignSavedSearchValues(instance, await elementsSource.get(instance.elemID))
            return instance
          })
      )
      elements.push(...parsedInstances)
    })
  },
  preDeploy: async changes => {
    const removeValuesFromInstance = async (instance: InstanceElement): Promise<void> => {
      instance.value = _.pickBy(instance.value, (_val, key) =>
        key in typeNameToOldType[instance.elemID.typeName].fields)
    }

    changes
      .filter(isInstanceChange)
      .map(getChangeData)
      .filter(instance => [SAVED_SEARCH, REPORT_DEFINITION, FINANCIAL_LAYOUT].includes(instance.elemID.typeName))
      .forEach(instance => removeValuesFromInstance(instance))
  },
})

export default filterCreator
