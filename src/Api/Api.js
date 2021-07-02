import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { isEmpty } from "../helpers/common";
import NewCliet from '../assets/images/statusFilter/NewClient.svg'
import Ghost from '../assets/images/statusFilter/ghost.svg'
import BronzeClient from '../assets/images/statusFilter/BronzeClient.svg'
import GoldClient from '../assets/images/statusFilter/GoldClient.svg'
import RybyClient from '../assets/images/statusFilter/RybyClient.svg'
import SapfirClient from '../assets/images/statusFilter/SapfirClient.svg'
import BrilClient from '../assets/images/statusFilter/BrilClient.svg'
import sortAsc from '../assets/images/sortImage/asc.svg'
import sortDesc from '../assets/images/sortImage/desc.svg'

const mock = new MockAdapter(axios, { delayResponse: 500 });

const user = {
    id: 3,
    name: 'FabiozZz',
    email: 'fabiozzz.dev@gmail.com',
}

const clients = [
    {
        id: 1, name: 'Константин', middleName: 'Константинович', lastName: 'Константинопольский',
        status: 30, totalPay: 3200, is_Archive: true, abonement: 'Стандарт', is_Adult: false, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: [{
            serial: '',
            number: ''
        }], statusName: 'Сапфировый', img: SapfirClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: true, toDay: false,
    },
    {
        id: 2, name: 'Иван', middleName: 'Беляев', lastName: 'Беляев',
        status: 0, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Бронзовый', img: BronzeClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: true, toDay: false
    },
    {
        id: 3, name: 'Адам', middleName: 'Константинович', lastName: 'Соловьев',
        status: 0, totalPay: 3200, is_Archive: false, abonement: '', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: null, cardFrom: null, cardTo: null, lessons: '', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '21.10.1989', call: false, burnAbonement: false,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: false, toDay: false
    },
    {
        id: 4, name: 'Ольга', middleName: '', lastName: 'Васильева',
        status: 13, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Рубиновый', img: RybyClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: true, toDay: false
    },
    {
        id: 5, name: 'Ирина', middleName: 'Константинович', lastName: 'Дмитриева',
        status: 30, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Сапфировый', img: SapfirClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: true, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: true, toDay: false
    },
    {
        id: 6, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
        status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Брилиантовый', img: BrilClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: false, toDay: false
    },
    {
        id: 25, name: 'Моника', middleName: 'Константинович', lastName: 'Семенова',
        status: 79, totalPay: 3200, is_Archive: false, abonement: 'SMART', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Брилиантовый', img: BrilClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: false, toDay: false
    },
    {
        id: 26, name: 'Сальма', middleName: 'Константинович', lastName: 'Семенова',
        status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Брилиантовый', img: BrilClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: false, toDay: false
    },
    {
        id: 27, name: 'Соня', middleName: 'Константинович', lastName: 'Семенова',
        status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Брилиантовый', img: BrilClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: false, toDay: false
    },
    {
        id: 28, name: 'Фаина', middleName: 'Константинович', lastName: 'Семенова',
        status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Брилиантовый', img: BrilClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: false, toDay: false
    },
    {
        id: 29, name: 'Фатима', middleName: 'Константинович', lastName: 'Семенова',
        status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Брилиантовый', img: BrilClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: false, toDay: false
    },
    {
        id: 30, name: 'Лиза', middleName: 'Константинович', lastName: 'Семенова',
        status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Брилиантовый', img: BrilClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: false, toDay: false
    },
    {
        id: 31, name: 'Тоня', middleName: 'Константинович', lastName: 'Семенова',
        status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Брилиантовый', img: BrilClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: false, toDay: false
    },
    {
        id: 32, name: 'Милена', middleName: 'Константинович', lastName: 'Семенова',
        status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Брилиантовый', img: BrilClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', freeze: false, toDay: false
    },
    {
        id: 7, name: 'Вера', middleName: 'Константинович', lastName: 'Григорьева',
        status: 11, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: null, room: null
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Золотой', img: GoldClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
        course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: true, toDay: false
    },
    {
        id: 8, name: 'Варвара', middleName: 'Константинович', lastName: 'Климова',
        status: 5, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Бронзовый', img: BronzeClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
        course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: false, toDay: false
    },
    {
        id: 9, name: 'Вера', middleName: 'Константинович', lastName: 'Григорьева',
        status: 3, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Бронзовый', img: BronzeClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
        course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: false, toDay: false
    },
    {
        id: 10, name: 'Виктория', middleName: 'Константинович', lastName: 'Латвинова',
        status: 3, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Бронзовый', img: BronzeClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
        course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: false, toDay: false
    },
    {
        id: 11, name: 'Алксандра', middleName: 'Константинович', lastName: 'Кононова',
        status: 18, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Рубиновый', img: RybyClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
        course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: true, toDay: false
    },
    {
        id: 12, name: 'Филлип', middleName: 'Константинович', lastName: 'Зотов',
        status: 0, totalPay: 3200, is_Archive: false, abonement: '', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: null, cardFrom: null, cardTo: null, lessons: '', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
        course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: false, toDay: false
    },
    {
        id: 13, name: 'Игорь', middleName: 'Константинович', lastName: 'Дубровин',
        status: 15, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Рубиновый', img: RybyClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1993', call: true, burnAbonement: false,
        course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: false, toDay: false
    },
    {
        id: 14, name: 'Константин', middleName: 'Константинович', lastName: 'Волков',
        status: 20, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Рубиновый', img: RybyClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
        course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: false, toDay: false
    },
    {
        id: 15, name: 'Владимир', middleName: 'Константинович', lastName: 'Панкратов',
        status: 12, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Рубиновый', img: RybyClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: true, burnAbonement: true,
        course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: false, toDay: false
    },
    {
        id: 16, name: 'Ева', middleName: 'Константинович', lastName: 'Щербакова',
        status: 2, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Новый', img: NewCliet, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
        course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: false, toDay: false
    },
    {
        id: 17, name: 'Екатерина', middleName: 'Константинович', lastName: 'Фадеева',
        status: 10, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Золотой', img: GoldClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
        course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: false, toDay: false
    },
    {
        id: 18, name: 'Таисия', middleName: 'Константинович', lastName: 'Александрова',
        status: 14, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Рубиновый', img: RybyClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
        course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: true, toDay: false
    },
    {
        id: 19, name: 'Арсений', middleName: 'Константинович', lastName: 'Горшков',
        status: 0, totalPay: 3200, is_Archive: false, abonement: '', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: null, cardFrom: null, cardTo: null, lessons: '', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
        course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: false, toDay: false
    },
    {
        id: 20, name: 'Вера', middleName: 'Константинович', lastName: 'Самсонова',
        status: 1, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Новый', img: NewCliet, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: false, toDay: false
    },
    {
        id: 21, name: 'Марк', middleName: 'Константинович', lastName: 'Новиков',
        status: 7, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Золотой', img: GoldClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
        course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: true, toDay: false
    },
    {
        id: 22, name: 'Богдан', middleName: 'Константинович', lastName: 'Федоров',
        status: 0, totalPay: 3200, is_Archive: false, abonement: '', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: null, cardFrom: null, cardTo: null, lessons: '', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
        course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: false, toDay: false
    },
    {
        id: 23, name: 'Владимир', middleName: 'Константинович', lastName: 'Андреев',
        status: 8, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Золотой', img: GoldClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
        course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: false, toDay: false
    },
    {
        id: 24, name: 'Владлен', middleName: 'Константинович', lastName: 'Шаткий',
        status: 9, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }, {
            lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
        }], address: {
            street: 'Красная', house: '155', corpus: '2', room: '802'
        }, whereIs: 'Яндекс Карты', privateData: {}, statusName: 'Золотой', img: GoldClient, cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
        course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: false, toDay: false
    },

];

