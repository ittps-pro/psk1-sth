const axios = require('axios');

const bitrix = axios.create({
  baseURL: 'https://poverkaspb.bitrix24.ru/rest/1/txrhec18y1q5ntxt/',
  headers: {
    Accept: 'application/json',
  },
});

let deal = (id) =>
  bitrix.get('crm.deal.get?id=' + id).then((r) => {
    deal = r.data['result'];
  });

// contact = bitrix
//   .get('crm.contact.get?id=' + deal['CONTACT_ID'])
//   .then((r) => r.data['result']);

//   .then((r) => r.data['result']);
// console.log(deal);
// return bx;

deal(10003);

/*


{
  ID: '10003',
  TITLE: ' Урицкого 22-10',
  TYPE_ID: 'SALE',
  STAGE_ID: 'WON',
  PROBABILITY: null,
  CURRENCY_ID: 'RUB',
  OPPORTUNITY: '0.00',
  IS_MANUAL_OPPORTUNITY: 'N',
  TAX_VALUE: '0.00',
  LEAD_ID: null,
  COMPANY_ID: '0',
  CONTACT_ID: '9815',
  QUOTE_ID: null,
  BEGINDATE: '2024-02-29T03:00:00+03:00',
  CLOSEDATE: '2024-04-10T03:00:00+03:00',
  ASSIGNED_BY_ID: '67',
  CREATED_BY_ID: '67',
  MODIFY_BY_ID: '1',
  DATE_CREATE: '2024-02-29T10:04:00+03:00',
  DATE_MODIFY: '2024-09-18T10:58:14+03:00',
  OPENED: 'Y',
  CLOSED: 'Y',
  COMMENTS: '1ХВС*800\n',
  ADDITIONAL_INFO: null,
  LOCATION_ID: null,
  CATEGORY_ID: '0',
  STAGE_SEMANTIC_ID: 'S',
  IS_NEW: 'N',
  IS_RECURRING: 'N',
  IS_RETURN_CUSTOMER: 'Y',
  IS_REPEATED_APPROACH: 'N',
  SOURCE_ID: 'CALL',
  SOURCE_DESCRIPTION: null,
  ORIGINATOR_ID: null,
  ORIGIN_ID: null,
  MOVED_BY_ID: '67',
  MOVED_TIME: '2024-04-10T12:27:24+03:00',
  LAST_ACTIVITY_TIME: '2024-09-18T10:58:14+03:00',
  UTM_SOURCE: null,
  UTM_MEDIUM: null,
  UTM_CAMPAIGN: null,
  UTM_CONTENT: null,
  UTM_TERM: null,
  LAST_ACTIVITY_BY: '1',
  UF_CRM_1692272600490: '91',
  UF_CRM_1692272618723: '',
  UF_CRM_1692272649478: '',
  UF_CRM_1692272723945: '11679',
  UF_CRM_1692273602855: '1',
  UF_CRM_1692273799717: '2024-03-15T00:00:00+03:00',
  UF_CRM_1692273840: '',
  UF_CRM_1692282498: '',
  UF_CRM_1692282772651: '',
  UF_CRM_1692282805946: '',
  UF_CRM_1692282866779: '',
  UF_CRM_1692282901409: '',
  UF_CRM_1692282930667: '',
  UF_CRM_1692282959315: '',
  UF_CRM_1692283004132: '',
  UF_CRM_1692283325197: '',
  UF_CRM_1692283341615: '',
  UF_CRM_1692283357370: '',
  UF_CRM_1692283383088: [],
  UF_CRM_1692357613: [],
  UF_CRM_1693308402347: false,
  UF_CRM_64F9752A459C6: '',
  UF_CRM_64F9752A6D92E: '',
  UF_CRM_64F9752A7731C: '',
  UF_CRM_64F9752A856E4: '',
  UF_CRM_64F9752A96075: '',
  UF_CRM_1695125625: '0',
  UF_CRM_1695125658: '',
  UF_CRM_1695125771: '',
  UF_CRM_1695125782: '',
  UF_CRM_1695125795: '',
  UF_CRM_1695125847: '',
  UF_CRM_1695125868: '000109789',
  UF_CRM_1697292115280: '2024-02-29T03:00:00+03:00',
  UF_CRM_1698133839387: '',
  : '68dc8f55-d6c9-11ee-8bb0-525400194ce9',
  UF_CRM_1705665024: '',
  UF_CRM_1710325494: '1',
  UF_CRM_1710325594: '',
  UF_CRM_1712496487135: '',
  UF_CRM_1712496611379: '',
  UF_CRM_1722983220: '',
  UF_CRM_UISC84CE00EF2: '',
  UF_CRM_66B38FFA9948B: '',
  UF_CRM_1724263582: '',
  UF_CRM_1724807967311: '',
  UF_CRM_1724818060332: '',
  UF_CRM_1725854954: '',
  // UF_CRM

]

*/
