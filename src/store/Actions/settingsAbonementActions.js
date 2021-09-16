import {
    CLEAR_CURRENT_ABONEMENT, REMOVE_ABONEMENT,
    START_LOAD_DATA_ABONEMENT, START_LOAD_DATA_ABONEMENT_FAILURE, START_LOAD_DATA_ABONEMENT_SUCCESS,
    START_LOAD_DATA_SETTINGS_ABONEMENT, START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE,
    START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS, UPLOAD_DATA_SETTINGS_ABONEMENT
} from "../../constants/settingsAbonementConstants";

export const start_load_data_settings_abonement = () => ({type: START_LOAD_DATA_SETTINGS_ABONEMENT});
export const start_load_data_settings_abonement_done = data => ({type: START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS,payload:data});
export const start_load_data_settings_abonement_fail = error => ({type: START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE,payload:error});

export const start_load_data_abonement = (id) => ({type: START_LOAD_DATA_ABONEMENT, payload: id});
export const start_load_data_abonement_done = abonement => ({type: START_LOAD_DATA_ABONEMENT_SUCCESS,payload:abonement});
export const start_load_data_abonement_fail = error => ({type: START_LOAD_DATA_ABONEMENT_FAILURE,payload:error});

export const upload_abonement_data = data => ({type: UPLOAD_DATA_SETTINGS_ABONEMENT, payload: data});

export const clear_current_abonement = () => ({type: CLEAR_CURRENT_ABONEMENT});

export const remove_item_abonement = id => ({type: REMOVE_ABONEMENT, payload: id});
