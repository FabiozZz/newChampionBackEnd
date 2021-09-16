import {call, put, select, take, takeEvery} from "redux-saga/effects";
import {
    REMOVE_ABONEMENT,
    START_LOAD_DATA_ABONEMENT,
    START_LOAD_DATA_SETTINGS_ABONEMENT, UPLOAD_DATA_SETTINGS_ABONEMENT
} from "../../../constants/settingsAbonementConstants";
import {getAbonementList, getAgesGroup, getStatusList} from "./workers";
import {
    start_load_data_abonement_done, start_load_data_settings_abonement,
    start_load_data_settings_abonement_done
} from "../../Actions/settingsAbonementActions";
import Api from "../../../Api/Api";




function* fetchDataForAbonementPage() {
    console.log('начала загрузки данных для настроек абонементов')
    const downLoadData = yield {
        abonements: yield call(() => getAbonementList()),
        statuses: yield call(() => getStatusList()),
        ages: yield call(()=> getAgesGroup())
    }

    console.log('страница настроек абонемента>>', downLoadData);

    yield put(start_load_data_settings_abonement_done(downLoadData));
}


function* fetchDataForAbonement({payload}) {
    const abonements = yield select(state => state.settings_abonement);
    if (!abonements.ages.length) {
        yield put(start_load_data_settings_abonement());
    }
    let request = yield call(() => Api.getAbonimentWithId(payload));
    yield put(start_load_data_abonement_done(request.data))
}

function* fetchPostDataAbonement({payload}) {
    yield call(() => Api.sendNewAbonementWithPrice(payload));
}

function* removeAbonement({payload}) {
    yield call(() => Api.removeAbonementWithId(payload));
    yield put(start_load_data_settings_abonement());
}

export function* settingsAbonementSagas() {
    yield takeEvery(START_LOAD_DATA_SETTINGS_ABONEMENT, fetchDataForAbonementPage);
    yield takeEvery(START_LOAD_DATA_ABONEMENT, fetchDataForAbonement);
    yield takeEvery(UPLOAD_DATA_SETTINGS_ABONEMENT, fetchPostDataAbonement);
    yield takeEvery(REMOVE_ABONEMENT, removeAbonement);
}