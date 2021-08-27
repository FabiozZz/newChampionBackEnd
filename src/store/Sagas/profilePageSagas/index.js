import {call,delay, put, takeEvery} from "redux-saga/effects";
import {EDIT_PROFILE, LOAD_PROFILE_USER} from "../../../constants/profileConstant";
import {getAbonimentList, getCouchList, getGroupList, getProfile, getStatusList} from "./workers";
import {edit_profile_done, load_profile_user_done} from "../../Actions/profileActions";
import Api from "../../../Api/Api";

// export function* loadClientsPage() {
//     let finalData = {};
//     // const tasks = yield all(data.map(task=>call(task)));
//
//     for (const key in data) {
//         if (typeof data[key] === "object") {
//             for (const keyInObj in data[key]) {
//                 finalData = {
//                     ...finalData,
//                     [key]:{
//                         ...finalData[key],
//                         [keyInObj]: yield call(() => data[key][keyInObj]())
//                     }}
//                 console.log(keyInObj)
//             }
//         }else{
//             finalData = {...finalData,[key]:yield call(() => data[key]())};
//         }
//     }
//     console.log('final data >>>' ,yield finalData)
//     // yield put(load_clients_all_done(finalData));
//
// }

export function* loadProfileWorker({payload}) {
    const {id} = payload;
    const finalData = yield {
        user: yield call(() => getProfile(id)),
        typeAboniment: yield call(()=>getAbonimentList()),
        status: yield call(()=>getStatusList()),
        group: yield call(()=>getGroupList()),
        couch: yield call(()=>getCouchList()),
    };
    console.log(finalData)
    yield put(load_profile_user_done(finalData))
}

export function* editProfileWorker({payload}) {
    const {id, ...data} = payload;
    console.log(payload);
    try {
        const request = yield call(() => Api.editProfileAbonement(id, data))
        console.log(yield request);
        yield put(edit_profile_done(request.data));
    } catch (e) {
        console.log(e);
    }
}

export function* profilePageSagas() {
    yield takeEvery(LOAD_PROFILE_USER,loadProfileWorker)
    yield takeEvery(EDIT_PROFILE,editProfileWorker)
}
