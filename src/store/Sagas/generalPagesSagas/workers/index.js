import { call, put } from 'redux-saga/effects';
import Api from 'Api/Api';
import { load_profile_user_fail } from 'store/Actions/profileActions';

export function* getGroups() {
	const request = yield call(() => Api.getGeneralPageData());
	return request.data;
}
export function* getGroupsWithDate(date) {
	const request = yield call(() => Api.getGeneralPageDataWithDate(date));
	return request.data;
}
export function* getCouch() {
	const request = yield call(() => Api.getCouchList());
	return request.data;
}
export function* getClients() {
	const request = yield call(() => Api.getAllClients());
	return request.data;
}

export function* getAbonimentList() {
	try {
		const request = yield Api.getAbonimentList();
		return request.data;
	} catch (e) {
		yield put(load_profile_user_fail(e));
	}
}
export function* getStatusList() {
	try {
		const request = yield Api.getStatusList();
		return request.data;
	} catch (e) {
		yield put(load_profile_user_fail(e));
	}
}
export function* getAgesGroupList() {
	try {
		const request = yield Api.getAgesGroupList();
		return request.data;
	} catch (e) {
		yield put(load_profile_user_fail(e));
	}
}
export function* getGroupList() {
	try {
		const request = yield Api.getGroupList();
		return request.data;
	} catch (e) {
		yield put(load_profile_user_fail(e));
	}
}
export function* getCouchList() {
	try {
		const request = yield Api.getCouchList();
		return request.data;
	} catch (e) {
		yield put(load_profile_user_fail(e));
	}
}
