import {combineReducers, createStore} from "redux";
import {userReducer} from "../reducers/userReducer";
import {timeTableReducer} from "../reducers/timeTableReducer";
import {adultClientReducer} from "../reducers/adultClientReducer";
import {childClientReducer} from "../reducers/childClientReducer";

const rootReducer = combineReducers({
    user: userReducer,
    timeTable: timeTableReducer,
    addAdult: adultClientReducer,
    addChild: childClientReducer
})
export const store = createStore(rootReducer);

window.store = store;