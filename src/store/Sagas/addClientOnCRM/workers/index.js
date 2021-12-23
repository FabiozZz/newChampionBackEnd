import { call, put } from 'redux-saga/effects';
import Api from '../../../../Api/Api';
import { load_profile_user_fail } from 'store/Actions/profileActions';

export function* getGroup() {
	const request = yield call(() => Api.getGroupList());
	return request.data;
}
export function* getCouch() {
	const request = yield call(() => Api.getCouchList());
	return request.data;
}
export function* getAgesGroup() {
	const request = yield call(() => Api.getAgesGroupList());
	return request.data;
}

export function* getSourceList() {
	const request = yield call(() => Api.getSourceList());
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

/*TODO будет еще запрос на филиалы, когда бэк сделает*/
