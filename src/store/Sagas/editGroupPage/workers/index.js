import {call} from 'redux-saga/effects';
import Api from "../../../../Api/Api";

export function* loadGroups() {
    const request = yield call(() => Api.getGroupList());
    return request.data;
}
export function* loadCouches() {
    const request = yield call(() => Api.getCouchList());
    return request.data;
}