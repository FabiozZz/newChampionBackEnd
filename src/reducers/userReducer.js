import {LOG_IN, LOG_OUT} from "../constants/userConstants";

const initialState = {
    currentUser: {},
    isAuth: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case LOG_IN:
            return {
                ...state,
                currentUser: action.user,
                isAuth: true
            };
        case LOG_OUT:
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state;
    }
};