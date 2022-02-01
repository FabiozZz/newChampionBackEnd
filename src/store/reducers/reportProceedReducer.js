import {DONE_LOAD_DATA_PROCEED_REPORT, START_LOAD_DATA_PROCEED_REPORT} from "../../constants/reportProceedConstants";

const initialState = {
    filials:[],
    ages_groups:[],
    groups:[],
    couches:[],
    sources:[],
    levels:[],
    isLoading:false
}
export const reportProceedReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOAD_DATA_PROCEED_REPORT:
            return {
                ...state,
                isLoading: true
            }
        case DONE_LOAD_DATA_PROCEED_REPORT:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};