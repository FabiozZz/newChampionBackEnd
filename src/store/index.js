import {combineReducers, createStore} from "redux";
import {userReducer} from "../reducers/userReducer";
import {timeTableReducer} from "../reducers/timeTableReducer";

const rootReducer = combineReducers({
    user: userReducer,
    timeTable: timeTableReducer
})
export const store = createStore(rootReducer)