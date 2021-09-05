import {LOAD_STUFF, LOAD_STUFF_FAILURE, LOAD_STUFF_SUCCESS} from "../../constants/stuffsConstants";

export const load_stuff = () => ({type: LOAD_STUFF});
export const load_stuff_done = (stuffs) => ({type: LOAD_STUFF_SUCCESS, payload: stuffs});
export const load_stuff_fail = (error) => ({type: LOAD_STUFF_FAILURE, payload: error});
