import {call} from "redux-saga/effects";
import Api from "../../../../Api/Api";

export function* getGroups() {
    const request = yield call(() => Api.getGeneralPageData())
    return request.data;
}
export function* getCouch() {
    const request = yield call(() => Api.getCouchList());
    return request.data;
}
export function* getClients() {
    const request = yield call(() => Api.getAllClients());
    return request.data;
}