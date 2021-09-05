import {call, put, select, takeEvery} from "redux-saga/effects";
import {BUY_ABONEMENT, EDIT_PROFILE, LOAD_PROFILE_USER, OPEN_EDIT_PAGE} from "../../../constants/profileConstant";
import {getAbonimentList, getCouchList, getGroupList, getProfile, getStatusList} from "./workers";
import {edit_profile_done, load_profile_user_done} from "../../Actions/profileActions";
import Api from "../../../Api/Api";
import {getAgesGroup} from "../addClientOnCRM/workers";

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
    const profile = select(state => state.profile);
    if (!profile.user) {
        const finalData = yield {
            user: yield call(() => getProfile(id)),
            typeAboniment: yield call(()=>getAbonimentList()),
            status: yield call(()=>getStatusList()),
            ages_group: yield call(()=>getAgesGroup()),
            group: yield call(()=>getGroupList()),
            couch: yield call(()=>getCouchList()),
        };
        console.log(finalData)
        yield put(load_profile_user_done(finalData))
    }
}

export function* openProfileEditWorker({payload}) {
    const finalData = yield {
        user: yield call(() => getProfile(payload)),
        typeAboniment: yield call(()=>getAbonimentList()),
        status: yield call(()=>getStatusList()),
        ages_group: yield call(()=>getAgesGroup()),
        group: yield call(()=>getGroupList()),
        couch: yield call(()=>getCouchList()),
    };
    console.log(finalData)
    yield put(load_profile_user_done(finalData))}

export function* editProfileWorker({payload}) {
    const {id, ...rest} = payload;
    try {
        const request = yield call(() => Api.editProfile(id,rest));
        console.log(request.data)
        yield  put(edit_profile_done(request.data));
    } catch (e) {
        console.log(e);
    }

};

export function* uploadDataBuyAbonement({payload}) {
    const {id, ...rest} = payload;
    const request = yield call(() => Api.buyProfileAbonement(id, rest));
    console.log('данные с сервера>>',request.data)
    yield put(edit_profile_done(request.data));


}

export function* profilePageSagas() {
    yield takeEvery(LOAD_PROFILE_USER,loadProfileWorker)
    yield takeEvery(OPEN_EDIT_PAGE,openProfileEditWorker)
    yield takeEvery(EDIT_PROFILE,editProfileWorker)
    yield takeEvery(BUY_ABONEMENT,uploadDataBuyAbonement)
}