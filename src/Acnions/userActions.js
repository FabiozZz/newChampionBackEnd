import {LOG_IN, LOG_OUT} from "../constants/userConstants";

export const log_in = (user)=>({type:LOG_IN,user})
export const log_out = ()=>({type:LOG_OUT})