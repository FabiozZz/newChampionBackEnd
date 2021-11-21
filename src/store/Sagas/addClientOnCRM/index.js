import { takeEvery, call, put } from 'redux-saga/effects';
import Api from '../../../Api/Api';
import { history } from '../../index';
import {
	ADD_CLIENT_ON_CRM,
	LOAD_DATA_FOR_ADD_CLIENT_PAGE,
} from '../../../constants/addClientConstants';
import { getAgesGroup, getCouch, getGroup, getSourceList } from './workers';
import {
	add_client_on_CRM_error,
	load_data_for_add_page_done,
} from '../../Actions/addClientsActions';

export function* addClientWorker({ payload }) {
	const { age, ...rest } = payload;

	try {
		const request = yield call(() => Api.postAddClient(rest));
		history.push(`/profile/${request.data.id}/`);
	} catch (e) {
		console.log('ошибки при отправке>>', e.response.data);
		yield put(add_client_on_CRM_error(e.response.data));
	}
}

export function* fetchDataAddClient() {
	console.log('я за данными для создания клиента');
	const fetchData = yield {
		groups: yield call(() => getGroup()),
		couches: yield call(() => getCouch()),
		source: yield call(() => getSourceList()),
		agesGroup: yield call(() => getAgesGroup()),
	};
	console.log('данные для создания клиента>>', fetchData);
	yield put(load_data_for_add_page_done(fetchData));
}

export default function* addingClientPageSagas() {
	yield takeEvery(ADD_CLIENT_ON_CRM, addClientWorker);
	yield takeEvery(LOAD_DATA_FOR_ADD_CLIENT_PAGE, fetchDataAddClient);
}
