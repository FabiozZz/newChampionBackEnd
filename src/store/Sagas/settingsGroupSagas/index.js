import {call, put, takeEvery} from "redux-saga/effects";
import {FETCH_NEW_AGE_GROUP, LOAD_DATA_SETTINGS_GROUP} from "../../../constants/settingsGroupConstants";
import {getAgesGroups, getGroups} from "./workers";
import {start_load_data_set_group_done} from "../../Actions/settingsGroupActions";
import Api from "../../../Api/Api";
import {history} from "../../index";

function* fetchStartDataWorker() {
    const downLoadData = yield {
        groups: yield call(() => getGroups()),
        ages_groups: yield call(() => getAgesGroups())
    };
    console.log('Group page>>',downLoadData)
    yield put(start_load_data_set_group_done(downLoadData));
}

function* fetchDataNewAgeGroup({payload}) {
    try {
        yield call(() => Api.postAgeGroup(payload))
        history.goBack();
    } catch (e) {
        console.log(e)
    }
}

export function* settingsGroupSagas() {
    yield takeEvery(LOAD_DATA_SETTINGS_GROUP, fetchStartDataWorker);
    yield takeEvery(FETCH_NEW_AGE_GROUP,fetchDataNewAgeGroup)
}