const data = [
    {
        //Константин Константинович Константинопольский
        id: 1, totalClients: 14, toDay: 0, name: 'Бразильское Джиу-Джитсу', coach: 'Плиев Станислав Робертович', timeTraining: '12.04.2021',
        clients: [
            {
                id: 1, name: 'Константин', middleName: 'Константинович', lastName: 'Константинопольский',
                status: 30, totalPay: 3200, is_Archive: true, abonement: 'Стандарт', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Сапфировый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: true, toDay: false,
            },
            {
                id: 2, name: 'Иван', middleName: 'Беляев', lastName: 'Беляев',
                status: 5, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Бронзовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: true, toDay: false
            },
            {
                id: 3, name: 'Адам', middleName: 'Константинович', lastName: 'Соловьев',
                status: 0, totalPay: 3200, is_Archive: false, abonement: '', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: '', cardFrom: '', cardTo: '', lessons: '', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '21.10.1989', call: false, burnAbonement: false,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: false, toDay: false
            },
            {
                id: 4, name: 'Ольга', middleName: '', lastName: 'Васильева',
                status: 13, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Рубиновый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: true, toDay: false
            },
            {
                id: 5, name: 'Ирина', is_Archive: false, middleName: 'Константинович', lastName: 'Дмитриева',
                status: 30, totalPay: 3200, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', is_Archive: false, house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Сапфировый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: true, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: true, toDay: false
            },
            {
                id: 6, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Брилиантовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: false, toDay: false
            },
            {
                id: 25, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, totalPay: 3200, abonement: 'SMART', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Брилиантовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: false, toDay: false
            },
            {
                id: 26, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Брилиантовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: false, toDay: false
            },
            {
                id: 27, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Брилиантовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: false, toDay: false
            },
            {
                id: 28, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Брилиантовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: false, toDay: false
            },
            {
                id: 29, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Брилиантовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: false, toDay: false
            },
            {
                id: 30, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Брилиантовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: false, toDay: false
            },
            {
                id: 31, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Брилиантовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: false, toDay: false
            },
            {
                id: 32, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Брилиантовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Бразильское Джиу-Джитсу', couch: 'Плиев Станислав Робертович', freeze: false, toDay: false
            },
        ]
    },
    {
        id: 2, totalClients: 6, toDay: 0, name: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', timeTraining: '12.04.2021',
        clients: [
            {
                id: 7, name: 'Вера', middleName: 'Константинович', lastName: 'Григорьева',
                status: 11, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: null, room: null
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Золотой пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
                course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: true, toDay: false
            },
            {
                id: 8, name: 'Варвара', middleName: 'Константинович', lastName: 'Климова',
                status: 5, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Бронзовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
                course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: false, toDay: false
            },
            {
                id: 9, name: 'Вера', middleName: 'Константинович', lastName: 'Григорьева',
                status: 3, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Бронзовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
                course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: false, toDay: false
            },
            {
                id: 10, name: 'Виктория', middleName: 'Константинович', lastName: 'Латвинова',
                status: 3, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Бронзовый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
                course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: false, toDay: false
            },
            {
                id: 11, name: 'Алксандра', middleName: 'Константинович', lastName: 'Кононова',
                status: 18, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Рубиновый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
                course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: true, toDay: false
            },
            {
                id: 12, name: 'Филлип', middleName: 'Константинович', lastName: 'Зотов',
                status: 0, totalPay: 3200, is_Archive: false, abonement: '', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: '', cardFrom: '', cardTo: '', lessons: '', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
                course: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', freeze: false, toDay: false
            },
        ]
    },
    {
        id: 3, totalClients: 6, toDay: 0, name: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', timeTraining: '12.04.2021',
        clients: [
            {
                id: 13, name: 'Игорь', middleName: 'Константинович', lastName: 'Дубровин',
                status: 15, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: {
                    serial: '462415',
                    number: '12323123'
                }, statusName: 'Рубиновый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1993', call: true, burnAbonement: false,
                course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: false, toDay: false
            },
            {
                id: 14, name: 'Константин', middleName: 'Константинович', lastName: 'Волков',
                status: 20, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Рубиновый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: true, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
                course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: false, toDay: false
            },
            {
                id: 15, name: 'Владимир', middleName: 'Константинович', lastName: 'Панкратов',
                status: 12, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Рубиновый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: true, burnAbonement: true,
                course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: false, toDay: false
            },
            {
                id: 16, name: 'Ева', middleName: 'Константинович', lastName: 'Щербакова',
                status: 2, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Новый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
                course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: false, toDay: false
            },
            {
                id: 17, name: 'Екатерина', middleName: 'Константинович', lastName: 'Фадеева',
                status: 10, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Золотой пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
                course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: false, toDay: false
            },
            {
                id: 18, name: 'Таисия', middleName: 'Константинович', lastName: 'Александрова',
                status: 14, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: true, phone: '+7 (997) 567-12-67', filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Рубиновый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
                course: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', freeze: true, toDay: false
            },
        ]
    },
    {
        id: 4, totalClients: 6, toDay: 0, name: 'Маленькие воины', coach: 'Корицкая Диана Александровна', timeTraining: '12.04.2021',
        clients: [
            {
                id: 19, name: 'Арсений', middleName: 'Константинович', lastName: 'Горшков',
                status: 0, totalPay: 3200, is_Archive: false, abonement: '', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: '', cardFrom: '', cardTo: '', lessons: '', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
                course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: false, toDay: false
            },
            {
                id: 20, name: 'Вера', middleName: 'Константинович', lastName: 'Самсонова',
                status: 1, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Новый пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: false, toDay: false
            },
            {
                id: 21, name: 'Марк', is_Archive: false, middleName: 'Константинович', lastName: 'Новиков',
                status: 7, totalPay: 3200, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Золотой пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
                course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: true, toDay: false
            },
            {
                id: 22, name: 'Богдан', middleName: 'Константинович', lastName: 'Федоров',
                status: 0, totalPay: 3200, is_Archive: false, abonement: '', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: '', cardFrom: '', cardTo: '', lessons: '', health: false, healthExpire: '22.12.2021', birthday: false, birthdayDate: '06.10.1989', call: false, burnAbonement: false,
                course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: false, toDay: false
            },
            {
                id: 23, name: 'Владимир', middleName: 'Константинович', lastName: 'Андреев',
                status: 8, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Золотой пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: true, burnAbonement: false,
                course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: false, toDay: false
            },
            {
                id: 24, name: 'Владлен', middleName: 'Константинович', lastName: 'Шаткий',
                status: 9, totalPay: 3200, is_Archive: false, abonement: 'MINI', is_Adult: false, filial: 'Московская 130', is_whatsApp: false, parents: [{
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }, {
                    lastName: 'Константинопольский', name: 'Константин', middleName: 'Константинович', hoIs: 'Отец', phone: '+7 (123) 456-78-90'
                }], address: {
                    street: 'Красная', house: '155', corpus: '2', room: '802'
                }, whereIs: 'Яндекс Карты', privateData: [], statusName: 'Золотой пользователь', cardFrom: '22.11.2021', cardTo: '22.12.21', lessons: '8', health: false, healthExpire: '22.12.2021', birthday: true, birthdayDate: '06.10.1989', call: false, burnAbonement: true,
                course: 'Маленькие воины', coach: 'Корицкая Диана Александровна', freeze: false, toDay: false
            },
        ]
    }
];
const dataSelectAllGroup = [
    {
        id: 1, name: 'дети 3-7 лет', course: [
            { id: 1, name: 'Маленькие Самураи' },
            { id: 2, name: 'Маленький Чемпион' },
            { id: 3, name: 'Маленькие воины' },
        ]
    },
    {
        id: 2, name: 'подростки 8-15 лет', course: [
            { id: 4, name: 'Тхэквондо' },
            { id: 5, name: 'Бразильское Джиу-Джитсу' },
            { id: 6, name: 'Самбо/Дзюдо' },
            { id: 7, name: 'Бокс' },
            { id: 8, name: 'Тайский бокс' },
        ]
    },
    {
        id: 3, name: 'Взрослые 16+ лет', course: [
            { id: 9, name: 'Бокс' },
            { id: 10, name: 'Тайский бокс' },
            { id: 11, name: 'Грэпплинг' },
        ]
    },
];
const dataSelectChildGroup = [
    {
        id: 1, name: 'дети 3-7 лет', course: [
            { id: 1, name: 'Маленькие Самураи' },
            { id: 2, name: 'Маленький Чемпион' },
            { id: 3, name: 'Маленькие воины' },
        ]
    },
    {
        id: 2, name: 'подростки 8-15 лет', course: [
            { id: 4, name: 'Тхэквондо' },
            { id: 5, name: 'Бразильское Джиу-Джитсу' },
            { id: 6, name: 'Самбо/Дзюдо' },
            { id: 7, name: 'Бокс' },
            { id: 8, name: 'Тайский бокс' },
        ]
    },
];
const dataSelectAdultGroup = [
    {
        id: 3, name: 'Взрослые 16+ лет', course: [
            { id: 9, name: 'Бокс' },
            { id: 10, name: 'Тайский бокс' },
            { id: 11, name: 'Грэпплинг' },
        ]
    },
];
const dataSelectCouch = [
    { id: 1, name: 'Плиев Станислав Робертович' },
    { id: 2, name: 'Кобялко Владимир Владимирович' },
    { id: 3, name: 'Бураков Анатолий Петрович' },
    { id: 4, name: 'Корицкая Диана Александровна' },
];
const filialList = [
    {
        id: 1, name: 'Московская 130'
    },
    {
        id: 2, name: 'Дальняя 99'
    }
]
const typeAboniment = [
    { id: 1, name: 'Стандарт' },
    { id: 2, name: 'SMART' },
    { id: 3, name: 'NONSTOP' },
    { id: 4, name: 'MINI' },
    { id: 5, name: 'Персональная тренировка' },
    { id: 6, name: 'GOLD' },
    { id: 7, name: 'PLATINUM' },
    { id: 8, name: 'SUPER PLATINUM' },
    { id: 9, name: 'PROFI' },
];
const typesLists = [
    { id: 1, name: 'На обзвон' },
    { id: 2, name: 'Истекающие абонименты' },
    { id: 3, name: 'Истёкшие абонименты' },
    { id: 4, name: 'Замороженные' },
    { id: 5, name: 'Архивные' },
    { id: 6, name: 'Не добавленные в WhatsApp' },
]
const statusList = [
    { id: 1, name: 'Новый клиент' },
    { id: 2, name: 'Бронзовый клиент' },
    { id: 3, name: 'Золотой клиент' },
    { id: 4, name: 'Рубиновый клиент' },
    { id: 5, name: 'Сапфировый клиент' },
    { id: 6, name: 'Бриллиантовый клиент' },
]
const statusListFilter = [
    { id: 1, name: 'Потенциальные', img: Ghost },
    { id: 2, name: 'Новые', img: NewCliet },
    { id: 3, name: 'Бронзовые', img: BronzeClient },
    { id: 4, name: 'Золотые', img: GoldClient },
    { id: 5, name: 'Рубиновые', img: RybyClient },
    { id: 6, name: 'Сапфировые', img: SapfirClient },
    { id: 7, name: 'Бриллиантовые', img: BrilClient },
]
const sortList = [
    { id: 1, name: 'Дате добавления', img: sortAsc, type: 'asc' },
    { id: 2, name: 'Дате добавления', img: sortDesc, type: 'desc' },
    { id: 3, name: 'Дням рождения', type:'asc',field:'birthdayDate'},
    { id: 4, name: 'Имени', img: sortAsc, type: 'asc',field:'lastName'},
    { id: 5, name: 'Имени', img: sortDesc, type: 'desc',field:'lastName' },
    { id: 6, name: 'Тренеру', img: sortAsc, type: 'asc',field:'coach' },
    { id: 7, name: 'Тренеру', img: sortDesc, type: 'desc',field:'coach' },
    { id: 8, name: 'Типу абонимента', img: sortAsc, type: 'asc',field:'status' },
    { id: 9, name: 'Типу абонимента', img: sortDesc, type: 'desc',field:'status' },
]

