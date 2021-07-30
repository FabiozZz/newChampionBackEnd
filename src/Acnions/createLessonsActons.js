import {
    ADD_DATA,
    CLEAR_FILTER_LESSON,
    FIND_LESSON,
    LOAD_COUCH_LESSON,
    LOAD_DATA,
    LOAD_GROUP_LESSON, REMOVE_DATA
} from "../constants/createLessonsConstants";

export const download_data = (lessons)=> ({type: LOAD_DATA,lessons})

export const remove_lesson = (lesson)=> ({type: REMOVE_DATA,lesson})
export const add_lesson = (less)=> ({type: ADD_DATA,less})

export const download_group_data = (group)=> ({type: LOAD_GROUP_LESSON,group})
export const download_couch_data = (couch)=> ({type: LOAD_COUCH_LESSON,couch})

export const search_lesson = (lesson)=> ({type: FIND_LESSON,lesson})
export const clear_filter_lesson = ()=> ({type: CLEAR_FILTER_LESSON})