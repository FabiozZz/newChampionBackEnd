import {call, put, takeEvery} from "redux-saga/effects";
import {START_LOAD_DATA_SETTINGS_ABONEMENT} from "../../../constants/settingsAbonementConstants";
import {getAbonementList, getStatusList} from "./workers";
import {start_load_data_settings_abonement_done} from "../../Actions/settingsAbonementActions";

function* fetchDataForAbonementPage() {
    console.log('начала загрузки данных для настроек абонементов')
    const downLoadData = yield {
        abonements: yield call(() => getAbonementList()),
        statuses: yield call(() => getStatusList())
    }
    console.log('страница настроек абонемента>>', downLoadData);
    yield put(start_load_data_settings_abonement_done(downLoadData));
}

export function* settingsAbonementSagas() {
    yield takeEvery(START_LOAD_DATA_SETTINGS_ABONEMENT,fetchDataForAbonementPage)
}