/* основные */
mock.onPost('/auth/login').reply(200, { user, accessToken: 'TOKEN_ACC', refreshToken: 'TOKEN_REF' });
mock.onPost('/auth/register').reply(200, { success: 'Ok' });

mock.onPost('/auth/refresh').reply(200, { user, accessToken: 'TOKEN_ACC2', refreshToken: 'TOKEN_REs2' });

/* для главной */

mock.onGet('/clients').reply(200, [...data]);
mock.onGet('/group_list').reply(200, [...dataSelectAllGroup]);
mock.onGet('/couch_list').reply(200, [...dataSelectCouch]);
mock.onPut('/couch_change').reply(200, { success: 'ok' });
mock.onPatch(/\/check_clients\/\d+\/\d+/).reply(200);
mock.onGet(/\/get_profile\/\d+/).reply(200);


mock.onGet('/filial_list').reply(200, [...filialList]);

/* для добавления взрослого клиента */
mock.onGet('/group_list_adult').reply(200, { dataSelectAdultGroup });

/* для добавления ребенка */

mock.onGet('/group_list_child').reply(200, { dataSelectChildGroup })

/* для профиля */

mock.onGet('/get_abonement_list').reply(200, [...typeAboniment]);
mock.onGet('/get_profile_list').reply(200, [...statusList]);

