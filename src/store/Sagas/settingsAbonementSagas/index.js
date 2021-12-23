import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
	ADD_NEW_STATUS,
	EDIT_DATA_SETTINGS_ABONEMENT,
	EDIT_STATUS,
	REMOVE_ABONEMENT,
	REMOVE_LEVEL,
	START_LOAD_DATA_ABONEMENT,
	START_LOAD_DATA_SETTINGS_ABONEMENT,
	START_LOAD_STATUS,
	UPLOAD_DATA_SETTINGS_ABONEMENT,
} from '../../../constants/settingsAbonementConstants';
import { getAbonementList, getAgesGroup, getStatusList } from './workers';
import {
	start_load_data_abonement_done,
	start_load_data_settings_abonement,
	start_load_data_settings_abonement_done,
	start_load_data_status_done,
} from '../../Actions/settingsAbonementActions';
import Api from '../../../Api/Api';

function* fetchDataForAbonementPage() {
	console.log('начала загрузки данных для настроек абонементов');
	const downLoadData = yield {
		abonements: yield call(() => getAbonementList()),
		statuses: yield call(() => getStatusList()),
		ages: yield call(() => getAgesGroup()),
	};

	console.log('страница настроек абонемента>>', downLoadData);

	yield put(start_load_data_settings_abonement_done(downLoadData));
}

function* fetchDataForAbonement({ payload }) {
	const abonements = yield select(state => state.settings_abonement);
	if (!abonements.ages.length) {
		yield put(start_load_data_settings_abonement());
	}
	let request = yield call(() => Api.getAbonimentWithId(payload));
	yield put(start_load_data_abonement_done(request.data));
}

function* fetchPostDataEditAbonement({ payload }) {
	const { id, ...rest } = payload;
	yield call(() => Api.editAbonementWithPrice(id, rest));
}
function* removeAbonement({ payload }) {
	yield call(() => Api.removeAbonementWithId(payload));
	yield put(start_load_data_settings_abonement());
}

function* fetchPostDataCreateAbonement({ payload }) {
	yield call(() => Api.sendNewAbonementWithPrice(payload));
}

function* fetchPostDataCreateStatus({ payload }) {
	yield call(() => Api.sendNewStatus(payload));
	yield put(start_load_data_settings_abonement());
}

function* fetchPostDataEditStatus({ payload }) {
	const response = yield call(() => Api.getStatusWithId(payload));
	yield put(start_load_data_settings_abonement());
	yield put(start_load_data_status_done(response.data));
}

function* fetchPatchDataStatus({ payload }) {
	const { id, ...rest } = payload;
	yield call(() => Api.updateStatus(id, rest));
	yield put(start_load_data_settings_abonement());
}

function* removeStatus({ payload }) {
	yield call(() => Api.removeStatusWithId(payload));
	yield put(start_load_data_settings_abonement());
}

export function* settingsAbonementSagas() {
	yield takeEvery(START_LOAD_DATA_SETTINGS_ABONEMENT, fetchDataForAbonementPage);
	yield takeEvery(START_LOAD_DATA_ABONEMENT, fetchDataForAbonement);
	yield takeEvery(UPLOAD_DATA_SETTINGS_ABONEMENT, fetchPostDataCreateAbonement);
	yield takeEvery(EDIT_DATA_SETTINGS_ABONEMENT, fetchPostDataEditAbonement);
	yield takeEvery(START_LOAD_STATUS, fetchPostDataEditStatus);
	yield takeEvery(REMOVE_ABONEMENT, removeAbonement);
	yield takeEvery(REMOVE_LEVEL, removeStatus);
	yield takeEvery(ADD_NEW_STATUS, fetchPostDataCreateStatus);
	yield takeEvery(EDIT_STATUS, fetchPatchDataStatus);
}
