import {call, put, takeEvery} from "redux-saga/effects";
import {LOAD_DATA_SETTINGS_GROUP} from "../../../constants/settingsGroupConstants";
import {getAgesGroups, getGroups} from "./workers";
import {start_load_data_set_group_done} from "../../Actions/settingsGroupActions";

function* fetchStartDataWorker() {
    const downLoadData = yield {
        groups: yield call(() => getGroups()),
        ages_groups: yield call(() => getAgesGroups())
    };
    console.log('Group page>>',downLoadData)
    yield put(start_load_data_set_group_done(downLoadData));
}

export function* settingsGroupSagas() {
    yield takeEvery(LOAD_DATA_SETTINGS_GROUP,fetchStartDataWorker)
}