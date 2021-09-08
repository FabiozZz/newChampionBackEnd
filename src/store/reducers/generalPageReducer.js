import {
    LOAD_GENERAL_PAGE_DATA,
    LOAD_GENERAL_PAGE_DATA_FAILURE,
    LOAD_GENERAL_PAGE_DATA_SUCCESS, SEARCH_CLIENTS
} from "../../constants/generalPageConstants";

const initialState = {
    groups: [],
    loading: false,
    error: [],
    client: [],
    filter_clients:[],
    clients:[
        // {
        //     id: 17,
        //     parents: [],
        //     club_card: {
        //         id: 14,
        //         rate: {
        //             id: 2,
        //             name: "SMART",
        //             train_quantity: 12,
        //             days_duration: 56,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 2,
        //             name: "Новый"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 10,
        //         valid_from: "2021-09-03",
        //         valid_until: "2021-10-27"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Даниил",
        //     middle_name: "Витальевич",
        //     last_name: "Цехомский ",
        //     date_of_birth: "2016-07-19",
        //     street: "Казбекская",
        //     house: "17",
        //     building: null,
        //     apartments: "117",
        //     in_archive: false,
        //     phone_number: "89184328621",
        //     email: "",
        //     personal_discount: 0
        // },
        // {
        //     id: 18,
        //     parents: [],
        //     club_card: {
        //         id: 15,
        //         rate: {
        //             id: 2,
        //             name: "SMART",
        //             train_quantity: 12,
        //             days_duration: 56,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 6,
        //             name: "Рубиновый"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 9,
        //         valid_from: "2021-08-27",
        //         valid_until: "2021-10-20"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Михаил ",
        //     middle_name: "Сергеевич",
        //     last_name: "Доненко ",
        //     date_of_birth: "2014-04-12",
        //     street: null,
        //     house: null,
        //     building: null,
        //     apartments: null,
        //     in_archive: false,
        //     phone_number: "89882403760",
        //     email: "",
        //     personal_discount: 0
        // },
        // {
        //     id: 19,
        //     parents: [],
        //     club_card: {
        //         id: 16,
        //         rate: {
        //             id: 2,
        //             name: "SMART",
        //             train_quantity: 12,
        //             days_duration: 56,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 4,
        //             name: "Золотой"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 10,
        //         valid_from: "2021-08-25",
        //         valid_until: "2021-10-18"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Нарт ",
        //     middle_name: "Муратович",
        //     last_name: "Четав ",
        //     date_of_birth: "2013-03-06",
        //     street: "Дзержинского",
        //     house: "54",
        //     building: "11",
        //     apartments: null,
        //     in_archive: false,
        //     phone_number: "89182267175",
        //     email: "",
        //     personal_discount: 0
        // },
        // {
        //     id: 20,
        //     parents: [],
        //     club_card: {
        //         id: 17,
        //         rate: {
        //             id: 2,
        //             name: "SMART",
        //             train_quantity: 12,
        //             days_duration: 56,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 4,
        //             name: "Золотой"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 7,
        //         valid_from: "2021-08-25",
        //         valid_until: "2021-10-18"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Анатолий",
        //     middle_name: null,
        //     last_name: "Швайбович ",
        //     date_of_birth: "2013-03-06",
        //     street: "Лукьяненко ",
        //     house: "26",
        //     building: null,
        //     apartments: "25",
        //     in_archive: false,
        //     phone_number: "89182267175",
        //     email: "",
        //     personal_discount: 0
        // },
        // {
        //     id: 21,
        //     parents: [],
        //     club_card: {
        //         id: 18,
        //         rate: {
        //             id: 1,
        //             name: "Стандарт",
        //             train_quantity: 12,
        //             days_duration: 28,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 4,
        //             name: "Золотой"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 9999,
        //         valid_from: "2021-09-08",
        //         valid_until: "2021-10-04"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Богдан",
        //     middle_name: "Витальевич",
        //     last_name: "Мезенцев ",
        //     date_of_birth: "2015-10-23",
        //     street: "Рашпилевская ",
        //     house: "325",
        //     building: null,
        //     apartments: null,
        //     in_archive: false,
        //     phone_number: "89180146471",
        //     email: "",
        //     personal_discount: 0
        // },
        // {
        //     id: 22,
        //     parents: [],
        //     club_card: {
        //         id: 19,
        //         rate: {
        //             id: 4,
        //             name: "MINI",
        //             train_quantity: 8,
        //             days_duration: 28,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 4,
        //             name: "Золотой"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 8,
        //         valid_from: "2021-09-08",
        //         valid_until: "2021-10-04"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Ярослав",
        //     middle_name: "Дмитриевич",
        //     last_name: "Гура ",
        //     date_of_birth: "2015-10-23",
        //     street: "пр. им. Репина ",
        //     house: "1",
        //     building: null,
        //     apartments: "210",
        //     in_archive: false,
        //     phone_number: "89628808907",
        //     email: "",
        //     personal_discount: 0
        // },
        // {
        //     id: 23,
        //     parents: [],
        //     club_card: {
        //         id: 20,
        //         rate: {
        //             id: 4,
        //             name: "MINI",
        //             train_quantity: 8,
        //             days_duration: 28,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 4,
        //             name: "Золотой"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 8,
        //         valid_from: "2021-09-08",
        //         valid_until: "2021-10-04"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Максим",
        //     middle_name: "Георгиевич",
        //     last_name: "Чирва",
        //     date_of_birth: "2014-03-01",
        //     street: "Яна Полуяна ",
        //     house: "56",
        //     building: null,
        //     apartments: null,
        //     in_archive: false,
        //     phone_number: "89183462968",
        //     email: "",
        //     personal_discount: 0
        // },
        // {
        //     id: 24,
        //     parents: [],
        //     club_card: {
        //         id: 21,
        //         rate: {
        //             id: 1,
        //             name: "Стандарт",
        //             train_quantity: 12,
        //             days_duration: 28,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 4,
        //             name: "Золотой"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 9999,
        //         valid_from: "2021-08-30",
        //         valid_until: "2021-09-24"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Мирон",
        //     middle_name: "Иванович",
        //     last_name: "Абраменко",
        //     date_of_birth: "2016-01-21",
        //     street: " Пр. Дальний ",
        //     house: "9",
        //     building: "2",
        //     apartments: null,
        //     in_archive: false,
        //     phone_number: "89181961691",
        //     email: "",
        //     personal_discount: 0
        // },
        // {
        //     id: 25,
        //     parents: [],
        //     club_card: {
        //         id: 22,
        //         rate: {
        //             id: 1,
        //             name: "Стандарт",
        //             train_quantity: 12,
        //             days_duration: 28,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 4,
        //             name: "Золотой"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 9999,
        //         valid_from: "2021-08-25",
        //         valid_until: "2021-09-20"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Всеволод",
        //     middle_name: null,
        //     last_name: "Кретов ",
        //     date_of_birth: "2016-05-26",
        //     street: "Рашпилевская ",
        //     house: "205",
        //     building: null,
        //     apartments: null,
        //     in_archive: false,
        //     phone_number: "89140420868",
        //     email: "",
        //     personal_discount: 0
        // },
        // {
        //     id: 26,
        //     parents: [],
        //     club_card: {
        //         id: 23,
        //         rate: {
        //             id: 1,
        //             name: "Стандарт",
        //             train_quantity: 12,
        //             days_duration: 28,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 5,
        //             name: "Сапфировый"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 9999,
        //         valid_from: "2021-08-23",
        //         valid_until: "2021-09-17"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Марат ",
        //     middle_name: "Русланович",
        //     last_name: "Ашинов",
        //     date_of_birth: "2014-12-22",
        //     street: null,
        //     house: null,
        //     building: null,
        //     apartments: null,
        //     in_archive: false,
        //     phone_number: "89189200550",
        //     email: "",
        //     personal_discount: 0
        // },
        // {
        //     id: 27,
        //     parents: [],
        //     club_card: {
        //         id: 24,
        //         rate: {
        //             id: 1,
        //             name: "Стандарт",
        //             train_quantity: 12,
        //             days_duration: 28,
        //             is_personal: false
        //         },
        //         level: {
        //             id: 6,
        //             name: "Рубиновый"
        //         },
        //         age_group: {
        //             id: 1,
        //             label: "Ребенок"
        //         },
        //         train_balance: 9999,
        //         valid_from: "2021-08-20",
        //         valid_until: "2021-09-15"
        //     },
        //     train_group: {
        //         id: 1,
        //         name: "Маленькие чемпионы",
        //         trainer: 1,
        //         age_group: null
        //     },
        //     first_name: "Рамир",
        //     middle_name: "Михайлович",
        //     last_name: "Мамедов ",
        //     date_of_birth: "2014-12-08",
        //     street: "Ул. Атарбекова ",
        //     house: "27",
        //     building: null,
        //     apartments: null,
        //     in_archive: false,
        //     phone_number: "89528664289",
        //     email: "",
        //     personal_discount: 0
        // }
    ],
    couches:[],
};

