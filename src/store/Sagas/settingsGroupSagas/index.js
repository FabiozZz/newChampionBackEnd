import {call, takeEvery} from "redux-saga/effects";
import {LOAD_DATA_SETTINGS_GROUP} from "../../../constants/settingsGroupConstants";
import {getAgesGroups, getGroups} from "./workers";

function* fetchStartDataWorker() {
    const downLoadData = yield {
        groups: yield call(() => getGroups()),
        ages_groups: yield call(() => getAgesGroups())
    }
    console.log(downLoadData);
}

export function* settingsGroupSagas() {
    yield takeEvery(LOAD_DATA_SETTINGS_GROUP,fetchStartDataWorker)
}