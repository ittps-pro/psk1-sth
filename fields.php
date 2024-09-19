<?php


$lead_info = [];

$operations_array = [];


$next_time = [];
$contact_info = [];


$address_array = ["street"];

$raion_array = []

$fields = [

  "номер" => $lead_info['UF_CRM_1695125868'],
	"дата" => $create_date,
	"id" => $lead_info['UF_CRM_1699614246981'],
	"Проведен" => true,
	"ПометкаУдаления" => false,
	"ПлановаяСтоимость" => 0,
	"ВидОперации" => $operations_array[$lead_info['UF_CRM_1692272723945']],
	"ДатаСледующейПоверки" => $next_time,
	"Исполнитель" => "",
	"КоличествоСчетчиков" => $lead_info['UF_CRM_1692273602855'],
	"КонтактноеЛицо" => $contact_info['LAST_NAME'] . ' ' . $contact_info['NAME'] . ' ' . $contact_info['SECOND_NAME'],
	"СуммаДокумента" => $lead_info['OPPORTUNITY'],
	"ОписаниеЗаявки" => $lead_info['COMMENTS'],
	"Ответственный" => "",
	"ID_1C" => $lead_info['ASSIGNED_BY_ID'],
	"ПланируемаяДата" => date('Y-m-d', strtotime($lead_info['UF_CRM_1692273799717']) + $add_plan_date),
	"ПланируемоеВремя" => date('H:i:s', strtotime($lead_info['UF_CRM_1692273799717'])),
	"РайонГорода" => $raion_array[$lead_info['UF_CRM_1692272600490']],
	"СтатусЗаявки" => $lead_info['STAGE_ID'],
	"УправляющаяКомпания" => $uprav_company,
	"ЖелаемыйИнтервал" => $lead_info['UF_CRM_1695125795'],
	"БезналичныйРасчет" => $pay_type,
	"Телефон" => $contact_info['PHONE'][0]['VALUE'],
	"Заказчик" => "",
	"НаименованиеПолное" => "",
	"ОсновноеКонтактноеЛицо" => $contact_info['LAST_NAME'] . ' ' . $contact_info['NAME'] . ' ' . $contact_info['SECOND_NAME'],
	"Абонент" => str_replace(',', '', $contact_info['UF_CRM_1697290498774']),
	"ТипАбонента" => $contact_info['UF_CRM_1697290457013'],
	"Фамилия" => $contact_info['LAST_NAME'],
	"Имя" => $contact_info['NAME'],
	"Отчество" => $contact_info['SECOND_NAME'],
	"Регион" => $address_array[0],
	"Округ" => $address_array[1],
	"абРайон" => $address_array[2],
	"НасПункт" => $address_array[3],
	"Улица" => $address_array[4],
	"Дом" => $address_array[5],
	"Корпус" => $address_array[6],
	"Квартира" => $address_array[7],
	"КоличествоСчетчиков" => $lead_info['UF_CRM_1692273602855'],
	"Район" => $raion_array[$lead_info['UF_CRM_1692272600490']],
	"ID_Абонента" => $lead_info['CONTACT_ID'],
	"Комментарий" => $lead_info['COMMENTS'],
	"ЖелаемыйИнтервал" => $lead_info['UF_CRM_1695125795'],
	"Заказчик" => $customer,
	"ИДЗаявки" => $lead_info['UF_CRM_1710325594'],
	"КоличествоСчетчиковЗагрузка" => $lead_info['UF_CRM_1710325494'],
	"Плановаястоимость" => $lead_info['UF_CRM_1712496611379']

];




print_r(array_keys($fields));