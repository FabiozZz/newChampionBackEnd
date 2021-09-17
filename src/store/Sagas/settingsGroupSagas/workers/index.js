import {call} from 'redux-saga/effects';
import Api from "../../../../Api/Api";

export function* getGroups() {
    const response = yield call(() => Api.getGroupList());
    return response.data;
}
export function* getAgesGroups() {
    const response = yield call(() => Api.getAgesGroupList());
    return response.data;
}
export function* getCoushes() {
    const response = yield call(() => Api.getCouchList());
    return response.data;
}