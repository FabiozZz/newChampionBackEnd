import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import NewCliet from "../assets/images/statusFilter/NewClient.svg";
import Ghost from "../assets/images/statusFilter/ghost.svg";
import BronzeClient from "../assets/images/statusFilter/BronzeClient.svg";
import GoldClient from "../assets/images/statusFilter/GoldClient.svg";
import RybyClient from "../assets/images/statusFilter/RybyClient.svg";
import SapfirClient from "../assets/images/statusFilter/SapfirClient.svg";
import BrilClient from "../assets/images/statusFilter/BrilClient.svg";
import sortAsc from "../assets/images/sortImage/asc.svg";
import sortDesc from "../assets/images/sortImage/desc.svg";

// const mock = new MockAdapter(axios, { delayResponse: 500 });

const clients = [
  {
    id: 1,
    first_name: "Константин",
    middle_name: "Константинович",
    last_name: "Константинопольский",
    status: 30,
    totalPay: 3200,
    is_Archive: true,
    abonement: { id: 1, name: "Стандарт", lessons: 12, week: 4 },
    is_Adult: false,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: [
      {
        serial: "",
        number: "",
      },
    ],
    statusName: { id: 5, name: "Сапфировый" },
    img: SapfirClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: true,
    toDay: false,
  },
  {
    id: 2,
    first_name: "Иван",
    middle_name: "Беляев",
    last_name: "Беляев",
    status: 0,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: false,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 2, name: "Бронзовый" },
    img: BronzeClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: true,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: false,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: true,
    toDay: false,
  },
  {
    id: 3,
    first_name: "Адам",
    middle_name: "Константинович",
    last_name: "Соловьев",
    status: 0,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 3, name: "NONSTOP", lessons: 999, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { name: null },
    cardFrom: null,
    cardTo: null,
    lessons: "",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "21.10.1989",
    call: false,
    burnAbonement: false,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: false,
    toDay: false,
  },
  {
    id: 4,
    first_name: "Ольга",
    middle_name: "",
    last_name: "Васильева",
    status: 13,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 4, name: "Рубиновый" },
    img: RybyClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: true,
    toDay: false,
  },
  {
    id: 5,
    first_name: "Ирина",
    middle_name: "Константинович",
    last_name: "Дмитриева",
    status: 30,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 5, name: "Сапфировый" },
    img: SapfirClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: true,
    date_of_birth: "06.10.1989",
    call: true,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: true,
    toDay: false,
  },
  {
    id: 6,
    first_name: "Александра",
    middle_name: "Константинович",
    last_name: "Семенова",
    status: 79,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 6, name: "Бриллиантовый" },
    img: BrilClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: false,
    toDay: false,
  },
  {
    id: 25,
    first_name: "Моника",
    middle_name: "Константинович",
    last_name: "Семенова",
    status: 79,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 2, name: "SMART", lessons: 12, week: 8 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 6, name: "Бриллиантовый" },
    img: BrilClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: false,
    toDay: false,
  },
  {
    id: 26,
    first_name: "Сальма",
    middle_name: "Константинович",
    last_name: "Семенова",
    status: 79,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 6, name: "Бриллиантовый" },
    img: BrilClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: false,
    toDay: false,
  },
  {
    id: 27,
    first_name: "Соня",
    middle_name: "Константинович",
    last_name: "Семенова",
    status: 79,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 6, name: "Бриллиантовый" },
    img: BrilClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: false,
    toDay: false,
  },
  {
    id: 28,
    first_name: "Фаина",
    middle_name: "Константинович",
    last_name: "Семенова",
    status: 79,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 6, name: "Бриллиантовый" },
    img: BrilClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: false,
    toDay: false,
  },
  {
    id: 29,
    first_name: "Фатима",
    middle_name: "Константинович",
    last_name: "Семенова",
    status: 79,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 6, name: "Бриллиантовый" },
    img: BrilClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: false,
    toDay: false,
  },
  {
    id: 30,
    first_name: "Лиза",
    middle_name: "Константинович",
    last_name: "Семенова",
    status: 79,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 6, name: "Бриллиантовый" },
    img: BrilClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: false,
    toDay: false,
  },
  {
    id: 31,
    first_name: "Тоня",
    middle_name: "Константинович",
    last_name: "Семенова",
    status: 79,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 6, name: "Бриллиантовый" },
    img: BrilClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: false,
    toDay: false,
  },
  {
    id: 32,
    first_name: "Милена",
    middle_name: "Константинович",
    last_name: "Семенова",
    status: 79,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 6, name: "Бриллиантовый" },
    img: BrilClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    freeze: false,
    toDay: false,
  },
  {
    id: 7,
    first_name: "Вера",
    middle_name: "Константинович",
    last_name: "Григорьева",
    status: 11,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: null,
      room: null,
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 3, name: "Золотой" },
    img: GoldClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: true,
    burnAbonement: false,
    course: "Маленькие Самураи",
    coach: "Кобялко Владимир Владимирович",
    freeze: true,
    toDay: false,
  },
  {
    id: 8,
    first_name: "Варвара",
    middle_name: "Константинович",
    last_name: "Климова",
    status: 0,
    totalPay: 3200,
    is_Archive: false,
    abonement: {},
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: {},
    img: null,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: false,
    course: "Маленькие Самураи",
    coach: "Кобялко Владимир Владимирович",
    freeze: false,
    toDay: false,
  },
  {
    id: 9,
    first_name: "Вера",
    middle_name: "Константинович",
    last_name: "Григорьева",
    status: 3,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: true,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 2, name: "Бронзовый" },
    img: BronzeClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: false,
    course: "Маленькие Самураи",
    coach: "Кобялко Владимир Владимирович",
    freeze: false,
    toDay: false,
  },
  {
    id: 10,
    first_name: "Виктория",
    middle_name: "Константинович",
    last_name: "Латвинова",
    status: 3,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 2, name: "Бронзовый" },
    img: BronzeClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: true,
    date_of_birth: "06.10.1989",
    call: true,
    burnAbonement: false,
    course: "Маленькие Самураи",
    coach: "Кобялко Владимир Владимирович",
    freeze: false,
    toDay: false,
  },
  {
    id: 11,
    first_name: "Алксандра",
    middle_name: "Константинович",
    last_name: "Кононова",
    status: 18,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 4, name: "Рубиновый" },
    img: RybyClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: true,
    burnAbonement: false,
    course: "Маленькие Самураи",
    coach: "Кобялко Владимир Владимирович",
    freeze: true,
    toDay: false,
  },
  {
    id: 12,
    first_name: "Филлип",
    middle_name: "Константинович",
    last_name: "Зотов",
    status: 0,
    totalPay: 3200,
    is_Archive: false,
    abonement: { name: {} },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { name: null },
    cardFrom: null,
    cardTo: null,
    lessons: "",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: false,
    course: "Маленькие Самураи",
    coach: "Кобялко Владимир Владимирович",
    freeze: false,
    toDay: false,
  },
  {
    id: 13,
    first_name: "Игорь",
    middle_name: "Константинович",
    last_name: "Дубровин",
    status: 15,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 4, name: "Рубиновый" },
    img: RybyClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: true,
    date_of_birth: "06.10.1993",
    call: true,
    burnAbonement: false,
    course: "Самбо/Дзюдо",
    coach: "Бураков Анатолий Петрович",
    freeze: false,
    toDay: false,
  },
  {
    id: 14,
    first_name: "Константин",
    middle_name: "Константинович",
    last_name: "Волков",
    status: 20,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 4, name: "Рубиновый" },
    img: RybyClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: true,
    healthExpire: "22.12.2021",
    birthday: true,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: false,
    course: "Самбо/Дзюдо",
    coach: "Бураков Анатолий Петрович",
    freeze: false,
    toDay: false,
  },
  {
    id: 15,
    first_name: "Владимир",
    middle_name: "Константинович",
    last_name: "Панкратов",
    status: 12,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 4, name: "Рубиновый" },
    img: RybyClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: true,
    date_of_birth: "06.10.1989",
    call: true,
    burnAbonement: true,
    course: "Самбо/Дзюдо",
    coach: "Бураков Анатолий Петрович",
    freeze: false,
    toDay: false,
  },
  {
    id: 16,
    first_name: "Ева",
    middle_name: "Константинович",
    last_name: "Щербакова",
    status: 2,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 1, name: "Новый" },
    img: NewCliet,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: true,
    burnAbonement: false,
    course: "Самбо/Дзюдо",
    coach: "Бураков Анатолий Петрович",
    freeze: false,
    toDay: false,
  },
  {
    id: 17,
    first_name: "Екатерина",
    middle_name: "Константинович",
    last_name: "Фадеева",
    status: 10,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 3, name: "Золотой" },
    img: GoldClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: false,
    course: "Самбо/Дзюдо",
    coach: "Бураков Анатолий Петрович",
    freeze: false,
    toDay: false,
  },
  {
    id: 18,
    first_name: "Таисия",
    middle_name: "Константинович",
    last_name: "Александрова",
    status: 14,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: true,
    phone_number: "+7 (997) 567-12-67",
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 4, name: "Рубиновый" },
    img: RybyClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: true,
    burnAbonement: false,
    course: "Самбо/Дзюдо",
    coach: "Бураков Анатолий Петрович",
    freeze: true,
    toDay: false,
  },
  {
    id: 19,
    first_name: "Арсений",
    middle_name: "Константинович",
    last_name: "Горшков",
    status: 0,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 3, name: "NONSTOP", lessons: 999, week: 4 },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { name: null },
    cardFrom: null,
    cardTo: null,
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: false,
    course: "Маленькие воины",
    coach: "Корицкая Диана Александровна",
    freeze: false,
    toDay: false,
  },
  {
    id: 20,
    first_name: "Вера",
    middle_name: "Константинович",
    last_name: "Самсонова",
    status: 1,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 1, name: "Новый" },
    img: NewCliet,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Маленькие воины",
    coach: "Корицкая Диана Александровна",
    freeze: false,
    toDay: false,
  },
  {
    id: 21,
    first_name: "Марк",
    middle_name: "Константинович",
    last_name: "Новиков",
    status: 7,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 3, name: "Золотой" },
    img: GoldClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: false,
    course: "Маленькие воины",
    coach: "Корицкая Диана Александровна",
    freeze: true,
    toDay: false,
  },
  {
    id: 22,
    first_name: "Богдан",
    middle_name: "Константинович",
    last_name: "Федоров",
    status: 0,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 3, name: "NONSTOP", lessons: 999, week: 4 },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { name: null },
    cardFrom: null,
    cardTo: null,
    lessons: "",
    health: false,
    healthExpire: "22.12.2021",
    birthday: false,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: false,
    course: "Маленькие воины",
    coach: "Корицкая Диана Александровна",
    freeze: false,
    toDay: false,
  },
  {
    id: 23,
    first_name: "Владимир",
    middle_name: "Константинович",
    last_name: "Андреев",
    status: 8,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 3, name: "Золотой" },
    img: GoldClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: true,
    date_of_birth: "06.10.1989",
    call: true,
    burnAbonement: false,
    course: "Маленькие воины",
    coach: "Корицкая Диана Александровна",
    freeze: false,
    toDay: false,
  },
  {
    id: 24,
    first_name: "Владлен",
    middle_name: "Константинович",
    last_name: "Шаткий",
    status: 9,
    totalPay: 3200,
    is_Archive: false,
    abonement: { id: 4, name: "MINI", lessons: 8, week: 4 },
    is_Adult: false,
    filial: {
      id: 1,
      name: "Московская 130",
    },
    is_whatsApp: false,
    parents: [
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
      {
        last_name: "Константинопольский",
        first_name: "Константин",
        middle_name: "Константинович",
        hoIs: "Отец",
        phone_number: "+7 (123) 456-78-90",
      },
    ],
    address: {
      street: "Красная",
      house: "155",
      corpus: "2",
      room: "802",
    },
    whereIs: "Яндекс Карты",
    privateData: {},
    statusName: { id: 3, name: "Золотой" },
    img: GoldClient,
    cardFrom: "22.11.2021",
    cardTo: "22.12.21",
    health: false,
    healthExpire: "22.12.2021",
    birthday: true,
    date_of_birth: "06.10.1989",
    call: false,
    burnAbonement: true,
    course: "Маленькие воины",
    coach: "Корицкая Диана Александровна",
    freeze: false,
    toDay: false,
  },
];