/* для списка клиентов */

mock.onGet('/get_all_clients').reply(200, [...clients])
mock.onGet('/get_types_for_all').reply(200, [...typesLists])
mock.onGet('/get_status_for_all').reply(200, [...statusListFilter])
mock.onGet('/get_sort_for_all').reply(200, [...sortList])

mock.resetHistory();

/**
 * response на логин token & refreshToken
 */

class Api {

    constructor(options = {}) {
        this.client = options.client || axios.create();
        this.token = '';
        this.refreshToken = '';

        this.refreshRequest = null;

        this.client.interceptors.request.use(
            config => {
                if (!this.token) {
                    return config;
                }
                const newConfig = {
                    ...config,
                };
                newConfig.headers.Authorization = `Bearer ${this.token}`;
                return newConfig;
            },
            e => {
                return Promise.reject(e);
            }
        );

        this.client.interceptors.response.use(
            r => r,
            async error => {
                console.log();
                this.refreshToken = localStorage.getItem('refresh_token')
                if (
                    !this.token ||
                    error.message ||
                    error.response.status !== 401
                    ||
                    error.config.retry
                ) {
                    await Promise.reject(error);
                }

                if (!this.refreshRequest) {
                    this.refreshRequest = this.client.post("/auth/refresh", {
                        refreshToken: this.refreshToken,
                    });
                    console.log(this.refreshRequest)
                }
                const { data } = await this.refreshRequest;
                this.token = data.accessToken;
                localStorage.setItem('refresh_token', data.refreshToken)
                this.refreshToken = data.refreshToken;
                const newRequest = {
                    ...error.config,
                    retry: true,
                };

                return this.client(newRequest);
            }
        )
    }

