import {
	CREATE_SOURCE_LIST,
	DELETE_SOURCE_LIST,
	EDIT_SOURCE_LIST,
	LOAD_DATA_SOURCE_LIST,
	START_EDIT_SOURCE_LIST,
	SUCCESS_EDIT_SOURCE_LIST,
	SUCCESS_LOAD_DATA_SOURCE_LIST,
} from 'constants/settingsSourceListConstants';

export const start_load_data_settings_source_list = () => ({ type: LOAD_DATA_SOURCE_LIST });
export const success_load_data_settings_source_list = sources => ({
	type: SUCCESS_LOAD_DATA_SOURCE_LIST,
	payload: sources,
});
export const create_source_for_CRM = name => ({ type: CREATE_SOURCE_LIST, payload: name });

export const start_edit_source_on_CRM = id => ({ type: START_EDIT_SOURCE_LIST, payload: id });
export const done_edit_source_on_CRM = source => ({
	type: SUCCESS_EDIT_SOURCE_LIST,
	payload: source,
});
export const edit_source_for_CRM = name => ({ type: EDIT_SOURCE_LIST, payload: name });
export const remove_source_on_CRM = id => ({ type: DELETE_SOURCE_LIST, payload: id });
