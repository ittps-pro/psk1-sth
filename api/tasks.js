let ff = [];

let data = {
  tasks: [],

  fields: [
    ['key', 'номер'],
    ['date', ' дата'],
    ['uuid', ' id'],
    ['proveden ', ' Проведен'],
    ['delete', ' ПометкаУдаления'],
    ['cost', ' ПлановаяСтоимость'],
    [' type ', ' ВидОперации'],
    ['next_date', ' ДатаСледующейПоверки'],
    ['exec', ' Исполнитель'],
    ['count', ' КоличествоСчетчиков'],
    [' contact ', ' КонтактноеЛицо'],
    ['total', ' СуммаДокумента'],
    ['desc', ' ОписаниеЗаявки'],
    ['manager ', ' Ответственный'],
    ['ID_1C', 'ID_1C'],
    ['date', ' ПланируемаяДата'],
    ['time', ' ПланируемоеВремя'],
    ['district', ' РайонГорода'],
    ['ticket_status', ' СтатусЗаявки'],
    ['uk', ' УправляющаяКомпания'],
    ['time_range', ' ЖелаемыйИнтервал'],
    ['invoice', ' БезналичныйРасчет'],
    ['phone', ' Телефон'],
    ['requester', ' Заказчик'],
    ['fullname', ' НаименованиеПолное'],
    ['contact', ' ОсновноеКонтактноеЛицо'],
    ['customer', ' Абонент'],
    ['customer_type', 'ТипАбонента'],
    ['customer_lastname', ' Фамилия'],
    ['customer_fisrtname', ' Имя'],
    ['customer_middlename ', ' Отчество'],
    ['address_region', ' Регион'],
    ['address_area', ' Округ'],
    ['address_district', ' абРайон'],
    ['address_city', ' НасПункт'],
    ['address_street', ' Улица'],
    [' address_number', ' Дом'],
    ['address_building ', ' Корпус'],
    [' address_kv', ' Квартира'],
    ['address_district', ' Район'],
    ['customer_id', ' ID_Абонента'],
    ['comment', ' Комментарий'],
    ['ticket_id', ' ИДЗаявки'],
    ['loading_count', ' КоличествоСчетчиковЗагрузка'],
    ['planned_cost', ' Плановаястоимость'],
  ],
};
let cc = data.fields.forEach((v, n) => {
  let key = v[0].replace(' ', ''),
    value = v[1].replace(' ', '');

  ff.push({ key, value });

  //  console.log(ff[key]);
});

// let a = Array.from
// let key = v[0], value = v[1]
// ({ key: , value: v[1].replace(' ', '') }));

console.log(ff);

// const axios
//
// const php = require('php');

// php.run('tasks.php');
