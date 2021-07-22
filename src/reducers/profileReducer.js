import {
    CHANGE_PROFILE,
    CLEAR_PROFILE,
    LOAD_PROFILE_COUCH,
    LOAD_PROFILE_FILIAL,
    LOAD_PROFILE_GROUP,
    LOAD_PROFILE_STATUS,
    LOAD_PROFILE_TYPE_ABONIMENT,
    LOAD_PROFILE_USER, UPDATE_PROFILE_CLUB_CARD,
} from "../constants/profileConstant";
console.log(LOAD_PROFILE_FILIAL);
const initialState = {
    user: {
        id: 21,
        parents: [],
        club_card: {
            id: 9,
            train_balance: 0,
            valid_from: null,
            valid_until: null,
            personal_discount: 0,
            level: null,
            rate: null
        },
        train_group: null,
        train_trainer: null,
        first_name: 'Теодор',
        middle_name: 'Пучкий',
        last_name: 'Адалай',
        date_of_birth: '1300-10-21',
        address: 'ул.Не важно д.1 кор.1 кв.1',
        in_archive: false,
        phone_number: '89999999999',
        email: '',
        is_adult: true
    },
    typeAboniment: [],
    status: [],
    group: [],
    couch: [],
    filial: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PROFILE_USER:
            return {
                ...state,
                user: action.profile
            };
        case LOAD_PROFILE_TYPE_ABONIMENT:
            return {
                ...state,
                typeAboniment: action.aboniment
            };
        case LOAD_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            };
        case LOAD_PROFILE_GROUP:
            return {
                ...state,
                group: action.group
            };
        case LOAD_PROFILE_COUCH:
            return {
                ...state,
                couch: action.couch
            };
        case CLEAR_PROFILE:
            return {
                user: {},
                typeAboniment: [],
                status: [],
                group: [],
                couch: [],
                filial: []
            };
        case LOAD_PROFILE_FILIAL:
            return {
                ...state,
                filial: action.filial
            };
        case CHANGE_PROFILE:
            return {
                ...state,
                user: {...action.profile}
            };
        case UPDATE_PROFILE_CLUB_CARD:
            console.log(action.club_card)
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.club_card
                }
            };
        default:
            return state;
    }
};