export const generalPageReducer = (state = initialState, action = null) => {
    switch (action.type) {
        case LOAD_GENERAL_PAGE_DATA:
            return {
                ...state,
                error: [],
                loading: true
            };
        case LOAD_GENERAL_PAGE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: [],
                groups: [...action.payload.groups],
                couches: [...action.payload.couches],
                clients: [...action.payload.clients]
            }
        case LOAD_GENERAL_PAGE_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: [...action.payload]
            };
        case SEARCH_CLIENTS:
            let search_name = action.payload;
            let filteredData = [...state.clients].filter(client => {
                let last_first_middle = (client?.last_name?.toLowerCase()||'') + ' ' + (client?.first_name?.toLowerCase()||'') + ' ' + (client?.middle_name?.toLowerCase()||'');
                let last_middle_first = (client?.last_name?.toLowerCase()||'') + ' ' + (client?.middle_name?.toLowerCase()||'') + ' ' + (client?.first_name?.toLowerCase()||'');
                let middle_last_first = (client?.middle_name?.toLowerCase()||'') + ' ' + (client?.last_name?.toLowerCase()||'') + ' ' + (client?.first_name?.toLowerCase()||'');
                let middle_first_last = (client?.middle_name?.toLowerCase()||'') + ' ' + (client?.first_name?.toLowerCase()||'') + ' ' + (client?.last_name?.toLowerCase()||'');
                let first_middle_last = (client?.first_name?.toLowerCase()||'') + ' ' + (client?.middle_name?.toLowerCase()||'') + ' ' + (client?.last_name?.toLowerCase()||'');
                let first_last_middle = (client?.first_name?.toLowerCase()||'') + ' ' + (client?.last_name?.toLowerCase()||'') + ' ' + (client?.middle_name?.toLowerCase()||'');
                if (
                    last_first_middle.includes(search_name.toLowerCase())||
                    last_middle_first.includes(search_name.toLowerCase())||
                    middle_first_last.includes(search_name.toLowerCase())||
                    middle_last_first.includes(search_name.toLowerCase())||
                    first_last_middle.includes(search_name.toLowerCase())||
                    first_middle_last.includes(search_name.toLowerCase())
                ) {
                    return client
                }
                return false

            });
            if (search_name) {
                return {
                    ...state,
                    filter_clients: filteredData
                }
            }
            return {
                ...state,
                filter_clients: []
            };
        default:
            return state;
    }
};