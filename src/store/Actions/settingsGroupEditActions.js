import {
    LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE,
    LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE_FAILURE, LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE_SUCCESS, LOAD_GROUP_FOR_EDIT
} from "../../constants/groupPageConstants";

export const load_data_for_edit_group_page = ()=>({type:LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE})
export const load_data_for_edit_group_page_done = data => ({
    type: LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE_SUCCESS,
    payload: data
});
export const load_data_for_edit_group_page_fail = error => ({
    type: LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE_FAILURE,
    payload: error
});
export const load_data_one_group = id => ({
    type: LOAD_GROUP_FOR_EDIT,
    payload: id
});