import {ADD_CLIENT_ON_CRM, STOP_FETCHING} from "../../constants/globalConstans";

export const stoppingFetch = source => ({type:STOP_FETCHING,payload:source});
export const add_client_on_CRM = client => ({type:ADD_CLIENT_ON_CRM,payload:client});