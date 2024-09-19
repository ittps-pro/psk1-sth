const axios = require('axios').default;

const createAddress = () => {
  interface Address {}

  // console.log(fields);
};

const createTicket = (fields: any[]) => {
  let { customer, address, ticket } = fields;

  let uf = ['UF_CRM_1695125868'];
  // address.district =

  [
    {
      key: 'region',
      value: 'Регион',
    },
    { key: 'area', value: 'Округ' },
    { key: 'customer.district', value: 'абРайон' },
    { key: 'address.city', value: 'НасПункт' },
    { key: 'address.street', value: 'Улица' },
    { key: 'address.number', value: 'Дом' },
    { key: 'address.building', value: 'Корпус' },
    { key: 'address.kv', value: 'Квартира' },
    { key: 'address.district', value: 'Район' },
  ];

  // type AddressC = 'Region, Area, City, Street,Number,Building,Flat,District';

  // "Region"

  interface Address {}

  type RuProps = {
    номер: number;
    Проведен: 1;
    Исполнитель: '';
    КоличествоСчетчиков: 0;
    КонтактноеЛицо: '';
    СуммаДокумента: 0;
    ОписаниеЗаявки: '';
    ПланируемаяДата: '';
  };
};

// comment

type Message = {
  ENTITY_ID: '';
  ENTITY_TYPE: '';
  COMMENT: '';
};

const createMessage = (id, message) => {
  console.log('message', message);

  let M = (msg: Message) => [msg];
  console.log(M(message));
};
