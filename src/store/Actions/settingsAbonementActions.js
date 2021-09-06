import {
    START_LOAD_DATA_SETTINGS_ABONEMENT, START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE,
    START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS
} from "../../constants/settingsAbonementConstants";

export const start_load_data_settings_abonement = () => ({type: START_LOAD_DATA_SETTINGS_ABONEMENT});
export const start_load_data_settings_abonement_done = data => ({type: START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS,payload:data});
export const start_load_data_settings_abonement_fail = error => ({type: START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE,payload:error});