import {put,takeEvery,call} from 'redux-saga/effects';
import {LOG_IN_APP, LOG_OUT, TOKEN_REFRESH, TOKEN_VERIFY} from "../../../constants/userConstants";
import Api from "../../../Api/Api";
import {log_in_done, log_in_fail, token_refresh} from "../../Actions/userActions";
import {LOAD_STUFF} from "../../../constants/stuffsConstants";
import {
    ADD_CLIENT_IN_TRAIN,
    CHANGE_TRAINER_FOR_GROUP,
    LOAD_GENERAL_PAGE_DATA, REMOVE_CLIENT_FROM_TRAIN
} from "../../../constants/generalPageConstants";
import {load_general_page_data, load_general_page_data_done} from "../../Actions/generalPageActions";
import {
    getAbonimentList,
    getAgesGroupList,
    getClients,
    getCouch, getCouchList,
    getGroupList,
    getGroups,
    getStatusList
} from "./workers";

export function* tokenVerify() {
    console.log('вызов для проверки токена')
    try {
        yield call(() => Api.tokenVerify());
        yield put(log_in_done())
        yield put(load_general_page_data());
    } catch (e) {
        console.log('не отправлино')
        const error = {type:'warning',title:'Токен на устройстве просрочен или отсутствует!', desc: 'Мы попробуем его обновить'};
        yield put(log_in_fail(error));
        yield put(token_refresh());
    }
}

export function* tokenRefresh() {
    console.log('вызов для обновления токена')
    try {
        const request = yield call(()=>Api.reLogin());
        yield call(() => Api.setToken(request.data.access));
        yield put(log_in_done({
            type: 'success',
            title: 'Токен восстановлен',
            desc: 'Можете продолжать пользоваться системой'
        }))
        yield put(load_general_page_data());
        console.log('токен восстановлен')
    } catch (e) {
        console.log('токен не восстановлен')
        yield put(log_in_fail({type:'error',title:'Отсутствуют токены на устройстве',body:'Выполните вход в систему еще раз'}))
    }
}

export function* loggedInApp({payload}) {
    try {
        yield Api.login({...payload});
        yield put(log_in_done({type:'success',title:'Поздравляю',desc:'Вы вошли в систему'}));
        yield put(load_general_page_data());
    } catch (e){
        console.log(e.response);
        if (!e.response) {
            yield put(log_in_fail({type:'error',title:'Сервер не отвечает',desc:'Попробуйте позже'}));
        }else if (e.response.status === 401){
            yield put(log_in_fail({type:'error',title:'Неверные данные',desc:'Проверьте правильность введенных данных и попробуйте снова'}));
        }
        console.log(e);
    }
}

export function* loggedOutInApp() {
    yield call(() => Api.logout());
}

/* TODO мне кажется это должно быть в другом файле, потом поменяю */
export function* loadStuff() {
    const request = yield call(()=>Api.getGeneralPageData())
    console.log(request)
}

export function* fetchDataGeneralPage() {
    console.log('я за группами')
    const fetchData = yield {
        groups: yield call(() => getGroups()),
        couches: yield call(()=>getCouch()),
        clients: yield call(() => getClients()),
        added_client:{
            groups: yield call(()=>getGroupList()),
            ages_groups: yield call(() => getAgesGroupList()),
            abonements: yield call(()=>getAbonimentList()),
            statuses: yield call(() => getStatusList()),
            couches: yield call(() => getCouchList())
        }
    }
    console.log(yield fetchData);
    yield put(load_general_page_data_done(fetchData));
}

export function* addedClient({payload}) {
    console.log(payload)
    yield call(() => Api.createTrain(payload));
    yield put(load_general_page_data());
}

export function* changeTrainer({payload}) {
    const {lesson,couch} = payload
    yield call(() => Api.changeCouch(lesson, couch));
    yield put(load_general_page_data());

}

export function* removeClientFromTrain({payload}) {
    yield call(() => Api.removeClientFromGroup(payload));
    yield put(load_general_page_data());
}

export default function* generalPageSaga() {
    yield takeEvery(LOG_IN_APP, loggedInApp);
    yield takeEvery(TOKEN_VERIFY, tokenVerify);
    yield takeEvery(TOKEN_REFRESH, tokenRefresh);
    yield takeEvery(LOG_OUT, loggedOutInApp);
    yield takeEvery(LOAD_STUFF, loadStuff);
    yield takeEvery(LOAD_GENERAL_PAGE_DATA, fetchDataGeneralPage);
    yield takeEvery(ADD_CLIENT_IN_TRAIN, addedClient);
    yield takeEvery(CHANGE_TRAINER_FOR_GROUP, changeTrainer);
    yield takeEvery(REMOVE_CLIENT_FROM_TRAIN, removeClientFromTrain);
};