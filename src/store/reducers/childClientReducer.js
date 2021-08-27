import {LOAD_GROUP_FOR_ADD_CHILD, LOAD_TIME_FOR_ADD_CHILD} from "../../constants/addChildConsts";

const initialState = {
    groupList: [],
    timeList: [],
}

export const childClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GROUP_FOR_ADD_CHILD:
            return {
                ...state,
                groupList: [...action.group]
            }
        case LOAD_TIME_FOR_ADD_CHILD:
            return {
                ...state,
                timeList: [...action.time]
            }
        default:
            return state;
    }
};