import {put, call, takeLeading, fork, spawn} from "redux-saga/effects";
import {LOAD_CLIENTS_ALL} from "../../../constants/clientsConstans";
import {load_clients_all_done} from "../../Actions/clientsActions";
import {data, fetchAllClients, getStatusListForClients} from './workers';
import {getAbonimentList, getCouchList, getGroupList} from "../profilePageSagas/workers";

export function* loadClientsPage() {
    const finalData = yield {
        allClients: yield call(() => fetchAllClients()),
        filterSection: {
            group: yield call(() => getGroupList()),
            status: yield call(() => getStatusListForClients()),
            abonement: yield call(() => getAbonimentList()),
            couch: yield call(() => getCouchList()),
        }
    };
    console.log('final data >>>' ,yield finalData)
    yield put(load_clients_all_done(finalData));

}

export default function* clientsPageSagas() {
    yield takeLeading(LOAD_CLIENTS_ALL, loadClientsPage);
};