import {
    ADD_DATA,
    CLEAR_FILTER_LESSON,
    FIND_LESSON,
    LOAD_COUCH_LESSON,
    LOAD_DATA,
    LOAD_GROUP_LESSON, REMOVE_DATA
} from "../../constants/createLessonsConstants";
import moment from "moment";

const initialState = {
    lessons: [],
    filter: [],
    group:[],
    couch:[],
}

export const createLessonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state, lessons: action.lessons
            }
        case REMOVE_DATA:
            return {
                ...state, filter: state.filter.filter(item=> item.id !== action.lesson)
            }
        case ADD_DATA:
            return {
                ...state, lessons: [...state.lessons,...action.less]
            }
        case FIND_LESSON:
            console.log(state.lessons.filter(lesson => moment(lesson.date).format('YYYY-MM-DD') === action.lesson))
            return {
                ...state,
                filter: [...state.lessons.filter(lesson => moment(lesson.date).format('YYYY-MM-DD') === action.lesson)]
            }
        case CLEAR_FILTER_LESSON:
            return {
                ...state,
                filter: []
            }
        case LOAD_GROUP_LESSON:
            return {
                ...state,
                group: [...action.group]
            }
        case LOAD_COUCH_LESSON:
            return {
                ...state,
                couch: [...action.couch]
            }
        default:
            return state
    }
};