import { call } from 'redux-saga/effects';
import Api from '../../../../Api/Api';

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

/*TODO будет еще запрос на филиалы, когда бэк сделает*/
