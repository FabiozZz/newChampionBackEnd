import {
    ADD_CLIENT_IN_TRAIN, CHANGE_TRAINER_FOR_GROUP,
    LOAD_GENERAL_PAGE_DATA,
    LOAD_GENERAL_PAGE_DATA_FAILURE,
    LOAD_GENERAL_PAGE_DATA_SUCCESS, REMOVE_CLIENT_FROM_TRAIN, SEARCH_CLIENTS
} from "../../constants/generalPageConstants";

export const load_general_page_data = () => ({type: LOAD_GENERAL_PAGE_DATA});

export const load_general_page_data_done = groups => ({type: LOAD_GENERAL_PAGE_DATA_SUCCESS,payload:groups});
export const load_general_page_data_fail = errors => ({type: LOAD_GENERAL_PAGE_DATA_FAILURE,payload:errors});

// export const change_couch_for_course = errors => ({type: LOAD_GENERAL_PAGE_DATA_FAILURE,payload:errors});

export const search_clients = name => ({type: SEARCH_CLIENTS, payload: name});

export const createTrainForCourse = data => ({type: ADD_CLIENT_IN_TRAIN, payload: data});

export const change_couch = data => ({type: CHANGE_TRAINER_FOR_GROUP, payload: data});

export const remove_client_from_group = train_id => ({type: REMOVE_CLIENT_FROM_TRAIN, payload: train_id});