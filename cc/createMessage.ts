import axios from 'axios';

type Message = {
  ENTITY_ID: number;
  ENTITY_TYPE: 'deal';
  COMMENT: string;
};

const api = axios.create({
  baseURL: process.env.BX_URL,
  headers: {
    Accept: 'application/json',
  },

  transformRequest: (request, response) => {},
});

const createMessage = (id: number, message: string) => {
  console.log('message', message);

  // axios.get('')
  // let M = (msg: Message) => [msg];
};

export default {
  createMessage,
};
