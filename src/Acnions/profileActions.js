import {
    CHANGE_PROFILE,
    CLEAR_PROFILE,
    LOAD_PROFILE_COUCH,
    LOAD_PROFILE_FILIAL,
    LOAD_PROFILE_GROUP,
    LOAD_PROFILE_STATUS,
    LOAD_PROFILE_TYPE_ABONIMENT,
    LOAD_PROFILE_USER
} from "../constants/profileConstant";

export const load_profile_user = (profile) => ({type: LOAD_PROFILE_USER, profile});
export const load_profile_aboniment = (aboniment) => ({type: LOAD_PROFILE_TYPE_ABONIMENT, aboniment});
export const load_profile_status = (status) => ({type: LOAD_PROFILE_STATUS, status});
export const load_profile_group = (group) => ({type: LOAD_PROFILE_GROUP, group});
export const load_profile_couch = (couch) => ({type: LOAD_PROFILE_COUCH, couch});
export const load_profile_filial = (filial) => ({type: LOAD_PROFILE_FILIAL, filial});
export const clear_profile = () => ({type: CLEAR_PROFILE});
export const change_data_profile = (profile) => ({type: CHANGE_PROFILE,profile});