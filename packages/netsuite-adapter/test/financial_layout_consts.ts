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

export const layoutDefinition = '50eea0c7f8213c39aefbad831837a46a54dee1766c66d18d99909e7a6e6c8b0e@GZC@2022.2.14@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'
export const layoutDefinitionResult = { rows: [{ FIELD_KEY: 75, FIELD_NAME: 'Liabilities &amp; Equity', KEY_SCRIPT_ID: 'CUSTOMFINANROW_75_T2257860_639', FIELD_TYPE: 'HEADER', FIELD_PRIORITY: 10, SEQ_NUMBER: 0, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 13, KEY_FORMULA: 91, FLAG_TOP_ROW: true }, { FIELD_KEY: 65, FIELD_NAME: 'ASSETS', KEY_SCRIPT_ID: 'CUSTOMFINANROW_65_T2257860_257', FIELD_TYPE: 'HEADER', FIELD_PRIORITY: 0, SEQ_NUMBER: 1, KEY_PARENT: 75, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 14, KEY_FORMULA: 74, FLAG_TOP_ROW: false }, { FIELD_KEY: 66, FIELD_NAME: 'Current Assets', KEY_SCRIPT_ID: 'CUSTOMFINANROW_66_T2257860_740', FIELD_TYPE: 'HEADER', FIELD_PRIORITY: 1, SEQ_NUMBER: 2, KEY_PARENT: 65, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 15, KEY_FORMULA: 71, FLAG_TOP_ROW: false }, { FIELD_KEY: 67, FIELD_NAME: 'Bank', KEY_SCRIPT_ID: 'CUSTOMFINANROW_67_T2257860_248', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 2, SEQ_NUMBER: 3, KEY_PARENT: 66, FIELD_DEFAULT_TOTAL_NAME: 'Total Bank', FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 16, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 67, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 17, KEY_BODY_STYLE: 18, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 137, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 68, FIELD_NAME: 'Accounts Receivable', KEY_SCRIPT_ID: 'CUSTOMFINANROW_68_T2257860_573', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 3, SEQ_NUMBER: 4, KEY_PARENT: 66, FIELD_DEFAULT_TOTAL_NAME: 'Total Accounts Receivable', FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 19, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 68, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 20, KEY_BODY_STYLE: 21, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 138, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 69, FIELD_NAME: 'Unbilled Receivable', KEY_SCRIPT_ID: 'CUSTOMFINANROW_69_T2257860_700', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 4, SEQ_NUMBER: 5, KEY_PARENT: 66, FIELD_DEFAULT_TOTAL_NAME: 'Total Unbilled Receivable', FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 22, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 69, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 23, KEY_BODY_STYLE: 24, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 139, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 70, FIELD_NAME: 'Other Current Asset', KEY_SCRIPT_ID: 'CUSTOMFINANROW_70_T2257860_111', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 5, SEQ_NUMBER: 6, KEY_PARENT: 66, FIELD_DEFAULT_TOTAL_NAME: 'Total Other Current Asset', FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 25, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 70, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 26, KEY_BODY_STYLE: 27, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 140, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 71, FIELD_NAME: 'Total Current Assets', KEY_SCRIPT_ID: 'CUSTOMFINANROW_71_T2257860_570', FIELD_TYPE: 'FORMULA', FIELD_PRIORITY: 6, SEQ_NUMBER: 7, KEY_PARENT: 65, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 28, FLAG_DYNAMIC_HEADER_TOTAL: true, FLAG_FORMULA_USE_EXPRESSIONS: false, KEY_HEADER_FORMULA_ROW: 66, FIELD_FORMULA_PARTS: 0, FLAG_TOP_ROW: false }, { FIELD_KEY: 72, FIELD_NAME: 'Fixed Assets', KEY_SCRIPT_ID: 'CUSTOMFINANROW_72_T2257860_746', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 7, SEQ_NUMBER: 8, KEY_PARENT: 65, FIELD_DEFAULT_TOTAL_NAME: 'Total Fixed Assets', FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 29, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 72, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 30, KEY_BODY_STYLE: 31, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 141, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 73, FIELD_NAME: 'Other Assets', KEY_SCRIPT_ID: 'CUSTOMFINANROW_73_T2257860_695', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 8, SEQ_NUMBER: 9, KEY_PARENT: 65, FIELD_DEFAULT_TOTAL_NAME: 'Total Other Assets', FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 32, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 73, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 33, KEY_BODY_STYLE: 34, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 142, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 74, FIELD_NAME: 'Total ASSETS', KEY_SCRIPT_ID: 'CUSTOMFINANROW_74_T2257860_183', FIELD_TYPE: 'FORMULA', FIELD_PRIORITY: 9, SEQ_NUMBER: 10, KEY_PARENT: 75, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', FIELD_FINANCIAL_MARKER: 'ASSETS', KEY_STYLE: 35, FLAG_DYNAMIC_HEADER_TOTAL: true, FLAG_FORMULA_USE_EXPRESSIONS: false, KEY_HEADER_FORMULA_ROW: 65, FIELD_FORMULA_PARTS: 2, FLAG_TOP_ROW: false, RECORDS: [{ SEQ_NUMBER: 0, KEY_SOURCE_ROW: 0, FIELD_OPERATOR: '+', FIELD_LITERAL: 0, KEY_ROW: 0 }, { SEQ_NUMBER: 1, KEY_SOURCE_ROW: 0, FIELD_LITERAL: 45, KEY_ROW: 0 }] }, { FIELD_KEY: 76, FIELD_NAME: 'Current Liabilities', KEY_SCRIPT_ID: 'CUSTOMFINANROW_76_T2257860_310', FIELD_TYPE: 'HEADER', FIELD_PRIORITY: 11, SEQ_NUMBER: 11, KEY_PARENT: 75, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 36, KEY_FORMULA: 80, FLAG_TOP_ROW: false }, { FIELD_KEY: 77, FIELD_NAME: 'Accounts Payable', KEY_SCRIPT_ID: 'CUSTOMFINANROW_77_T2257860_212', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 12, SEQ_NUMBER: 12, KEY_PARENT: 76, FIELD_DEFAULT_TOTAL_NAME: 'Total Accounts Payable', FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 37, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 77, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 38, KEY_BODY_STYLE: 39, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 143, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 78, FIELD_NAME: 'Credit Card', KEY_SCRIPT_ID: 'CUSTOMFINANROW_78_T2257860_988', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 13, SEQ_NUMBER: 13, KEY_PARENT: 76, FIELD_DEFAULT_TOTAL_NAME: 'Total Credit Card', FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 40, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 78, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 41, KEY_BODY_STYLE: 42, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 144, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 79, FIELD_NAME: 'Other Current Liability', KEY_SCRIPT_ID: 'CUSTOMFINANROW_79_T2257860_236', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 14, SEQ_NUMBER: 14, KEY_PARENT: 76, FIELD_DEFAULT_TOTAL_NAME: 'Total Other Current Liability', FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 43, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 79, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 44, KEY_BODY_STYLE: 45, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 145, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 80, FIELD_NAME: 'Total Current Liabilities', KEY_SCRIPT_ID: 'CUSTOMFINANROW_80_T2257860_190', FIELD_TYPE: 'FORMULA', FIELD_PRIORITY: 15, SEQ_NUMBER: 15, KEY_PARENT: 75, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', FIELD_FINANCIAL_MARKER: 'LIABILITIES', KEY_STYLE: 46, FLAG_DYNAMIC_HEADER_TOTAL: true, FLAG_FORMULA_USE_EXPRESSIONS: false, KEY_HEADER_FORMULA_ROW: 76, FIELD_FORMULA_PARTS: 0, FLAG_TOP_ROW: false }, { FIELD_KEY: 81, FIELD_NAME: 'Long Term Liabilities', KEY_SCRIPT_ID: 'CUSTOMFINANROW_81_T2257860_812', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 16, SEQ_NUMBER: 16, KEY_PARENT: 75, FIELD_DEFAULT_TOTAL_NAME: 'Total Long Term Liabilities', FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 47, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 81, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 48, KEY_BODY_STYLE: 49, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 146, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 82, FIELD_NAME: 'Equity', KEY_SCRIPT_ID: 'CUSTOMFINANROW_82_T2257860_103', FIELD_TYPE: 'HEADER', FIELD_PRIORITY: 17, SEQ_NUMBER: 17, KEY_PARENT: 75, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 50, KEY_FORMULA: 90, FLAG_TOP_ROW: false }, { FIELD_KEY: 83, FIELD_NAME: 'Equity', KEY_SCRIPT_ID: 'CUSTOMFINANROW_83_T2257860_129', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 18, SEQ_NUMBER: 18, KEY_PARENT: 82, FLAG_SHOW_NAME: false, FLAG_SHOW_TOTAL_NAME: false, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 51, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 83, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 52, KEY_BODY_STYLE: 53, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 147, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 84, FIELD_NAME: 'Retained Earnings', KEY_SCRIPT_ID: 'CUSTOMFINANROW_84_T2257860_702', FIELD_TYPE: 'HEADER', FIELD_PRIORITY: 18, SEQ_NUMBER: 19, KEY_PARENT: 82, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: false, FIELD_COLLAPSED_SECTION: 'CANNOT_EXPAND', KEY_STYLE: 54, KEY_FORMULA: 87, FLAG_TOP_ROW: false }, { FIELD_KEY: 85, FIELD_NAME: 'Retained Earnings (Account Section)', KEY_SCRIPT_ID: 'CUSTOMFINANROW_85_T2257860_368', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 18, SEQ_NUMBER: 20, KEY_PARENT: 84, FLAG_SHOW_NAME: false, FLAG_SHOW_TOTAL_NAME: false, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 55, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 85, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 56, KEY_BODY_STYLE: 57, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 148, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 86, FIELD_NAME: 'Net Income (Balance Forward to Beginning of Year)', KEY_SCRIPT_ID: 'CUSTOMFINANROW_86_T2257860_731', FIELD_TYPE: 'REFERENCED', FIELD_PRIORITY: 19, SEQ_NUMBER: 21, KEY_PARENT: 84, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: false, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 58, KEY_CALC_REPORT: -200, KEY_CALC_COMP_ID: 'NL', KEY_CALC_ROW: -56, KEY_CALC_ROW_COMP_ID: 'NL', FIELD_CALC_RANGE_START: 'Balance Forward', FIELD_CALC_RANGE_END: 'Beginning of Year', FLAG_TOP_ROW: false }, { FIELD_KEY: 87, FIELD_NAME: 'Total Retained Earnings', KEY_SCRIPT_ID: 'CUSTOMFINANROW_87_T2257860_540', FIELD_TYPE: 'FORMULA', FIELD_PRIORITY: 21, SEQ_NUMBER: 22, KEY_PARENT: 82, FLAG_SHOW_NAME: false, FLAG_SHOW_TOTAL_NAME: false, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 59, FLAG_DYNAMIC_HEADER_TOTAL: true, FLAG_FORMULA_USE_EXPRESSIONS: false, KEY_HEADER_FORMULA_ROW: 84, FIELD_FORMULA_PARTS: 0, FLAG_TOP_ROW: false }, { FIELD_KEY: 88, FIELD_NAME: 'Net Income', KEY_SCRIPT_ID: 'CUSTOMFINANROW_88_T2257860_817', FIELD_TYPE: 'REFERENCED', FIELD_PRIORITY: 19, SEQ_NUMBER: 23, KEY_PARENT: 82, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 60, KEY_CALC_REPORT: -200, KEY_CALC_COMP_ID: 'NL', KEY_CALC_ROW: -56, KEY_CALC_ROW_COMP_ID: 'NL', FIELD_CALC_RANGE_START: 'Beginning of Year', FIELD_CALC_RANGE_END: 'End Date', FLAG_TOP_ROW: false }, { FIELD_KEY: 89, FIELD_NAME: 'Cumulative Translation Adjustment', KEY_SCRIPT_ID: 'CUSTOMFINANROW_89_T2257860_818', FIELD_TYPE: 'SECTION', FIELD_PRIORITY: 20, SEQ_NUMBER: 24, KEY_PARENT: 82, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'CANNOT_EXPAND', FIELD_FINANCIAL_MARKER: 'CTA', KEY_STYLE: 61, FLAG_SECTION_USE_EXPRESSIONS: false, KEY_SECTION: 89, KEY_SECTION_COMP_ID: 'NL', KEY_TOTAL_STYLE: 62, KEY_BODY_STYLE: 63, FLAG_TOP_ROW: false, RECORDS: [{ FIELD_GROUP_BY: 'ACCOUNT', FIELD_GROUP_BY_FULL: true, FIELD_ORDER_GROUP: 149, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }, { FIELD_GROUP_BY_FULL: true, FIELD_ORDER_TYPE: 'ALPHA', FLAG_ORDER_DESC: false }] }, { FIELD_KEY: 90, FIELD_NAME: 'Total Equity', KEY_SCRIPT_ID: 'CUSTOMFINANROW_90_T2257860_991', FIELD_TYPE: 'FORMULA', FIELD_PRIORITY: 21, SEQ_NUMBER: 25, KEY_PARENT: 75, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', FIELD_FINANCIAL_MARKER: 'EQUITY', KEY_STYLE: 64, FLAG_DYNAMIC_HEADER_TOTAL: true, FLAG_FORMULA_USE_EXPRESSIONS: false, KEY_HEADER_FORMULA_ROW: 82, FIELD_FORMULA_PARTS: 0, FLAG_TOP_ROW: false }, { FIELD_KEY: 91, FIELD_NAME: 'Total Liabilities &amp; Equity', KEY_SCRIPT_ID: 'CUSTOMFINANROW_91_T2257860_761', FIELD_TYPE: 'FORMULA', FIELD_PRIORITY: 22, SEQ_NUMBER: 26, FLAG_SHOW_NAME: true, FLAG_SHOW_TOTAL_NAME: true, FIELD_COLLAPSED_SECTION: 'EXPANDED', KEY_STYLE: 65, FLAG_DYNAMIC_HEADER_TOTAL: true, FLAG_FORMULA_USE_EXPRESSIONS: false, KEY_HEADER_FORMULA_ROW: 75, FIELD_FORMULA_PARTS: 0, FLAG_TOP_ROW: true }], FIELD_KEY: 4, KEY_SCRIPT_ID: 'CUSTOMLAYOUT_4_T2257860_557', FIELD_NAME: 'Custom Balance Sheet Layout(US)', FIELD_FINANCIAL_TYPE: 'FINANCIAL_BALANCE_SHEET_STMT', FIELD_EXPAND_LEVEL: 'EXPANDED', FIELD_OVERALL_INDENT: 'HIERARCHY', KEY_DEFAULT_HEADER_STYLE: 9, KEY_DEFAULT_SECTION_STYLE: 10, KEY_DEFAULT_FORMULA_STYLE: 11, KEY_DEFAULT_TEXT_STYLE: 12 }