import {
	LOAD_DATA_SOURCE_LIST,
	SUCCESS_LOAD_DATA_SOURCE_LIST,
} from 'constants/settingsSourceListConstants';

const initialState = {
	sources: [],
};
export const settingsMarketingReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_LOAD_DATA_SOURCE_LIST:
			return {
				...state,
				sources: [...action.payload],
			};
		default:
			return state;
	}
};