const data = [
  {
    //Константин Константинович Константинопольский
    id: 1,
    totalClients: 14,
    toDay: 0,
    name: "Бразильское Джиу-Джитсу",
    coach: "Плиев Станислав Робертович",
    timeTraining: "12.04.2021",
    clients: [
      {
        id: 1,
        first_name: "Константин",
        middle_name: "Константинович",
        last_name: "Константинопольский",
        status: 30,
        totalPay: 3200,
        is_Archive: true,
        abonement: { id: 1, name: "Стандарт", lessons: 12, week: 4 },
        is_Adult: false,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: [
          {
            serial: "",
            number: "",
          },
        ],
        statusName: "Сапфировый",
        img: SapfirClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: true,
        toDay: false,
      },
      {
        id: 2,
        first_name: "Иван",
        middle_name: "Беляев",
        last_name: "Беляев",
        status: 0,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: false,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Бронзовый",
        img: BronzeClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: true,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: false,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: true,
        toDay: false,
      },
      {
        id: 3,
        first_name: "Адам",
        middle_name: "Константинович",
        last_name: "Соловьев",
        status: 0,
        totalPay: 3200,
        is_Archive: false,
        abonement: "",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: null,
        cardFrom: null,
        cardTo: null,
        lessons: "",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "21.10.1989",
        call: false,
        burnAbonement: false,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: false,
        toDay: false,
      },
      {
        id: 4,
        first_name: "Ольга",
        middle_name: "",
        last_name: "Васильева",
        status: 13,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Рубиновый",
        img: RybyClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: true,
        toDay: false,
      },
      {
        id: 5,
        first_name: "Ирина",
        middle_name: "Константинович",
        last_name: "Дмитриева",
        status: 30,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Сапфировый",
        img: SapfirClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: true,
        date_of_birth: "06.10.1989",
        call: true,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: true,
        toDay: false,
      },
      {
        id: 6,
        first_name: "Александра",
        middle_name: "Константинович",
        last_name: "Семенова",
        status: 79,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Брилиантовый",
        img: BrilClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: false,
        toDay: false,
      },
      {
        id: 25,
        first_name: "Моника",
        middle_name: "Константинович",
        last_name: "Семенова",
        status: 79,
        totalPay: 3200,
        is_Archive: false,
        abonement: "SMART",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Брилиантовый",
        img: BrilClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: false,
        toDay: false,
      },
      {
        id: 26,
        first_name: "Сальма",
        middle_name: "Константинович",
        last_name: "Семенова",
        status: 79,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Брилиантовый",
        img: BrilClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: false,
        toDay: false,
      },
      {
        id: 27,
        first_name: "Соня",
        middle_name: "Константинович",
        last_name: "Семенова",
        status: 79,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Брилиантовый",
        img: BrilClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: false,
        toDay: false,
      },
      {
        id: 28,
        first_name: "Фаина",
        middle_name: "Константинович",
        last_name: "Семенова",
        status: 79,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Брилиантовый",
        img: BrilClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: false,
        toDay: false,
      },
      {
        id: 29,
        first_name: "Фатима",
        middle_name: "Константинович",
        last_name: "Семенова",
        status: 79,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Брилиантовый",
        img: BrilClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: false,
        toDay: false,
      },
      {
        id: 30,
        first_name: "Лиза",
        middle_name: "Константинович",
        last_name: "Семенова",
        status: 79,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Брилиантовый",
        img: BrilClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: false,
        toDay: false,
      },
      {
        id: 31,
        first_name: "Тоня",
        middle_name: "Константинович",
        last_name: "Семенова",
        status: 79,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Брилиантовый",
        img: BrilClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: false,
        toDay: false,
      },
      {
        id: 32,
        first_name: "Милена",
        middle_name: "Константинович",
        last_name: "Семенова",
        status: 79,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Брилиантовый",
        img: BrilClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Бразильское Джиу-Джитсу",
        coach: "Плиев Станислав Робертович",
        freeze: false,
        toDay: false,
      },
    ],
  },
  {
    id: 2,
    totalClients: 6,
    toDay: 0,
    name: "Маленькие Самураи",
    coach: "Кобялко Владимир Владимирович",
    timeTraining: "12.04.2021",
    clients: [
      {
        id: 7,
        first_name: "Вера",
        middle_name: "Константинович",
        last_name: "Григорьева",
        status: 11,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: null,
          room: null,
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Золотой",
        img: GoldClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: true,
        burnAbonement: false,
        course: "Маленькие Самураи",
        coach: "Кобялко Владимир Владимирович",
        freeze: true,
        toDay: false,
      },
      {
        id: 8,
        first_name: "Варвара",
        middle_name: "Константинович",
        last_name: "Климова",
        status: 0,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Бронзовый",
        img: null,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: false,
        course: "Маленькие Самураи",
        coach: "Кобялко Владимир Владимирович",
        freeze: false,
        toDay: false,
      },
      {
        id: 9,
        first_name: "Вера",
        middle_name: "Константинович",
        last_name: "Григорьева",
        status: 3,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: true,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Бронзовый",
        img: BronzeClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: false,
        course: "Маленькие Самураи",
        coach: "Кобялко Владимир Владимирович",
        freeze: false,
        toDay: false,
      },
      {
        id: 10,
        first_name: "Виктория",
        middle_name: "Константинович",
        last_name: "Латвинова",
        status: 3,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Бронзовый",
        img: BronzeClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: true,
        date_of_birth: "06.10.1989",
        call: true,
        burnAbonement: false,
        course: "Маленькие Самураи",
        coach: "Кобялко Владимир Владимирович",
        freeze: false,
        toDay: false,
      },
      {
        id: 11,
        first_name: "Алксандра",
        middle_name: "Константинович",
        last_name: "Кононова",
        status: 18,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Рубиновый",
        img: RybyClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: true,
        burnAbonement: false,
        course: "Маленькие Самураи",
        coach: "Кобялко Владимир Владимирович",
        freeze: true,
        toDay: false,
      },
      {
        id: 12,
        first_name: "Филлип",
        middle_name: "Константинович",
        last_name: "Зотов",
        status: 0,
        totalPay: 3200,
        is_Archive: false,
        abonement: "",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: null,
        cardFrom: null,
        cardTo: null,
        lessons: "",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: false,
        course: "Маленькие Самураи",
        coach: "Кобялко Владимир Владимирович",
        freeze: false,
        toDay: false,
      },
    ],
  },
  {
    id: 3,
    totalClients: 6,
    toDay: 0,
    name: "Самбо/Дзюдо",
    coach: "Бураков Анатолий Петрович",
    timeTraining: "12.04.2021",
    clients: [
      {
        id: 13,
        first_name: "Игорь",
        middle_name: "Константинович",
        last_name: "Дубровин",
        status: 15,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Рубиновый",
        img: RybyClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: true,
        date_of_birth: "06.10.1993",
        call: true,
        burnAbonement: false,
        course: "Самбо/Дзюдо",
        coach: "Бураков Анатолий Петрович",
        freeze: false,
        toDay: false,
      },
      {
        id: 14,
        first_name: "Константин",
        middle_name: "Константинович",
        last_name: "Волков",
        status: 20,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Рубиновый",
        img: RybyClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: true,
        healthExpire: "22.12.2021",
        birthday: true,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: false,
        course: "Самбо/Дзюдо",
        coach: "Бураков Анатолий Петрович",
        freeze: false,
        toDay: false,
      },
      {
        id: 15,
        first_name: "Владимир",
        middle_name: "Константинович",
        last_name: "Панкратов",
        status: 12,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Рубиновый",
        img: RybyClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: true,
        date_of_birth: "06.10.1989",
        call: true,
        burnAbonement: true,
        course: "Самбо/Дзюдо",
        coach: "Бураков Анатолий Петрович",
        freeze: false,
        toDay: false,
      },
      {
        id: 16,
        first_name: "Ева",
        middle_name: "Константинович",
        last_name: "Щербакова",
        status: 2,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Новый",
        img: NewCliet,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: true,
        burnAbonement: false,
        course: "Самбо/Дзюдо",
        coach: "Бураков Анатолий Петрович",
        freeze: false,
        toDay: false,
      },
      {
        id: 17,
        first_name: "Екатерина",
        middle_name: "Константинович",
        last_name: "Фадеева",
        status: 10,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Золотой",
        img: GoldClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: false,
        course: "Самбо/Дзюдо",
        coach: "Бураков Анатолий Петрович",
        freeze: false,
        toDay: false,
      },
      {
        id: 18,
        first_name: "Таисия",
        middle_name: "Константинович",
        last_name: "Александрова",
        status: 14,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: true,
        phone_number: "+7 (997) 567-12-67",
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Рубиновый",
        img: RybyClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: true,
        burnAbonement: false,
        course: "Самбо/Дзюдо",
        coach: "Бураков Анатолий Петрович",
        freeze: true,
        toDay: false,
      },
    ],
  },
  {
    id: 4,
    totalClients: 6,
    toDay: 0,
    name: "Маленькие воины",
    coach: "Корицкая Диана Александровна",
    timeTraining: "12.04.2021",
    clients: [
      {
        id: 19,
        first_name: "Арсений",
        middle_name: "Константинович",
        last_name: "Горшков",
        status: 0,
        totalPay: 3200,
        is_Archive: false,
        abonement: "",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: null,
        cardFrom: null,
        cardTo: null,
        lessons: "",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: false,
        course: "Маленькие воины",
        coach: "Корицкая Диана Александровна",
        freeze: false,
        toDay: false,
      },
      {
        id: 20,
        first_name: "Вера",
        middle_name: "Константинович",
        last_name: "Самсонова",
        status: 1,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Новый",
        img: NewCliet,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Маленькие воины",
        coach: "Корицкая Диана Александровна",
        freeze: false,
        toDay: false,
      },
      {
        id: 21,
        first_name: "Марк",
        middle_name: "Константинович",
        last_name: "Новиков",
        status: 7,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Золотой",
        img: GoldClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: false,
        course: "Маленькие воины",
        coach: "Корицкая Диана Александровна",
        freeze: true,
        toDay: false,
      },
      {
        id: 22,
        first_name: "Богдан",
        middle_name: "Константинович",
        last_name: "Федоров",
        status: 0,
        totalPay: 3200,
        is_Archive: false,
        abonement: "",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: null,
        cardFrom: null,
        cardTo: null,
        lessons: "",
        health: false,
        healthExpire: "22.12.2021",
        birthday: false,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: false,
        course: "Маленькие воины",
        coach: "Корицкая Диана Александровна",
        freeze: false,
        toDay: false,
      },
      {
        id: 23,
        first_name: "Владимир",
        middle_name: "Константинович",
        last_name: "Андреев",
        status: 8,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Золотой",
        img: GoldClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: true,
        date_of_birth: "06.10.1989",
        call: true,
        burnAbonement: false,
        course: "Маленькие воины",
        coach: "Корицкая Диана Александровна",
        freeze: false,
        toDay: false,
      },
      {
        id: 24,
        first_name: "Владлен",
        middle_name: "Константинович",
        last_name: "Шаткий",
        status: 9,
        totalPay: 3200,
        is_Archive: false,
        abonement: "MINI",
        is_Adult: false,
        filial: "Московская 130",
        is_whatsApp: false,
        parents: [
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
          {
            last_name: "Константинопольский",
            first_name: "Константин",
            middle_name: "Константинович",
            hoIs: "Отец",
            phone_number: "+7 (123) 456-78-90",
          },
        ],
        address: {
          street: "Красная",
          house: "155",
          corpus: "2",
          room: "802",
        },
        whereIs: "Яндекс Карты",
        privateData: {},
        statusName: "Золотой",
        img: GoldClient,
        cardFrom: "22.11.2021",
        cardTo: "22.12.21",
        lessons: "8",
        health: false,
        healthExpire: "22.12.2021",
        birthday: true,
        date_of_birth: "06.10.1989",
        call: false,
        burnAbonement: true,
        course: "Маленькие воины",
        coach: "Корицкая Диана Александровна",
        freeze: false,
        toDay: false,
      },
    ],
  },
];

