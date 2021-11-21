import {
	LOAD_DATA_SOURCE_LIST,
	SUCCESS_EDIT_SOURCE_LIST,
	SUCCESS_LOAD_DATA_SOURCE_LIST,
} from 'constants/settingsSourceListConstants';

const initialState = {
	current_source: null,
	sources: [],
};
export const settingsMarketingReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_LOAD_DATA_SOURCE_LIST:
			return {
				...state,
				sources: [...action.payload],
			};
		case SUCCESS_EDIT_SOURCE_LIST:
			return {
				...state,
				current_source: action.payload,
			};
		default:
			return state;
	}
};
