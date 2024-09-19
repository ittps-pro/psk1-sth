const axios = require('axios').default;

// import { Bitrix24 } from 'bitrix24-api';

async function bxRequest(params) {
  const bx = axios.create({
    baseURL: 'https://poverkaspb.bitrix24.ru/rest/1/txrhec18y1q5ntxt/',
    headers: {
      Accept: 'application/json',
    },
  });

  const { data } = await bx.request({
    url: 'crm.deal.list',
    method: 'get',
    ...params,
  });
  console.log('bxRequest');
  console.log(data);

  return data['result'];



  
}

module.exports = { bxRequest };
