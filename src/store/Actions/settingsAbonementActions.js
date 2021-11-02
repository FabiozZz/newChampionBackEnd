import {
	ADD_NEW_STATUS,
	CLEAR_CURRENT_ABONEMENT,
	EDIT_DATA_SETTINGS_ABONEMENT,
	EXIT_STATUS_EDIT_PAGE,
	REMOVE_ABONEMENT,
	REMOVE_LEVEL,
	START_LOAD_DATA_ABONEMENT,
	START_LOAD_DATA_ABONEMENT_FAILURE,
	START_LOAD_DATA_ABONEMENT_SUCCESS,
	START_LOAD_DATA_SETTINGS_ABONEMENT,
	START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE,
	START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS,
	START_LOAD_STATUS,
	START_LOAD_STATUS_SUCCESS,
	UPLOAD_DATA_SETTINGS_ABONEMENT,
} from '../../constants/settingsAbonementConstants';

export const start_load_data_settings_abonement = () => ({
	type: START_LOAD_DATA_SETTINGS_ABONEMENT,
});
export const start_load_data_settings_abonement_done = data => ({
	type: START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS,
	payload: data,
});
export const start_load_data_settings_abonement_fail = error => ({
	type: START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE,
	payload: error,
});

export const start_load_data_abonement = id => ({
	type: START_LOAD_DATA_ABONEMENT,
	payload: id,
});
export const start_load_data_status = id => ({
	type: START_LOAD_STATUS,
	payload: id,
});

export const remove_level = id => ({
	type: REMOVE_LEVEL,
	payload: id,
});
export const add_new_level = name => ({
	type: ADD_NEW_STATUS,
	payload: name,
});
export const start_load_data_status_done = current => ({
	type: START_LOAD_STATUS_SUCCESS,
	payload: current,
});
export const exit_edit_page_status = () => ({
	type: EXIT_STATUS_EDIT_PAGE,
});

export const start_load_data_abonement_done = abonement => ({
	type: START_LOAD_DATA_ABONEMENT_SUCCESS,
	payload: abonement,
});
export const start_load_data_abonement_fail = error => ({
	type: START_LOAD_DATA_ABONEMENT_FAILURE,
	payload: error,
});

export const upload_abonement_data = data => ({
	type: UPLOAD_DATA_SETTINGS_ABONEMENT,
	payload: data,
});
export const edit_abonement_data = data => ({
	type: EDIT_DATA_SETTINGS_ABONEMENT,
	payload: data,
});

export const clear_current_abonement = () => ({
	type: CLEAR_CURRENT_ABONEMENT,
});

export const remove_item_abonement = id => ({
	type: REMOVE_ABONEMENT,
	payload: id,
});
