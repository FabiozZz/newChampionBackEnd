import {
    LOAD_PROFILE_COUCH,
    LOAD_PROFILE_GROUP,
    LOAD_PROFILE_STATUS,
    LOAD_PROFILE_TYPE_ABONIMENT,
    LOAD_PROFILE_USER
} from "../constants/profileConstant";

const initialState = {
    user:{},
    typeAboniment: [],
    status:[],
    group:[],
    couch:[]
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
        default:
            return state;
    }
};