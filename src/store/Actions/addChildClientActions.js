import {LOAD_GROUP_FOR_ADD_CHILD, LOAD_TIME_FOR_ADD_CHILD} from "../../constants/addChildConsts";

export const group_list_child = (group)=>({type:LOAD_GROUP_FOR_ADD_CHILD,group})
export const time_list_child = (time)=>({type:LOAD_TIME_FOR_ADD_CHILD,time})