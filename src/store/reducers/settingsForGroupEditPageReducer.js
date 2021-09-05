import {
    LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE,
    LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE_FAILURE,
    LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE_SUCCESS,
    LOAD_GROUP_FOR_EDIT, LOAD_GROUP_FOR_EDIT_FAILURE,
    LOAD_GROUP_FOR_EDIT_SUCCESS
} from "../../constants/groupPageConstants";

const initialState = {
    currentGroup: null,
    groups: [],
    couches: [],
    ages_group: [],
    loading: false,
    error: null
};

export const settingsForGroupEditPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GROUP_FOR_EDIT:
            return {
                ...state,
                loading:true
            }
        case LOAD_GROUP_FOR_EDIT_SUCCESS:
            return {
                ...state,
                loading:false,
                currentGroup:action.payload
            }
        case LOAD_GROUP_FOR_EDIT_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }

        case LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE:
            return {
                ...state,
                loading: true
            }
        case LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                ...action.payload
            }
        case LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};