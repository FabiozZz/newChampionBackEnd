import {put} from 'redux-saga/effects';
import Api from "../../../../Api/Api";
import {load_profile_user_fail} from "../../../Actions/profileActions";

export function* getProfile(id) {
    console.log(id);
    try {
        const request = yield Api.getProfile(id);
        return request.data;
    } catch (e) {
        yield put(load_profile_user_fail(e))
    }
}
export function* getAbonimentList() {
    try {
        const request = yield Api.getAbonimentList();
        return request.data;
    } catch (e) {
        yield put(load_profile_user_fail(e))
    }
}
export function* getStatusList() {
    try {
        const request = yield Api.getStatusList();
        return request.data;
    } catch (e) {
        yield put(load_profile_user_fail(e))
    }
}
export function* getAgesGroupList() {
    try {
        const request = yield Api.getAgesGroupList();
        return request.data;
    } catch (e) {
        yield put(load_profile_user_fail(e))
    }
}
export function* getGroupList() {
    try {
        const request = yield Api.getGroupList();
        return request.data;
    } catch (e) {
        yield put(load_profile_user_fail(e))
    }
}
export function* getCouchList() {
    try {
        const request = yield Api.getCouchList();
        return request.data;
    } catch (e) {
        yield put(load_profile_user_fail(e))
    }
}
export function* getVisitList(id) {
    try {
        const request = yield Api.getProfileVisit(id);
        return request.data;
    } catch (e) {
        yield put(load_profile_user_fail(e))
    }
}
export function* getPayList(id) {
    try {
        const request = yield Api.getProfilePay(id);
        return request.data;
    } catch (e) {
        yield put(load_profile_user_fail(e))
    }
}

//
// await Api.getAbonimentList(source.token).then(r => {
//     dispatch(load_profile_aboniment(r.data))
// });
// await Api.getStatusList(source.token).then(r => {
//     dispatch(load_profile_status(r.data))
// });
// await Api.getGroupList(source.token).then(r => {
//     dispatch(load_profile_group(r.data))
// });
// await Api.getCouchList(source.token).then(r => {
//     dispatch(load_profile_couch(r.data))
// });