    setToken(some) {
        this.token = some;
    }

    getToken() {
        return this.token;
    }

    /* основные api */

    /**
     * Вход в приложение
     * Отправляет данные пользователя {email,password}
     * Получает пару токенов и пользователя
     * @param login
     * @param password
     * @returns {Promise<*>}
     */
    async login({ email, password }) {
        const res = await this.client.post("/auth/login", {
            email,
            password
        }).then(r => r).catch(er => {
            return Promise.reject(er);
        });
        console.log('вызван логин ')
        this.setToken(await res.data.accessToken);
        console.log('после логина получен токен', this.getToken());
        localStorage.setItem('refresh_token', await res.data.refreshToken)
        this.refreshToken = localStorage.getItem('refresh_token');
        return res.data
    }

    /**
     * Регистрация пользователя
     * Отправляет данные о пользователе из формы на сервер
     * Получает только статус операции
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    async register(data = {}) {
        return await this.client.post('/auth/register', data)
            .catch(e => console.log(e));
    }

    /*  еще не реализовал, осталось от клиента
        /!**
         * Восстановление пароля
         * Ввод email для отправки письма
         *
         * @param email
         * @returns {Promise<AxiosResponse<any>>}
         *!/
        async forgetEmail(email) {
            return await  this.client.post('/auth/forget/email',{email})
        }

        /!**
         * Восстановление пароля
         * Ввод code полученновго в email
         * @param code
         * @returns {Promise<AxiosResponse<any>>}
         *!/
        async forgetCode(code) {
            return await  this.client.post('/auth/forget/code',{code})
        }

        /!**
         * Восстановление пароля
         * Ввод пары даанных, "пароль" - "потдверждение пароля"
         * @param data
         * @returns {Promise<AxiosResponse<any>>}
         *!/
        async forgeRefreshPass(data) {
            return await  this.client.post('/auth/forget/refreshPass',data)
        }

        /!**
         * Автовход
         * После обновления страницы удаляется токен из приложения
         * Используя RefreshToken из localStorage восстанавливает утерянный токен
         * Получает новую пару токенов и пользователя
         * @returns {Promise<AxiosResponse<any>>}
         *!/
        async autoLog() {
            const refToken = localStorage.getItem('refresh_token');
            if (refToken) {
                return await this.client.post('/auth/refresh', {refreshToken: refToken}).then(ref=> {
                    this.setToken(ref.data.accessToken);
                    localStorage.setItem('refresh_token', ref.data.refreshToken);
                    return ref.data.user
                });
            }
        }
    */

