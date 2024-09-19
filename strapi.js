const axios = require('axios').default;

const strapi = axios.create({
  baseURL: 'https://api.psk1.spb.ru/api/',
  headers: {
    Authorization: '',
    Accept: 'application/json',
  },
});

const bx = axios.create({
  baseURL: process.env.BX_URL,
  headers: {
    Authorization: '',
    Accept: 'application/json',
  },
});

async function bx_request(endpoint) {
  const requestConfig = {
    url: 'crm.deal.fields',
  };

  try {
    let { data } = await bx.request(requestConfig);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }

  // console.log(data);

  // if (data) {
  //   console.log(data.data);
  // }

  return data;
}

async function request(endpoint) {
  const requestConfig = {
    url: endpoint,
  };

  let response = [];

  try {
    let { data } = await strapi.request(requestConfig);
    console.log(data);

    response = data;

    return data;
  } catch (E) {
    throw E;
  }

  // console.log(data);

  // if (data) {
  //   console.log(data.data);
  // }

  return { response };
}

module.exports = {
  strapi,
  request,
  bx: bx_request,
};
