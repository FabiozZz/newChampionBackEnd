import {
	BUY_ABONEMENT,
	BUY_ABONEMENT_CONFIGURE,
	CHANGE_PROFILE,
	CLEAR_PROFILE,
	CREATE_COMMENT_FOR_CLIENT,
	CREATE_PROFILE_PARENTS,
	EDIT_COMMENT_FOR_CLIENT,
	EDIT_PROFILE,
	EDIT_PROFILE_PARENTS,
	EDIT_PROFILE_SUCCESS,
	LOAD_PROFILE_USER,
	LOAD_PROFILE_USER_FAILURE,
	LOAD_PROFILE_USER_SUCCESS,
	OPEN_EDIT_PAGE,
	REMOVE_PROFILE_PARENTS,
} from 'constants/profileConstant';

export const load_profile_user = id => ({ type: LOAD_PROFILE_USER, payload: id });
export const load_profile_user_done = profile => ({
	type: LOAD_PROFILE_USER_SUCCESS,
	payload: profile,
});
export const load_profile_user_fail = error => ({
	type: LOAD_PROFILE_USER_FAILURE,
	payload: error,
});

export const open_edit_page = id => ({ type: OPEN_EDIT_PAGE, payload: id });
export const edit_profile = data => ({ type: EDIT_PROFILE, payload: data });
export const edit_profile_done = client => ({
	type: EDIT_PROFILE_SUCCESS,
	payload: client,
});
// export const edit_profile_fail = error => ({ type: EDIT_PROFILE_FAILURE, payload: error });

export const edit_profile_parents = data => ({
	type: EDIT_PROFILE_PARENTS,
	payload: data,
});
export const create_profile_parents = data => ({
	type: CREATE_PROFILE_PARENTS,
	payload: data,
});
export const remove_profile_parents = data => ({
	type: REMOVE_PROFILE_PARENTS,
	payload: data,
});

export const buy_abonement = data => ({ type: BUY_ABONEMENT, payload: data });
export const buy_abonement_configure = data => ({
	type: BUY_ABONEMENT_CONFIGURE,
	payload: data,
});
// export const buy_abonement_done = client => ({type: BUY_ABONEMENT_SUCCESS, payload: client});
//
// export const load_profile_aboniment = (aboniment) => ({type: LOAD_PROFILE_TYPE_ABONIMENT, aboniment});
// export const load_profile_status = (status) => ({type: LOAD_PROFILE_STATUS, status});
// export const load_profile_group = (group) => ({type: LOAD_PROFILE_GROUP, group});
// export const load_profile_couch = (couch) => ({type: LOAD_PROFILE_COUCH, couch});
// export const load_profile_filial = (filial) => ({type: LOAD_PROFILE_FILIAL, filial});
export const clear_profile = () => ({ type: CLEAR_PROFILE });
export const change_data_profile = profile => ({ type: CHANGE_PROFILE, profile });
// export const upload_profile_club_card = (club_card) => ({type: UPDATE_PROFILE_CLUB_CARD,club_card});

export const create_comment = data => ({
	type: CREATE_COMMENT_FOR_CLIENT,
	payload: { ...data },
});
export const edit_comment = data => ({
	type: EDIT_COMMENT_FOR_CLIENT,
	payload: { ...data },
});