    /**
     * Выход из приложения
     * Удаляются все токены и стирается currentUser из Redux
     */
    logout() {
        this.token = null;
        this.refreshToken = null;
        localStorage.removeItem('refresh_token')
    }

    /* главная страница */

    /**
     * Отметка\снятие отметки о присутствии клиента на занятии
     *
     * @param id
     * @param course
     */
    async checkClient(id, course) {
        return await this.client.patch(`/check_clients/${course}/${id}`)
    }

    async getProfile(id) {
        return await this.client.get(`/get_profile/${id}`).then(r => {
            let client;
            while (isEmpty(client)) {
                client = clients.find(e => e.id === Number(id));
            }
            return client;
        })
            .catch(e => {
                if (axios.isCancel(e)) {
                    return e.message
                } else {
                    console.log(e)
                }
            });

    }

    /**
     * Временный запрос на получение фиктивных клиентов
     * @returns {Promise<AxiosResponse<any>>}
     */
    async getClientsTimeTable(token) {
        return await this.client.get("/clients", { cancelToken: token })
    }

    /**
     * получение списка групп для селекта на главной странице
     *
     * @returns {Promise<[{name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}, {name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}, {name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}]|void>}
     */
    async getGroupList(token) {
        return await this.client.get("/group_list", { cancelToken: token })
    }

