import {
	CLEAR_CURRENT_ABONEMENT,
	EXIT_STATUS_EDIT_PAGE,
	START_LOAD_DATA_ABONEMENT,
	START_LOAD_DATA_ABONEMENT_FAILURE,
	START_LOAD_DATA_ABONEMENT_SUCCESS,
	START_LOAD_DATA_SETTINGS_ABONEMENT,
	START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE,
	START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS,
	START_LOAD_STATUS_SUCCESS,
} from '../../constants/settingsAbonementConstants';

const initialState = {
	current_abonement: null,
	current_status: null,
	error: null,
	loading: false,
	ages: [],
	statuses: [],
	abonements: [],
};

export const settings_abonementReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_LOAD_DATA_SETTINGS_ABONEMENT:
			return {
				...state,
				loading: true,
			};
		case EXIT_STATUS_EDIT_PAGE:
			return {
				...state,
				current_status: null,
			};
		case START_LOAD_STATUS_SUCCESS:
			return {
				...state,
				current_status: action.payload,
			};
		case START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS:
			return {
				...state,
				loading: false,
				...action.payload,
			};
		case START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case START_LOAD_DATA_ABONEMENT:
			return {
				...state,
				loading: true,
			};
		case START_LOAD_DATA_ABONEMENT_SUCCESS:
			return {
				...state,
				loading: false,
				current_abonement: action.payload,
			};
		case START_LOAD_DATA_ABONEMENT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case CLEAR_CURRENT_ABONEMENT:
			return {
				...state,
				current_abonement: null,
			};
		default:
			return state;
	}
};
