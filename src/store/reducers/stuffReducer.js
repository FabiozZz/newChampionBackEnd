import {LOAD_STUFF, LOAD_STUFF_FAILURE, LOAD_STUFF_SUCCESS} from "../../constants/stuffsConstants";

const initialState = {
    stuffs: [],
    error: [],
    loading: false,
    success: null,
    special: [],
    sortered_at: [],
    filial: [],
    search: ''
};
export const stuffReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STUFF:
            return {
                ...state,
                loading:true
            }
        case LOAD_STUFF_SUCCESS:
            return {
                ...state,
                loading: false,
                stuffs:[...action.payload]
            };
        case LOAD_STUFF_FAILURE:
            return {
                ...state,
                error: [...action.payload],
                loading: false
            }
        default:
            return state;
    }
};