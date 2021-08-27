import {all, cancelled, fork, put, call, spawn, take} from 'redux-saga/effects';
import generalPageSaga from "./generalPagesSagas";
import {LOCATION_CHANGE} from "connected-react-router";
import {matchPath} from "react-router";
import {getRouteConfig} from "../../Routes/routes";
import {ALL_CLIENTS_ROUTE, HOME_ROUTE, PROFILE_CLIENT_ROUTE} from "../../Routes/actionRoutes";
import clientsPageSagas from "./clientsPageSagas";
import {load_clients_all} from "../Actions/clientsActions";
import Api from "../../Api/Api";
import addingClientPage from "./addClientOnCRM";
import addingClientPageSagas from "./addClientOnCRM";
import {load_profile_user} from "../Actions/profileActions";
import {profilePageSagas} from "./profilePageSagas";


export function* routeChangeSaga() {
    while (true) {
        const action = yield take(LOCATION_CHANGE);

        if (matchPath(action.payload.location.pathname, getRouteConfig(ALL_CLIENTS_ROUTE))) {
            let some_data
                console.log(matchPath(action.payload.location.pathname, getRouteConfig(ALL_CLIENTS_ROUTE)))
                some_data = yield put(load_clients_all());
                console.log(some_data)
            if (yield cancelled()) {
                console.log('cancel')
                // source.cancel();
                // yield put(load_clients_all_fail(e));
            }
            // const {page, search} = yield select(selectPeople);
            //
            // yield put({
            //     type: LOAD_USERS,
            //     payload: {
            //         page, search
            //     }
            // });
        }
        const profilePage = matchPath(action.payload.location.pathname, getRouteConfig(PROFILE_CLIENT_ROUTE))

        if (profilePage) {
            const id = profilePage.params;
            console.log(id)
            if (id) {
                yield put(load_profile_user(id))
            }
        }
        if (matchPath(action.payload.location.pathname, getRouteConfig(HOME_ROUTE))) {
            console.log(action)
            // const id = detailsPage.params;
            // if (id) {
            //     yield put({type:LOAD_USER_DETAILS,payload: id})
            // }
        }

    }
}


export default function* rootSaga() {
    console.log('start saga');
    const sagas = [generalPageSaga,clientsPageSagas,addingClientPageSagas,profilePageSagas];
    yield all(sagas.map(s => spawn(s)));
    yield fork(routeChangeSaga);
};