const user = {
  id: 3,
  name: "FabiozZz",
  email: "fabiozzz.dev@gmail.com",
};

const dataSelectAllGroup = [
  {
    id: 1,
    name: "дети 3-7 лет",
    course: [
      { id: 1, name: "Маленькие Самураи" },
      { id: 2, name: "Маленький Чемпион" },
      { id: 3, name: "Маленькие воины" },
    ],
  },
  {
    id: 2,
    name: "подростки 8-15 лет",
    course: [
      { id: 4, name: "Тхэквондо" },
      { id: 5, name: "Бразильское Джиу-Джитсу" },
      { id: 6, name: "Самбо/Дзюдо" },
      { id: 7, name: "Бокс" },
      { id: 8, name: "Тайский бокс" },
    ],
  },
  {
    id: 3,
    name: "Взрослые 16+ лет",
    course: [
      { id: 9, name: "Бокс" },
      { id: 10, name: "Тайский бокс" },
      { id: 11, name: "Грэпплинг" },
    ],
  },
];
const dataSelectChildGroup = [
  {
    id: 1,
    name: "дети 3-7 лет",
    course: [
      { id: 1, name: "Маленькие Самураи" },
      { id: 2, name: "Маленький Чемпион" },
      { id: 3, name: "Маленькие воины" },
    ],
  },
  {
    id: 2,
    name: "подростки 8-15 лет",
    course: [
      { id: 4, name: "Тхэквондо" },
      { id: 5, name: "Бразильское Джиу-Джитсу" },
      { id: 6, name: "Самбо/Дзюдо" },
      { id: 7, name: "Бокс" },
      { id: 8, name: "Тайский бокс" },
    ],
  },
];
const dataSelectAdultGroup = [
  {
    id: 3,
    name: "Взрослые 16+ лет",
    course: [
      { id: 9, name: "Бокс" },
      { id: 10, name: "Тайский бокс" },
      { id: 11, name: "Грэпплинг" },
    ],
  },
];
const dataSelectCouch = [
  { id: 1, name: "Плиев Станислав Робертович" },
  { id: 2, name: "Кобялко Владимир Владимирович" },
  { id: 3, name: "Бураков Анатолий Петрович" },
  { id: 4, name: "Корицкая Диана Александровна" },
];
const filialList = [
  {
    id: 1,
    name: "Московская 130",
  },
  {
    id: 2,
    name: "Дальняя 99",
  },
];
const price = [
  {
    abonement: 1,
    priceList: [
      { id: 1, price: 3900 },
      { id: 2, price: 3500 },
      { id: 3, price: 3300 },
      { id: 4, price: 3200 },
      { id: 5, price: 3100 },
      { id: 6, price: 3000 },
    ],
  },
  {
    abonement: 2,
    priceList: [
      { id: 1, price: 4700 },
      { id: 2, price: 4300 },
      { id: 3, price: 4000 },
      { id: 4, price: 3900 },
      { id: 5, price: 3800 },
      { id: 6, price: 3700 },
    ],
  },
  {
    abonement: 3,
    priceList: [
      { id: 1, price: 5500 },
      { id: 2, price: 5000 },
      { id: 3, price: 4800 },
      { id: 4, price: 4700 },
      { id: 5, price: 4600 },
      { id: 6, price: 4500 },
    ],
  },
  {
    abonement: 4,
    priceList: [
      { id: 1, price: 3200 },
      { id: 2, price: 3000 },
      { id: 3, price: 2800 },
      { id: 4, price: 2700 },
      { id: 5, price: 2600 },
      { id: 6, price: 2500 },
    ],
  },
  {
    aboniment: 5,
    price: 5800
  },
  {
    aboniment: 6,
    price: 12000
  },
  {
    aboniment: 7,
    price: 21000
  },
  {
    aboniment: 8,
    price: 2200
  }
];
const typeAboniment = [
  { id: 1, name: "Стандарт", lessons: 12, week: 4 },
  { id: 2, name: "SMART", lessons: 12, week: 8 },
  { id: 3, name: "NONSTOP", lessons: 999, week: 4 },
  { id: 4, name: "MINI", lessons: 8, week: 4 },
  { id: 5, name: "GOLD", lessons: 5, week: 999 },
  { id: 6, name: "PLATINUM", lessons: 11, week: 999 },
  { id: 7, name: "SUPER PLATINUM", lessons: 20, week: 999 },
  { id: 8, name: "PROFI", lessons: 999, week: 4 },
];
const typesLists = [
  { id: 1, name: "На обзвон" },
  { id: 2, name: "Истекающие абонименты" },
  { id: 3, name: "Истёкшие абонименты" },
  { id: 4, name: "Замороженные" },
  { id: 5, name: "Архивные" },
  { id: 6, name: "Не добавленные в WhatsApp" },
];
const statusList = [
  { id: 1, name: "Новый" },
  { id: 2, name: "Бронзовый" },
  { id: 3, name: "Золотой" },
  { id: 4, name: "Рубиновый" },
  { id: 5, name: "Сапфировый" },
  { id: 6, name: "Бриллиантовый" },
];
const statusListFilter = [
  { id: 1, name: "Потенциальные", img: Ghost },
  { id: 2, name: "Новые", img: NewCliet },
  { id: 3, name: "Бронзовые", img: BronzeClient },
  { id: 4, name: "Золотые", img: GoldClient },
  { id: 5, name: "Рубиновые", img: RybyClient },
  { id: 6, name: "Сапфировые", img: SapfirClient },
  { id: 7, name: "Бриллиантовые", img: BrilClient },
];
const sortList = [
  { id: 1, name: "Дате добавления", img: sortAsc, type: "asc" },
  { id: 2, name: "Дате добавления", img: sortDesc, type: "desc" },
  { id: 3, name: "Дням рождения", type: "asc", field: "birthdayDate" },
  { id: 4, name: "Имени", img: sortAsc, type: "asc", field: "lastName" },
  { id: 5, name: "Имени", img: sortDesc, type: "desc", field: "lastName" },
  { id: 6, name: "Тренеру", img: sortAsc, type: "asc", field: "coach" },
  { id: 7, name: "Тренеру", img: sortDesc, type: "desc", field: "coach" },
  {
    id: 8,
    name: "Типу абонимента",
    img: sortAsc,
    type: "asc",
    field: "status",
  },
  {
    id: 9,
    name: "Типу абонимента",
    img: sortDesc,
    type: "desc",
    field: "status",
  },
];
let conAx = {
  baseURL: "http://127.0.0.1:8000/api/v1",
};

