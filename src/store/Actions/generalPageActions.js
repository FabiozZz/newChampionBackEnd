import {
	ABONEMENT_EXPIRE,
	ADD_CLIENT_IN_TRAIN,
	ADD_DEBT_CLIENT_IN_TRAIN,
	ADD_ONCE_CLIENT_IN_TRAIN,
	BUY_AND_ADD_CLIENT_ON_TRAIN,
	CHANGE_DATE,
	CHANGE_DATE_FOR_GET_LESSONS,
	CHANGE_TRAINER_FOR_GROUP,
	LOAD_GENERAL_PAGE,
	LOAD_GENERAL_PAGE_DATA,
	LOAD_GENERAL_PAGE_DATA_FAILURE,
	LOAD_GENERAL_PAGE_DATA_SUCCESS,
	REMOVE_CLIENT_FROM_TRAIN,
	SEARCH_CLIENTS,
	SET_DATE,
} from '../../constants/generalPageConstants';

export const change_date = date => ({ type: CHANGE_DATE, payload: date });
export const set_date = date => ({ type: SET_DATE, payload: date });

export const load_page = () => ({ type: LOAD_GENERAL_PAGE });

export const abonemet_expire = data => ({ type: ABONEMENT_EXPIRE, payload: data });

export const load_general_page_data = () => ({ type: LOAD_GENERAL_PAGE_DATA });

export const load_general_page_data_done = groups => ({
	type: LOAD_GENERAL_PAGE_DATA_SUCCESS,
	payload: groups,
});
export const load_general_page_data_fail = errors => ({
	type: LOAD_GENERAL_PAGE_DATA_FAILURE,
	payload: errors,
});

// export const change_couch_for_course = errors => ({type: LOAD_GENERAL_PAGE_DATA_FAILURE,payload:errors});

export const search_clients = name => ({ type: SEARCH_CLIENTS, payload: name });

export const get_lessons_with_date = date => ({ type: CHANGE_DATE_FOR_GET_LESSONS, payload: date });

export const createTrainForCourse = data => ({ type: ADD_CLIENT_IN_TRAIN, payload: data });
export const createDebtTrainForCourse = data => ({ type: ADD_DEBT_CLIENT_IN_TRAIN, payload: data });
export const createOnceTrainForCourse = data => ({ type: ADD_ONCE_CLIENT_IN_TRAIN, payload: data });
export const buyAbonementAndCreateOnceTrainForCourse = data => ({
	type: BUY_AND_ADD_CLIENT_ON_TRAIN,
	payload: data,
});

export const change_couch = data => ({ type: CHANGE_TRAINER_FOR_GROUP, payload: data });

export const remove_client_from_group = train_id => ({
	type: REMOVE_CLIENT_FROM_TRAIN,
	payload: train_id,
});
