import {LOAD_DATA_SETTINGS_GROUP} from "../../constants/settingsGroupConstants";

export const start_load_data_set_group = () => ({type: LOAD_DATA_SETTINGS_GROUP});

export const start_load_data_set_group_done = data => ({type: LOAD_DATA_SETTINGS_GROUP, payload: data});
export const start_load_data_set_group_Fail = error => ({type: LOAD_DATA_SETTINGS_GROUP,payload:error});