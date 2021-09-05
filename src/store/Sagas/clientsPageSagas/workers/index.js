import {call, put} from "redux-saga/effects";
import Api from "../../../../Api/Api";
import {
    load_clients_all_fail, load_filial_for_all,
    load_sort_list_for_all,
    load_types_list_for_all
} from "../../../Actions/clientsActions";

export function* fetchAllClients() {
    try {
        const response = yield call(()=>Api.getAllClients());
        return response.data
    } catch (e) {
        yield put(load_clients_all_fail(e))
    }
}
export function* getGroupList() {
    try {
        const response = yield call(()=>Api.getGroupList());
        return response.data
    } catch (e) {
        yield put(load_clients_all_fail(e))
    }
}

export function* getStatusListForClients() {
    try {
        const response = yield call(()=>Api.getStatusListForClients());
        return response.data
    } catch (e) {
        yield put(load_clients_all_fail(e))
    }
}

export function* getAbonimentList() {
    try {
        const response = yield call(()=>Api.getAbonimentList());
        return response.data
    } catch (e) {
        yield put(load_clients_all_fail(e))
    }
}

export function* getCouchList() {
    try {
        const response = yield call(()=>Api.getCouchList());
        return response.data
    } catch (e) {
        yield put(load_clients_all_fail(e))
    }
}

export function* getFilialList() {
    try {
        const response = yield call(()=>Api.getFilialList());
        yield put(load_filial_for_all(response.data));
    } catch (e) {
        yield put(load_clients_all_fail(e))
    }
}

export function* getSortListForClients() {
    try {
        const response = yield call(()=>Api.getSortListForClients());
        yield put(load_sort_list_for_all(response.data));
        console.log('push')
    } catch (e) {
        yield put(load_clients_all_fail(e))
    }
}

export function* fetchTypesList() {
    try {
        const response = yield call(()=>Api.getTypeList());
        yield put(load_types_list_for_all(response.data));
        console.log('push')
    } catch (e) {
        console.log(e)
        yield put(load_clients_all_fail(e))
    }
}