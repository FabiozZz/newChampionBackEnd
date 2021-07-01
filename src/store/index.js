import {combineReducers, createStore} from "redux";
import {userReducer} from "../reducers/userReducer";
import {timeTableReducer} from "../reducers/timeTableReducer";
import {adultClientReducer} from "../reducers/adultClientReducer";
import {childClientReducer} from "../reducers/childClientReducer";
import {clientsReducer} from "../reducers/clientsReducer";
import {profileReducer} from "../reducers/profileReducer";

const rootReducer = combineReducers({
    user: userReducer,
    timeTable: timeTableReducer,
    clientsList: clientsReducer,
    addAdult: adultClientReducer,
    addChild: childClientReducer,
    profile: profileReducer
})
export const store = createStore(rootReducer);

window.store = store;