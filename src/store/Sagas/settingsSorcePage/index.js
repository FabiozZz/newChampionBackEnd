import { call, put, take, takeEvery } from 'redux-saga/effects';
import {
	CREATE_SOURCE_LIST,
	DELETE_SOURCE_LIST,
	EDIT_SOURCE_LIST,
	LOAD_DATA_SOURCE_LIST,
	START_EDIT_SOURCE_LIST,
} from 'constants/settingsSourceListConstants';
import Api from 'Api/Api';
import {
	done_edit_source_on_CRM,
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

export function* editSource({ payload }) {
	yield call(() => Api.editSourceList({ ...payload }));
	yield put(start_load_data_settings_source_list());
}

export function* startEditSource({ payload }) {
	const res = yield call(() => Api.getSource(payload));
	yield put(done_edit_source_on_CRM(res.data));
}

export function* deleteSource({ payload }) {
	yield call(() => Api.deleteSourceList(payload));
	yield put(start_load_data_settings_source_list());
}

export default function* settingsSourceListPage() {
	yield takeEvery(LOAD_DATA_SOURCE_LIST, loadData);
	yield takeEvery(CREATE_SOURCE_LIST, createSource);
	yield takeEvery(EDIT_SOURCE_LIST, editSource);
	yield takeEvery(DELETE_SOURCE_LIST, deleteSource);
	yield takeEvery(START_EDIT_SOURCE_LIST, startEditSource);
}
