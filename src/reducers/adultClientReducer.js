import {LOAD_GROUP_FOR_ADD_ADULT, LOAD_TIME_FOR_ADD_ADULT} from "../constants/addAdultConsts";

const initialState = {
    groupList: [],
    timeList: [],
}

export const adultClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GROUP_FOR_ADD_ADULT:
            return {
                ...state,
                groupList: [...action.group]
            }
        case LOAD_TIME_FOR_ADD_ADULT:
            return {
                ...state,
                timeList: [...action.time]
            }
        default:
            return state;
    }
};