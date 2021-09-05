import {call, put, takeLatest} from "redux-saga/effects";
import {LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE} from "../../../constants/groupPageConstants";
import {
    load_data_for_edit_group_page_done
} from "../../Actions/settingsGroupEditActions";
import {loadCouches, loadGroups} from "./workers";

export function* getAllGroupForEditPage() {
    const downLoadData = yield {
        groups: yield call(()=>loadGroups()),
        couches: yield call(()=>loadCouches()),
    }
    yield put(load_data_for_edit_group_page_done(downLoadData));
}

// export function* getOneGroup({payload}) {
//     console.log(payload)
// }

export function* editGroupPageSagas() {
    yield takeLatest(LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE,getAllGroupForEditPage);
    // yield takeEvery(LOAD_GROUP_FOR_EDIT,getOneGroup)
}