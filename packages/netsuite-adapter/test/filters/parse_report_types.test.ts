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
import { AdditionChange, ElemID, InstanceElement, isObjectType, ObjectType, toChange } from '@salto-io/adapter-api'
import { buildElementsSourceFromElements } from '@salto-io/adapter-utils'
import filterCreator from '../../src/filters/parse_report_types'
import { savedsearchType } from '../../src/autogen/types/standard_types/savedsearch'
import { reportdefinitionType } from '../../src/autogen/types/standard_types/reportdefinition'
import { financiallayoutType } from '../../src/autogen/types/standard_types/financiallayout'
import NetsuiteClient from '../../src/client/client'
import { NETSUITE, SAVED_SEARCH } from '../../src/constants'
import { FilterOpts } from '../../src/filter'
import { createEmptyElementsSourceIndexes, getDefaultAdapterConfig } from '../utils'
import { savedsearchType as newSavedSearchType } from '../../src/saved_search_parsing/parsed_saved_search'

jest.mock('../../src/saved_search_parsing/saved_search_parser', () => ({
  parseDefinition: jest.fn().mockResolvedValue({
    test: 'test',
  }),
}))

jest.mock('../../src/report_definition_parsing/report_definition_parser', () => ({
  parseDefinition: jest.fn().mockResolvedValue({
    test: 'test',
  }),
}))

jest.mock('../../src/financial_layout_parsing/financial_layout_parser', () => ({
  parseDefinition: jest.fn().mockResolvedValue({
    test: 'test',
  }),
}))


describe('parse_report_types filter', () => {
  let savedSearchInstance: InstanceElement
  let sourceSavedSearchInstance: InstanceElement
  let fetchOpts: FilterOpts
  let financialLayoutInstance: InstanceElement
  let sourceFinancialLayoutInstance: InstanceElement
  let reportDefinitionInstance: InstanceElement
  let sourceReportDefinitionInstance: InstanceElement

  beforeEach(async () => {
    fetchOpts = {
      client: {} as NetsuiteClient,
      elementsSourceIndex: {
        getIndexes: () => Promise.resolve(createEmptyElementsSourceIndexes()),
      },
      elementsSource: buildElementsSourceFromElements([]),
      isPartial: false,
      config: await getDefaultAdapterConfig(),
    }

    const savedsearch = savedsearchType().type
    const financiallayout = financiallayoutType().type
    const reportdefinition = reportdefinitionType().type
    savedSearchInstance = new InstanceElement(
      'someSearch',
      savedsearch,
      {}
    )
    sourceSavedSearchInstance = new InstanceElement(
      'someSearch',
      savedsearch,
      {}
    )

    financialLayoutInstance = new InstanceElement(
      'layout1',
      financiallayout,
      {}
    )
    sourceFinancialLayoutInstance = new InstanceElement(
      'layout1',
      financiallayout,
      {}
    )
    reportDefinitionInstance = new InstanceElement(
      'report1',
      reportdefinition,
      {}
    )
    sourceReportDefinitionInstance = new InstanceElement(
      'report1',
      reportdefinition,
      {}
    )

    sourceSavedSearchInstance.value.definition = 'testDefinition'
    sourceFinancialLayoutInstance.value.layout = 'testLayout'
    sourceReportDefinitionInstance.value.definition = 'testReport'
  })
  it('test onFetch removes old object type and adds new type', async () => {
    const savedSearchObject = new ObjectType({ elemID: new ElemID('netsuite', SAVED_SEARCH) })
    const elements = [savedSearchObject]
    await filterCreator(fetchOpts).onFetch?.(elements)
    expect(elements.filter(isObjectType)
      .filter(e => e.elemID.typeName === SAVED_SEARCH)[0])
      .not.toEqual(savedSearchObject)
    expect(elements.filter(isObjectType)
      .filter(e => e.elemID.typeName === SAVED_SEARCH)[0])
      .toEqual(newSavedSearchType().type)
  })
  it('test onFetch removes doubled dependency object type', async () => {
    const dependencyObjectType = new ObjectType({ elemID: new ElemID(NETSUITE, 'savedsearch_dependencies'),
      fields: {} })
    const elements = [dependencyObjectType]
    await filterCreator(fetchOpts).onFetch?.(elements)
    expect(elements.filter(isObjectType)
      .filter(e => e.elemID.typeName === SAVED_SEARCH)[0])
      .not.toEqual(dependencyObjectType)
  })
  it('test onFetch adds definition values', async () => {
    await filterCreator(fetchOpts).onFetch?.([savedSearchInstance, reportDefinitionInstance, financialLayoutInstance])
    expect(savedSearchInstance.value.test).toEqual('test')
    expect(reportDefinitionInstance.value.test).toEqual('test')
    expect(financialLayoutInstance.value.test).toEqual('test')
  })
  it('test onFetch keeps old definition', async () => {
    fetchOpts = {
      client: {} as NetsuiteClient,
      elementsSourceIndex: {
        getIndexes: () => Promise.resolve(createEmptyElementsSourceIndexes()),
      },
      elementsSource: buildElementsSourceFromElements([
        sourceSavedSearchInstance,
        sourceFinancialLayoutInstance,
        sourceReportDefinitionInstance,
      ]),
      isPartial: false,
      config: await getDefaultAdapterConfig(),
    }
    await filterCreator(fetchOpts).onFetch?.([savedSearchInstance, reportDefinitionInstance, financialLayoutInstance])
    expect(savedSearchInstance.value.definition).toEqual('testDefinition')
    expect(reportDefinitionInstance.value.definition).toEqual('testReport')
    expect(financialLayoutInstance.value.layout).toEqual('testLayout')
  })
  it('test preDeploy removes values', async () => {
    savedSearchInstance.value.test = 'toBeRemoved'
    financialLayoutInstance.value.test = 'toBeRemoved'
    const savedSearchChange = toChange({ after: savedSearchInstance }) as AdditionChange<InstanceElement>
    const financialLayoutChange = toChange({ after: financialLayoutInstance }) as AdditionChange<InstanceElement>
    expect(savedSearchChange.data.after.value.test).toEqual('toBeRemoved')
    await filterCreator(fetchOpts).preDeploy?.([savedSearchChange, financialLayoutChange])
    expect(savedSearchChange.data.after.value.test).toBeUndefined()
    expect(financialLayoutChange.data.after.value.test).toBeUndefined()
  })
})
