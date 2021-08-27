import {takeEvery, call, put} from "redux-saga/effects";
import {ADD_CLIENT_ON_CRM} from "../../../constants/globalConstans";
import Api from "../../../Api/Api";
import {history} from "../../index";
import {load_profile_user} from "../../Actions/profileActions";

export function* addClientWorker({payload}) {
    const {age, ...rest} = payload;
    if (age < 16) {

        const request = yield call(() => Api.postAddChild(rest));
        console.log(request);
        // yield put(load_profile_user(request.data.id))
        history.push(`/profile/${request.data.id}/`);
    }else{
        const request = yield call(() => Api.postAddAdult(rest));
        console.log(request);
        history.push(`/profile/${request.data.id}/`);
    }
}

export default function* addingClientPageSagas() {
    yield takeEvery(ADD_CLIENT_ON_CRM,addClientWorker)
};