import {call} from 'redux-saga/effects';
import Api from "../../../../Api/Api";

export function* getAbonementList(){
    const request = yield call(() => Api.getAbonimentList());
    return request.data
}
export function* getStatusList(){
    const request = yield call(() => Api.getStatusList());
    return request.data
}
export function* getAgesGroup(){
    const request = yield call(() => Api.getAgesGroupList());
    return request.data
}