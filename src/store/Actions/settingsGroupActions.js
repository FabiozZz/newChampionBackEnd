import {
    FETCH_NEW_AGE_GROUP,
    LOAD_DATA_SETTINGS_GROUP,
    LOAD_DATA_SETTINGS_GROUP_FAILURE,
    LOAD_DATA_SETTINGS_GROUP_SUCCESS
} from "../../constants/settingsGroupConstants";

export const start_load_data_set_group = () => ({type: LOAD_DATA_SETTINGS_GROUP});

export const start_load_data_set_group_done = data => ({type: LOAD_DATA_SETTINGS_GROUP_SUCCESS, payload: data});
export const start_load_data_set_group_Fail = error => ({type: LOAD_DATA_SETTINGS_GROUP_FAILURE,payload:error});

export const fetch_new_age_group = label => ({type: FETCH_NEW_AGE_GROUP,payload:label});
