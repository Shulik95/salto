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
import { types } from '@salto-io/lowerdash'
import { ContextFunc, FieldReferenceDefinition, ReferenceSerializationStrategy } from '../../references'
import { ReferenceIndexField } from '../../references/reference_mapping'

export type ReferenceDefinitions<
  ContextStrategy extends string = never,
  SerializationStrategyName extends string = never,
  CustomIndexField extends string = never,
> = types.PickyRequired<
  {
    // rules for finding references - converting values to references in fetch, and references to values in deploy.
    // this is an array of arrays because rules can be run in multiple iterations during fetch
    rules: FieldReferenceDefinition<ContextStrategy, SerializationStrategyName>[]
    // custom context startegies for computing the value to lookup
    contextStrategyLookup?: Record<ContextStrategy, ContextFunc>
    // custom serialization strategies for how to lookup-and-serialize a calculated value
    serializationStrategyLookup?: Record<SerializationStrategyName, ReferenceSerializationStrategy<CustomIndexField>>
    // fields to use to index instances for lookup.
    // by default we index by id and name - if fieldsToGroupBy is defined, they should be listed as well
    // or they will not be indexed
    fieldsToGroupBy?: (ReferenceIndexField | CustomIndexField)[]
  },
  | (ContextStrategy extends never ? never : 'contextStrategyLookup')
  | (SerializationStrategyName extends never ? never : 'serializationStrategyLookup')
  | (CustomIndexField extends never ? never : 'fieldsToGroupBy')
>
