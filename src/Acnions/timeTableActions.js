import {
    CHANGE_COUCH_FOR_COURSE,
    CHANGE_TODAY,
    LOAD_CLIENTS,
    LOAD_COUCH,
    LOAD_GROUP
} from "../constants/timeTableConstants";

export const load_clients = (clients) => ({type: LOAD_CLIENTS, clients});
export const load_group = (group) => ({type: LOAD_GROUP, group});
export const load_couch = (couch) => ({type: LOAD_COUCH, couch});

export const change_couch = (id,couch) => ({type: CHANGE_COUCH_FOR_COURSE, id,couch});

export const client_change_toDay = (id,course) => ({type: CHANGE_TODAY, id,course});