/* основные */
// mock
//   .onPost(conAx.baseURL + "/login/")
// mock.onPost(conAx.baseURL + "/auth/register").reply(200, { success: "Ok" });

// mock
//   .onPost(conAx.baseURL + "/refresh-token/")
//   .reply(200, { user, accessToken: "TOKEN_ACC2", refreshToken: "TOKEN_REs2" });

// /* для главной */

// mock.onGet(conAx.baseURL + "/clients/").reply(200, [...data]);
// mock.onGet(conAx.baseURL + "/group_list").reply(200, [...dataSelectAllGroup]);
// mock.onGet(conAx.baseURL + "/couch_list").reply(200, [...dataSelectCouch]);
// mock.onPut(conAx.baseURL + "/couch_change").reply(200, { success: "ok" });
// mock.onPatch(/http:\/\/127\.0\.0\.1:8000\/api\/v1\/check_clients\/\d+\/\d+/).reply(200);
// mock.onGet(/http:\/\/127\.0\.0\.1:8000\/api\/v1\/client\/\d+/).reply(200);

// mock.onGet(conAx.baseURL + "/filial_list").reply(200, [...filialList]);

// /* для добавления взрослого клиента */
// mock
//   .onGet(conAx.baseURL + "/group_list_adult")
//   .reply(200, { dataSelectAdultGroup });

