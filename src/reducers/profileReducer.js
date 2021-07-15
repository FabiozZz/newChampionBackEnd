import {
    CHANGE_PROFILE,
    CLEAR_PROFILE,
    LOAD_PROFILE_COUCH,
    LOAD_PROFILE_FILIAL,
    LOAD_PROFILE_GROUP,
    LOAD_PROFILE_STATUS,
    LOAD_PROFILE_TYPE_ABONIMENT,
    LOAD_PROFILE_USER,
} from "../constants/profileConstant";
console.log(LOAD_PROFILE_FILIAL);
const initialState = {
    user: {},
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
        default:
            return state;
    }
};