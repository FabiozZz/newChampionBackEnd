import {
    CHANGE_COUCH_FOR_COURSE,
    CHANGE_TODAY, CLEAR_FILTER, FILTERED_CLIENTS,
    LOAD_CLIENTS,
    LOAD_COUCH,
    LOAD_GROUP
} from "../constants/timeTableConstants";

export const load_clients = (clients) => ({type: LOAD_CLIENTS, clients});
export const load_group = (group) => ({type: LOAD_GROUP, group});
export const load_couch = (couch) => ({type: LOAD_COUCH, couch});

export const change_couch = (id,couch) => ({type: CHANGE_COUCH_FOR_COURSE, id,couch});

export const client_change_toDay = (id,course) => ({type: CHANGE_TODAY, id,course});

export const filtered_clients = (group, coach) => ({type: FILTERED_CLIENTS, group, coach});
export const clear_filter = () => ({type: CLEAR_FILTER});