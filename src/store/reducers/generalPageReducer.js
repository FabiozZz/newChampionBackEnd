import {
	ABONEMENT_EXPIRE,
	CHANGE_DATE,
	CHANGE_DATE_FOR_GET_LESSONS,
	LOAD_GENERAL_PAGE_DATA,
	LOAD_GENERAL_PAGE_DATA_FAILURE,
	LOAD_GENERAL_PAGE_DATA_SUCCESS,
	SEARCH_CLIENTS,
	SET_DATE,
} from '../../constants/generalPageConstants';
import moment from 'moment';

const initialState = {
	form_add: false,
	date_now: moment().format('DD.MM.YYYY'),
	current_date: moment().format('DD.MM.YYYY'),
	groups: [],
	loading: false,
	error: [],
	client: [],
	filter_clients: [],
	clients: [],
	couches: [],
	added_client: null,
};

export const generalPageReducer = (state = initialState, action = null) => {
	switch (action.type) {
		case SET_DATE:
			return {
				...state,
				date_now: action.payload,
				current_date: action.payload,
			};

		case CHANGE_DATE:
			return {
				...state,
				current_date: [...action.payload],
			};
		case ABONEMENT_EXPIRE:
			return {
				...state,
				form_add: true,
				error: [...action.payload],
			};
		case LOAD_GENERAL_PAGE_DATA:
			return {
				...state,
				error: [],
				form_add: false,
				loading: true,
			};
		case CHANGE_DATE_FOR_GET_LESSONS:
			return {
				...state,
				error: [],
				form_add: false,
				loading: true,
			};
		case LOAD_GENERAL_PAGE_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				error: [],
				groups: action.payload.groups,
				couches: action.payload.couches,
				clients: action.payload.clients,
				added_client: action.payload.added_client,
			};
		case LOAD_GENERAL_PAGE_DATA_FAILURE:
			return {
				...state,
				loading: false,
				error: [...action.payload],
			};
		case SEARCH_CLIENTS:
			let search_name = action.payload;
			let filteredData = [...state.clients].filter(client => {
				let last_first_middle =
					(client?.last_name?.toLowerCase() || '') +
					' ' +
					(client?.first_name?.toLowerCase() || '') +
					' ' +
					(client?.middle_name?.toLowerCase() || '');
				let last_middle_first =
					(client?.last_name?.toLowerCase() || '') +
					' ' +
					(client?.middle_name?.toLowerCase() || '') +
					' ' +
					(client?.first_name?.toLowerCase() || '');
				let middle_last_first =
					(client?.middle_name?.toLowerCase() || '') +
					' ' +
					(client?.last_name?.toLowerCase() || '') +
					' ' +
					(client?.first_name?.toLowerCase() || '');
				let middle_first_last =
					(client?.middle_name?.toLowerCase() || '') +
					' ' +
					(client?.first_name?.toLowerCase() || '') +
					' ' +
					(client?.last_name?.toLowerCase() || '');
				let first_middle_last =
					(client?.first_name?.toLowerCase() || '') +
					' ' +
					(client?.middle_name?.toLowerCase() || '') +
					' ' +
					(client?.last_name?.toLowerCase() || '');
				let first_last_middle =
					(client?.first_name?.toLowerCase() || '') +
					' ' +
					(client?.last_name?.toLowerCase() || '') +
					' ' +
					(client?.middle_name?.toLowerCase() || '');
				if (
					last_first_middle.includes(search_name.toLowerCase()) ||
					last_middle_first.includes(search_name.toLowerCase()) ||
					middle_first_last.includes(search_name.toLowerCase()) ||
					middle_last_first.includes(search_name.toLowerCase()) ||
					first_last_middle.includes(search_name.toLowerCase()) ||
					first_middle_last.includes(search_name.toLowerCase())
				) {
					return client;
				}
				return false;
			});
			if (search_name) {
				return {
					...state,
					filter_clients: filteredData,
				};
			}
			return {
				...state,
				filter_clients: [],
			};
		default:
			return state;
	}
};
