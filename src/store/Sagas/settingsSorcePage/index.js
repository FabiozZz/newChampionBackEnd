import { call, put, takeEvery } from 'redux-saga/effects';
import {
	CREATE_SOURCE_LIST,
	DELETE_SOURCE_LIST,
	LOAD_DATA_SOURCE_LIST,
} from 'constants/settingsSourceListConstants';
import Api from 'Api/Api';
import {
	start_load_data_settings_source_list,
	success_load_data_settings_source_list,
} from 'store/Actions/settingsSourcePageActions';

export function* loadData() {
	const res = yield call(() => Api.getSourceList());
	yield put(success_load_data_settings_source_list(res.data));
}

export function* createSource({ payload }) {
	yield call(() => Api.createSourceList({ ...payload }));
	yield put(start_load_data_settings_source_list());
}

export function* deleteSource({ payload }) {
	yield call(() => Api.deleteSourceList(payload));
	yield put(start_load_data_settings_source_list());
}

export default function* settingsSourceListPage() {
	yield takeEvery(LOAD_DATA_SOURCE_LIST, loadData);
	yield takeEvery(CREATE_SOURCE_LIST, createSource);
	yield takeEvery(DELETE_SOURCE_LIST, deleteSource);
}
