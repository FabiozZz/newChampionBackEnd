import {
    DONE_LOAD_DATA_PROCEED_REPORT,
    PROCEED_REPORT_PAGE,
    START_LOAD_DATA_PROCEED_REPORT
} from "../../constants/reportProceedConstants";

export const report_proceed_page_on = ()=>({type:PROCEED_REPORT_PAGE})

export const report_proceed_page_load = ()=>({type:START_LOAD_DATA_PROCEED_REPORT})
export const report_proceed_page_load_done = (data)=>({type:DONE_LOAD_DATA_PROCEED_REPORT,payload:data})