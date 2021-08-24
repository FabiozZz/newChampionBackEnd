import {combineReducers, createStore} from "redux";
import {userReducer} from "../reducers/userReducer";
import {timeTableReducer} from "../reducers/timeTableReducer";
import {adultClientReducer} from "../reducers/adultClientReducer";
import {childClientReducer} from "../reducers/childClientReducer";
import {clientsReducer} from "../reducers/clientsReducer";
import {profileReducer} from "../reducers/profileReducer";
import {createLessonsReducer} from "../reducers/createLessonsReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    user: userReducer,
    timeTable: timeTableReducer,
    clientsList: clientsReducer,
    addAdult: adultClientReducer,
    addChild: childClientReducer,
    profile: profileReducer,
    lessons: createLessonsReducer
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer:persistedReducer
})

// export const Store =()  =>{
//     let store = createStore(persistedReducer);
//     let persistor = persistStore(store);
//     window.store = store;
//     return {store, persistor}
// };
//
