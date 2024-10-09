import { UUID, randomUUID } from "crypto";
import { stringify } from "querystring";
import { TimerOptions } from "timers";
let bx_address = ["region", "subregion", "district", "city", "street", "building_number", "building_extra", "number"]


export function convert(_ticket: number, _data: any[]) {


    const ids = [
        {

            id: "UF_CRM_1699614246981"
        }
        ,
        ticket:
        { id: 1, cc: "номер",
         keys: "" }, 
         
         
         ];
        //  enum EnumOfSelectors: ids | 1 | 2 | 3 
import { StringDecoder } from "string_decoder";
// const dd = enum(1 | 2  | 3);
    // let Customer:
        interface TiceCustomer {
        id?:number;
        lastname?:string;
        firtname?: string;
        patronymic?: string; 
        phone?: String | any; 
        description?: string;
    }

    let cc_address = [
  
        "Регион", "Округ", "абРайон", "НасПункт", "Улица", "Дом", "Корпус", "Квартира"
    
    ]
    let d = [
        // => $create_date,
        "id"
        // => $lead_info['UF_CRM_1699614246981'],
        ,



        // => $lead_info['UF_CRM_1699614246981'],
        "Проведен" // => 
        // => true,
        , // => 


        // => true,
        "ПометкаУдаления"
        // => false,
        ,



        // => false,
        "ПлановаяСтоимость"
        // => $lead_info['UF_CRM_1724807967311'],
        ,



        // => $lead_info['UF_CRM_1724807967311'],
        "ВидОперации"
        // => $operations_array[$lead_info['UF_CRM_1692272723945']],
        ,



        // => $operations_array[$lead_info['UF_CRM_1692272723945']],
        "ДатаСледующейПоверки"
        // => $next_time,
        ,



        // => $next_time,
        "Исполнитель"
        // => "",
        ,



        // => "",
        "КоличествоСчетчиков"
        // => $lead_info['UF_CRM_1692273602855'],
        ,



        // => $lead_info['UF_CRM_1692273602855'],
        "КонтактноеЛицо"
        // => $contact_info['LAST_NAME'] . ' ' . $contact_info['NAME'] . ' ' . $contact_info['SECOND_NAME'],
        ,



        // => $contact_info['LAST_NAME'] . ' ' . $contact_info['NAME'] . ' ' . $contact_info['SECOND_NAME'],
        "СуммаДокумента"
        // => $lead_info['OPPORTUNITY'],
        ,



        // => $lead_info['OPPORTUNITY'],
        "ОписаниеЗаявки"
        // => $lead_info['COMMENTS'],
        ,



        // => $lead_info['COMMENTS'],
        "Ответственный"
        // => "",
        ,



        // => "",
        "ID_1C"
        // => $lead_info['ASSIGNED_BY_ID'],
        ,



        // => $lead_info['ASSIGNED_BY_ID'],
        "ПланируемаяДата"
        // => date('Y-m-d', strtotime($lead_info['UF_CRM_1692273799717']) + $add_plan_date),
        ,



        // => date('Y-m-d', strtotime($lead_info['UF_CRM_1692273799717']) + $add_plan_date),
        "ПланируемоеВремя"
        // => date('H:i:s', strtotime($lead_info['UF_CRM_1692273799717']) + 7200),
        ,



        // => date('H:i:s', strtotime($lead_info['UF_CRM_1692273799717']) + 7200),
        "РайонГорода"
        // => $raion_array[$lead_info['UF_CRM_1692272600490']],
        ,



        // => $raion_array[$lead_info['UF_CRM_1692272600490']],
        "СтатусЗаявки"
        // => $lead_info['STAGE_ID'],
        ,



        // => $lead_info['STAGE_ID'],
        "УправляющаяКомпания"
        // => $uprav_company,
        ,



        // => $uprav_company,
        "ЖелаемыйИнтервал"
        // => $lead_info['UF_CRM_1695125795'],
        ,



        // => $lead_info['UF_CRM_1695125795'],
        "БезналичныйРасчет"
        // => $pay_type,
        ,



        // => $pay_type,
        "Телефон"
        // => $contact_info['PHONE'][0]['VALUE'],
        ,



        // => $contact_info['PHONE'][0]['VALUE'],
        "Заказчик"
        // => "",
        ,



        // => "",
        "НаименованиеПолное"
        // => "",
        ,



        // => "",
        "ОсновноеКонтактноеЛицо"
        // => $contact_info['LAST_NAME'] . ' ' . $contact_info['NAME'] . ' ' . $contact_info['SECOND_NAME'],
        ,



        // => $contact_info['LAST_NAME'] . ' ' . $contact_info['NAME'] . ' ' . $contact_info['SECOND_NAME'],
        "Абонент"
        // => str_replace(',', '', $contact_info['UF_CRM_1697290498774']),
        ,



        // => str_replace(',', '', $contact_info['UF_CRM_1697290498774']),
        "ТипАбонента"
        // => $contact_info['UF_CRM_1697290457013'],
        ,



        // => $contact_info['UF_CRM_1697290457013'],
        "Фамилия"
        // => $contact_info['LAST_NAME'],
        ,



        // => $contact_info['LAST_NAME'],
        "Имя"
        // => $contact_info['NAME'],
        ,



        // => $contact_info['NAME'],
        "Отчество"
        // => $contact_info['SECOND_NAME'],
        ,


        ...cc_address,


        // => $address_array[7],
        "КоличествоСчетчиков"
        // => $lead_info['UF_CRM_1692273602855'],
        ,



        // => $lead_info['UF_CRM_1692273602855'],
        "Район"
        // => $raion_array[$lead_info['UF_CRM_1692272600490']],
        ,



        // => $raion_array[$lead_info['UF_CRM_1692272600490']],
        "ID_Абонента"
        // => $lead_info['CONTACT_ID'],
        ,



        // => $lead_info['CONTACT_ID'],
        "Комментарий"
        // => $lead_info['COMMENTS'],
        ,



        // => $lead_info['COMMENTS'],
        "ЖелаемыйИнтервал"
    ];

}

// => $lead_info['UF_CRM_1695125868'],

// TimeRanges
function RangeTime(start: TimeRanges, end) {

    if (start && end) {

        return { time: [start, end] }
    }
}

interface QuickTicket {
    id: number | string;
    title?: string | any | null;
    uuid?: string | any | null
    customer?: any
    date?: any
    time?: any
    address?: any
    status?: any
    comments: Text;
    manager: any[] | null

}

// id: number | string;
declare function getManagerById(_id: QuickTicket["manager"]) {


}

// type TicketManager = getManagerById[""];

type QuickTicketType = {
    id: 1;
    uuid: 1;
    customer?: 1;
    date?: 1;
    time?: ["10:00", "20:00"];
    address?: 1;
    status?: 1;
    comments?: string | any[] | null;
    manager?: number | string | null | any//getManager
    // manager: TicketManager(1)
};

type QuickTicketTikcetsItemId = QuickTicketType["id"]

type QuickTicketTikcetsItemList = QuickTicketType[]

const createQuickTicket = (...data: QuickTicketType[]) => {


    console.log(data)

    return data
}
class uuid(id: number | string | any)  {
    randomUUID(id)

    generateKe
    // _uuid: "ksdjfbiertybuief",

}



createQuickTicket({
    id: 1,
    time: ["10:00", "13:00"],
    date: "08.10.2024",
    comments: "1111",
    manager: 1,
    uuid: 1
})

// let ticket: QuickTicket[] [
// ]