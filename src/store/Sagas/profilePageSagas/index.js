import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
	BUY_ABONEMENT,
	CREATE_COMMENT_FOR_CLIENT,
	CREATE_PROFILE_PARENTS,
	EDIT_COMMENT_FOR_CLIENT,
	EDIT_PROFILE,
	EDIT_PROFILE_PARENTS,
	LOAD_PROFILE_USER,
	OPEN_EDIT_PAGE,
	REMOVE_PROFILE_PARENTS,
} from '../../../constants/profileConstant';
import {
	getAbonimentList,
	getCommentList,
	getCouchList,
	getGroupList,
	getPayList,
	getProfile,
	getStatusList,
	getVisitList,
} from './workers';
import {
	edit_profile_done,
	load_profile_user,
	load_profile_user_done,
	load_profile_user_fail,
} from '../../Actions/profileActions';
import Api from '../../../Api/Api';
import { getAgesGroup, getSourceList } from '../addClientOnCRM/workers';
import { func } from 'prop-types';

// export function* loadClientsPage() {
//     let finalData = {};
//     // const tasks = yield all(data.map(task=>call(task)));
//
//     for (const key in data) {
//         if (typeof data[key] === "object") {
//             for (const keyInObj in data[key]) {
//                 finalData = {
//                     ...finalData,
//                     [key]:{
//                         ...finalData[key],
//                         [keyInObj]: yield call(() => data[key][keyInObj]())
//                     }}
//                 console.log(keyInObj)
//             }
//         }else{
//             finalData = {...finalData,[key]:yield call(() => data[key]())};
//         }
//     }
//     console.log('final data >>>' ,yield finalData)
//     // yield put(load_clients_all_done(finalData));
//
// }

export function* loadProfileWorker({ payload }) {
	const { id } = payload;
	console.log(payload);
	const profile = select(state => state.profile);
	if (!profile.user) {
		const finalData = yield {
			user: yield call(() => getProfile(id)),
			typeAboniment: yield call(() => getAbonimentList()),
			status: yield call(() => getStatusList()),
			ages_group: yield call(() => getAgesGroup()),
			group: yield call(() => getGroupList()),
			couch: yield call(() => getCouchList()),
			visit_list: yield call(() => getVisitList(id)),
			comment_list: yield call(() => getCommentList(id)),
			pay_list: yield call(() => getPayList(id)),
		};
		console.log(finalData);
		yield put(load_profile_user_done(finalData));
	}
}

export function* openProfileEditWorker({ payload }) {
	const finalData = yield {
		user: yield call(() => getProfile(payload)),
		typeAboniment: yield call(() => getAbonimentList()),
		status: yield call(() => getStatusList()),
		ages_group: yield call(() => getAgesGroup()),
		group: yield call(() => getGroupList()),
		couch: yield call(() => getCouchList()),
		source: yield call(() => getSourceList()),
		visit_list: yield call(() => getVisitList(payload)),
		comment_list: yield call(() => getCommentList(payload)),
		pay_list: yield call(() => getPayList(payload)),
	};
	console.log(finalData);
	yield put(load_profile_user_done(finalData));
}

export function* editProfileWorker({ payload }) {
	const { id, ...rest } = payload;
	try {
		const request = yield call(() => Api.editProfile(id, rest));
		console.log(request.data);
		yield put(edit_profile_done(request.data));
	} catch (e) {
		console.log(e);
	}
}

export function* uploadDataBuyAbonement({ payload }) {
	const { id, ...rest } = payload;
	try {
		const request = yield call(() => Api.buyProfileAbonement(id, rest));
		console.log('данные с сервера>>', request.data);
		yield put(edit_profile_done(request.data));
	} catch (e) {
		console.log(e);
	}
}

export function* editParentsWorker({ payload }) {
	try {
		yield call(() => Api.editProfileParents(payload));
	} catch (e) {
		console.log(e.request);
		yield put(load_profile_user_fail(e.request));
	}
}

function* createProfileParents({ payload }) {
	console.log('%cpayload: ', 'color: MidnightBlue; background: Aquamarine;', payload);
	try {
		const { id, parents } = payload;
		yield call(() => Api.createParents(id, parents));
	} catch (e) {
		console.log(e.response.data);
		yield put(load_profile_user_fail(e.request));
	}
}

function* removeProfileParents({ payload }) {
	const { id, parents } = payload;
	yield call(() => Api.removeParents(id, parents));
}

function* create_comments_for_user({ payload }) {
	console.log('create comment >>>', payload);
	yield call(() => Api.createProfileComment({ ...payload }));
	yield put(load_profile_user({ id: payload.client_id }));
}

function* edit_comments_for_user({ payload }) {
	const { id, ...rest } = payload;
	yield call(() => Api.editProfileComment(id, { ...rest }));
	yield put(load_profile_user({ id: rest.client_id }));
}

export function* profilePageSagas() {
	yield takeEvery(LOAD_PROFILE_USER, loadProfileWorker);
	yield takeEvery(OPEN_EDIT_PAGE, openProfileEditWorker);
	yield takeEvery(EDIT_PROFILE, editProfileWorker);
	yield takeEvery(BUY_ABONEMENT, uploadDataBuyAbonement);
	yield takeEvery(EDIT_PROFILE_PARENTS, editParentsWorker);
	yield takeEvery(CREATE_PROFILE_PARENTS, createProfileParents);
	yield takeEvery(REMOVE_PROFILE_PARENTS, removeProfileParents);
	yield takeEvery(CREATE_COMMENT_FOR_CLIENT, create_comments_for_user);
	yield takeEvery(EDIT_COMMENT_FOR_CLIENT, edit_comments_for_user);
}
