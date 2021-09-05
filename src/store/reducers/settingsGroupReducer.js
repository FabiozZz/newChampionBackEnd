import {
    LOAD_DATA_SETTINGS_GROUP,
    LOAD_DATA_SETTINGS_GROUP_FAILURE,
    LOAD_DATA_SETTINGS_GROUP_SUCCESS
} from "../../constants/settingsGroupConstants";

const initialState = {
    error: null,
    loading:false,
}

export const settingsGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_SETTINGS_GROUP:
            return {
                ...state,
                loading: true,
                error: null
            }
        case LOAD_DATA_SETTINGS_GROUP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                ...action.payload
            }
        case LOAD_DATA_SETTINGS_GROUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};