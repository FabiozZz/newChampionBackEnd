import {
    START_LOAD_DATA_SETTINGS_ABONEMENT, START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE,
    START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS
} from "../../constants/settingsAbonementConstants";

const initialState = {
    error: null,
    loading: false
};

export const settings_abonementReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOAD_DATA_SETTINGS_ABONEMENT:
            return {
                ...state,
                loading: true
            }
        case START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                ...action.payload
            }
        case START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        default:
            return state;
    }
};