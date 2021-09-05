import {
    ADD_CLIENT_ON_CRM,
    ADD_CLIENT_ON_CRM_FAILURE,
    LOAD_DATA_FOR_ADD_CLIENT_PAGE_SUCCESS
} from "../../constants/addClientConstants";

const initialState = {
    groups: [],
    couches: [],
    agesGroup: [],
    loading:false,
    error: null,
};
export const addClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_FOR_ADD_CLIENT_PAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                ...action.payload
            }
        case ADD_CLIENT_ON_CRM:
            return {
                ...state,
                error:null,
                loading:true
            }
        case ADD_CLIENT_ON_CRM_FAILURE:
            return {
                ...state,
                error:action.payload,
                loading:false
            }
        default:
            return state;
    }
};