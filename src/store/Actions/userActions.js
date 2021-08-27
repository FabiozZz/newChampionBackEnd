import {
    LOG_IN_APP,
    LOG_IN_APP_FAILURE,
    LOG_IN_APP_SUCCESS,
    LOG_OUT,
    TOKEN_REFRESH,
    TOKEN_VERIFY
} from "../../constants/userConstants";

export const log_in = (user)=>({type:LOG_IN_APP,payload:{...user}})
export const log_in_done = (message) => ({type: LOG_IN_APP_SUCCESS,payload:{...message}});
export const log_in_fail = (error) => ({type: LOG_IN_APP_FAILURE,payload:error});
export const log_out = () => ({type: LOG_OUT});

export const token_verify = () => ({type: TOKEN_VERIFY});
export const token_refresh = () => ({type: TOKEN_REFRESH});