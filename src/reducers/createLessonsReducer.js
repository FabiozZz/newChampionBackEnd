import {LOAD_DATA} from "../constants/createLessonsConstants";

const initialState = {
    lessons: [],
}

export const createLessonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state, lessons: action.lessons
            }
        default:
            return state
    }
};