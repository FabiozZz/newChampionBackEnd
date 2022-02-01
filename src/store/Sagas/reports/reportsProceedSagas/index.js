import {PROCEED_REPORT_PAGE} from "constants/reportProceedConstants";
import {takeEvery, call, put} from "redux-saga/effects";
import Api from "Api/Api";
import {report_proceed_page_load, report_proceed_page_load_done} from "store/Actions/reportProceedActions";

export function* pageReportsOn(){
    yield put(report_proceed_page_load())
    const loadData = {
        ages_groups: yield call(()=>Api.getAgesGroupList().then(r=>r.data)),
        groups:yield call(()=>Api.getGroupList().then(r=>r.data)),
        couches:yield call(()=>Api.getCouchList().then(r=>r.data)),
        sources:yield call(()=>Api.getSourceList().then(r=>r.data)),
        levels:yield call(()=>Api.getStatusList().then(r=>r.data)),
    }
    console.log('sagas report proceed>>>',loadData)
    yield put(report_proceed_page_load_done(loadData))
}

export function* reportProceedSagas() {
    yield takeEvery(PROCEED_REPORT_PAGE, pageReportsOn);
}