// /* для добавления ребенка */

// mock
//   .onGet(conAx.baseURL + "/group_list_child")
//   .reply(200, { dataSelectChildGroup });

// /* для профиля */

// mock
//   .onGet(conAx.baseURL + "/get_abonement_list")
//   .reply(200, [...typeAboniment]);
//   mock.onGet(conAx.baseURL + "/get_profile_list").reply(200, [...statusList]);
//   mock.onGet(conAx.baseURL + "/get_price").reply(200, [...price]);

// /* для списка клиентов */

// mock.onGet(conAx.baseURL + "/client").reply(200, [...clients]);
// mock.onGet(conAx.baseURL + "/get_types_for_all").reply(200, [...typesLists]);
// mock
//   .onGet(conAx.baseURL + "/get_status_for_all")
//   .reply(200, [...statusListFilter]);
// mock.onGet(conAx.baseURL + "/get_sort_for_all").reply(200, [...sortList]);

// mock.resetHistory();

/**
 * response на логин token & refreshToken
 */

class Api {
  constructor(options = {}) {
    this.client = axios.create();
    this.token = null;
    this.refreshToken = null;

    this.refreshRequest = null;

    this.client.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
    console.log(this.token)
    this.client.interceptors.request.use(
      (config) => {
        if (this.token === null) {
          return { ...config };
        }
        const newConfig = {
          ...config,
        };
        newConfig.headers.Authorization = `Bearer ${this.token}`;
        return newConfig;
      },
      (e) => {
        return Promise.reject(e);
      }
    );

    this.client.interceptors.response.use(
      (r) => r,
      async (error) => {
        this.refreshToken = localStorage.getItem("refresh_token");
        if (
          !this.token ||
          error.message ||
          error.response.status !== 401 ||
          error.config.retry
        ) {
          await Promise.reject(error);
        }

        if (!this.refreshRequest) {
          this.refreshRequest = this.client.post("/refresh-token/", {
            refresh: this.refreshToken,
          });
          console.log(this.refreshRequest);
        }
        const { data } = await this.refreshRequest;
        this.token = data.access;
        localStorage.setItem("refresh_token", data.refreshToken);
        this.refreshToken = data.refreshToken;
        const newRequest = {
          ...error.config,
          retry: true,
        };

        return this.client(newRequest);
      }
    );
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
  async login({ username, password }) {
    const res = await this.client
      .post("/login/", {
        username: username,
        password: password,
      });
    console.log('вызван логин')
    this.setToken(await res.data.access);
    console.log('после логина получен токен', this.getToken());
    localStorage.setItem('refresh_token', await res.data.refresh)
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
    return await this.client
      .post("/auth/register", data)
      .catch((e) => console.log(e));
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
    localStorage.removeItem("refresh_token");
  }

  /* главная страница */

  /**
   * Отметка\снятие отметки о присутствии клиента на занятии
   *
   * @param id
   * @param course
   */
  async checkClient(id,set) {
    return await this.client.put(`/schedule/train/${id}/`,{is_visited:set});
  }

  async getProfile(id) {
    return await this.client.get(`/client/${id}/`);
  }
  async editProfile(id,data){
    return await this.client.put(`/client/${id}/`,{...data});
  }

  /**
   * Временный запрос на получение фиктивных клиентов
   * @returns {Promise<AxiosResponse<any>>}
   */
  async getClientsTimeTable(token) {
    return await this.client.get("/schedule/lesson/", { cancelToken: token });
  }

  /**
   * получение списка групп для селекта на главной странице
   *
   * @returns {Promise<[{name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}, {name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}, {name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}]|void>}
   */
  async getGroupList(token) {
    return await this.client.get("/core/group/", { cancelToken: token });
  }

  /**
   * получение списка тренеров для селекта на главной странице
   *
   * @returns {Promise<[{name: string, id: number}, {name: string, id: number}, {name: string, id: number}, {name: string, id: number}]|void>}
   */
  async getCouchList(token) {
    return await this.client.get("/core/trainer/", { cancelToken: token });
  }

  /**
   * смена тренера у группы
   *
   * @returns {Promise<AxiosResponse<any>>}
   */
  async changeCouch(id, couch) {
    return await this.client.put(`/schedule/lesson/${id}/`,{trainer:{id:couch}})
  }

  /* для страницы добавления взрослого клиента */

  /**
   * получение списка групп доступных для взрослого клиента
   *
   * @returns {Promise<[{name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}]>}
   */
  async getGroupForAdult() {
    return await this.client
      .get("/group_list_adult")
      .then((r) => r.data.dataSelectAdultGroup)
      .catch((e) => {
        if (axios.isCancel(e)) {
          return e.message;
        } else {
          console.log(e);
        }
      });
  }

  /**
   * получение списка филиалов для клиента
   *
   * @returns {Promise<[{name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}]>}
   */
  async getFilialList(token) {
    return await this.client.get("/filial_list", { cancelToken: token });
  }

  /* для добавления ребенка */
  async postAddChild(child) {
    return await this.client.post('/client/createChild/', { ...child })
  }
  async postAddAdult(adult) {
    return await this.client.post('/client/createAdult/', { ...adult })
  }
  /**
   * получение списка групп доступных для ребенка
   *
   * @returns {Promise<[{name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}, {name: string, course: [{name: string, id: number}, {name: string, id: number}, {name: string, id: number}, {name: string, id: number}, {name: string, id: number}], id: number}]>}
   */
  async getGroupForChild() {
    return await this.client
      .get("/group_list_child")
      .then((r) => r.data.dataSelectChildGroup)
      .catch((e) => {
        if (axios.isCancel(e)) {
          return e.message;
        } else {
          console.log(e);
        }
      });
  }

  /* для профиля */

  async getAbonimentList(token) {
    return await this.client.get("/get_abonement_list", { cancelToken: token });
  }

  async getPriceList(token, abonement, status) {
    return await this.client.get("/get_price", { cancelToken: token }).then(r => {
      let priceList, result;
      if (abonement <= 4) {
        priceList = r.data.find(item => item.abonement === abonement);
        result = priceList.priceList.find(item => item.id === status);
      } else {
        result = r.data.find(item => item.aboniment === abonement);
      }
      return result.price;

    });
  }

  /* для списка клиентов */
  async getAllClients() {
    return await this.client.get("/client/");
  }

  async getTypeList(token) {
    return await this.client.get("/get_types_for_all", { cancelToken: token });
  }
  async getStatusListForClients(token) {
    return await this.client.get("/get_status_for_all", { cancelToken: token });
  }
  async getSortListForClients(token) {
    return await this.client.get("/get_sort_for_all", { cancelToken: token });
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
    this.client.isCancel(some);
  }

  /* для страницы профиля */

  async getStatusList(token) {
    return await this.client.get("/get_profile_list", { cancelToken: token });
  }
}

export default new Api();
