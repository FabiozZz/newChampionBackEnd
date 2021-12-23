import {
	LOG_IN_APP,
	LOG_IN_APP_SUCCESS,
	LOG_IN_APP_FAILURE,
	LOG_OUT,
} from '../../constants/userConstants';

const initialState = {
	isAuth: false,
	error: null,
	success: null,
	loading: false,
	access: null,
	refresh: null,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_APP:
			return {
				...state,
				success: null,
				error: null,
				loading: true,
			};
		case LOG_IN_APP_SUCCESS:
			console.log('user reducer :  ', action.payload.tokens);
			return {
				...state,
				loading: false,
				success: action.payload.message && action.payload.message,
				isAuth: true,
				...action.payload.tokens,
				// error:null
			};
		case LOG_IN_APP_FAILURE:
			return {
				...state,
				isAuth: false,
				success: null,
				loading: false,
				error: action.payload,
			};
		// case TOKEN_VERIFY:
		//     return {
		//         ...state,
		//     };
		case LOG_OUT:
			return {
				...state,
				isAuth: false,
				error: null,
				success: null,
				loading: false,
			};
		default:
			return state;
	}
};
