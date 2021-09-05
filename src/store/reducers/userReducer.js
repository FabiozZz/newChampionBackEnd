import {LOG_IN_APP, LOG_IN_APP_SUCCESS, LOG_IN_APP_FAILURE, LOG_OUT} from "../../constants/userConstants";

const initialState = {
    isAuth: false,
    error: null,
    success: null,
    loading: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case LOG_IN_APP:
            return {
                ...state,
                success:null,
                error:null,
                loading: true
            };
        case LOG_IN_APP_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload,
                isAuth:true,
                // error:null
            };
        case LOG_IN_APP_FAILURE:
            return {
                ...state,
                isAuth: false,
                success: null,
                loading: false,
                error: action.payload
            };
        // case TOKEN_VERIFY:
        //     return {
        //         ...state,
        //     };
        case LOG_OUT:
            return {
                ...state,
                isAuth: false,
                error: null,
                success: null,
                loading: false
            }
        default:
            return state;
    }
};