    /**
     * получение списка тренеров для селекта на главной странице
     *
     * @returns {Promise<[{name: string, id: number}, {name: string, id: number}, {name: string, id: number}, {name: string, id: number}]|void>}
     */
    async getCouchList(token) {
        return await this.client.get("/couch_list", { cancelToken: token })
    }

    /**
     * смена тренера у группы
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    async getChangeCouch(id, course) {
        return await this.client.put("/couch_change")
            .then((data) => data.success)
            .catch(e => {
                if (axios.isCancel(e)) {
                    return e.message
                } else {
                    console.log(e)
                }
            });
    }

    /* для страницы добавления взрослого клиента */

    /**
     * получение списка групп доступных для взрослого клиента
     *
     * @returns {Promise<[{name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}]>}
     */
    async getGroupForAdult() {
        return await this.client.get('/group_list_adult')
            .then(r => r.data.dataSelectAdultGroup)
            .catch(e => {
                if (axios.isCancel(e)) {
                    return e.message
                } else {
                    console.log(e)
                }
            });
    }

    /**
     * получение списка филиалов для клиента
     *
     * @returns {Promise<[{name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}]>}
     */
    async getFilialList(token) {
        return await this.client.get('/filial_list', { cancelToken: token })
    }

    /* для добавления ребенка */

    /**
     * получение списка групп доступных для ребенка
     *
     * @returns {Promise<[{name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}, {name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}]>}
     */
    async getGroupForChild() {
        return await this.client.get('/group_list_child')
            .then(r => r.data.dataSelectChildGroup)
            .catch(e => {
                if (axios.isCancel(e)) {
                    return e.message
                } else {
                    console.log(e)
                }
            });
    }

    /* для профиля */

    async getAbonimentList(token) {
        return await this.client.get('/get_abonement_list', { cancelToken: token })
    }

    /* для списка клиентов */
    async getAllClients(token) {
        return await this.client.get('/get_all_clients', { cancelToken: token })
    }

    async getTypeList(token) {
        return await this.client.get('/get_types_for_all', { cancelToken: token })
    }
    async getStatusListForClients(token) {
        return await this.client.get('/get_status_for_all', { cancelToken: token })
    }
    async getSortListForClients(token) {
        return await this.client.get('/get_sort_for_all', { cancelToken: token })
    }

    /* отмена операциии запроса, не тестил, может не работать */

    /**
     * Отмена операции запроса для axios
     * @returns {void}
     */
    //  abortAxiosCalling(){
    //      this.source.cancel('загрузка отменена');
    // }
    //
    isCancel(some) {
        this.client.isCancel(some)
    }

    /* для страницы профиля */

    async getStatusList(token) {
        return await this.client.get('/get_profile_list', { cancelToken: token })
    }


}

export default new Api();
