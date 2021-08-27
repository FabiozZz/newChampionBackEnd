import {fork,take, select, put,takeEvery,call} from 'redux-saga/effects';
import {LOG_IN_APP, LOG_IN_APP_SUCCESS, LOG_OUT, TOKEN_REFRESH, TOKEN_VERIFY} from "../../../constants/userConstants";
import Api from "../../../Api/Api";
import {log_in, log_in_done, log_in_fail, log_out, token_refresh} from "../../Actions/userActions";

export function* tokenVerify() {
    console.log('вызов для проверки токена')
    try {
        yield call(() => Api.tokenVerify());
    } catch (e) {
        const error = {type:'warning',title:'Токен на устройстве просрочен или отсутствует!', desc: 'Мы попробуем его обновить'};
        yield put(log_in_fail(error));
        yield put(token_refresh());
    }
}

export function* tokenRefresh() {
    console.log('вызов для обновления токена')
    try {
        const request = yield Api.tokenRefresh();
        yield call(() => Api.setToken(request.data.access));
        yield put(log_in_done({
            type: 'success',
            title: 'Токен восстановлен',
            desc: 'Можете продолжать пользоваться системой'
        }))
    } catch (e) {
        yield put(log_in_fail({type:'error',title:'Отсутствуют токены на устройстве',body:'Выполните вход в систему еще раз'}))
    }
}

export function* loggedInApp({payload}) {
    try {
        yield Api.login({...payload});
        yield put(log_in_done({type:'success',title:'Поздравляю',desc:'Вы вошли в систему'}));
    } catch (e){
        yield put(log_in_fail({type:'error',title:'Неверные данные',desc:'Проверьте правильность введенных данных и попробуйте снова'}));
    }
}

export function* loggedOutInApp() {
    yield call(() => Api.logout());
}

export function* reLoggedInApp() {
    yield put(log_in_done());
}

export default function* generalPageSaga() {
    yield takeEvery(LOG_IN_APP,loggedInApp)
    yield takeEvery(TOKEN_VERIFY,tokenVerify)
    yield takeEvery(TOKEN_REFRESH,tokenRefresh)
    yield takeEvery(LOG_OUT, loggedOutInApp);
};