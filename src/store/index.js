import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./reducers/userReducer";
import {timeTableReducer} from "./reducers/timeTableReducer";
import {adultClientReducer} from "./reducers/adultClientReducer";
import {childClientReducer} from "./reducers/childClientReducer";
import {clientsReducer} from "./reducers/clientsReducer";
import {profileReducer} from "./reducers/profileReducer";
import {createLessonsReducer} from "./reducers/createLessonsReducer";
import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware} from "connected-react-router";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./Sagas";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    user: userReducer,
    timeTable: timeTableReducer,
    clientsList: clientsReducer,
    addAdult: adultClientReducer,
    addChild: childClientReducer,
    profile: profileReducer,
    lessons: createLessonsReducer,
    router: connectRouter(history)
})

const sagasMiddleware = createSagaMiddleware()


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(routerMiddleware(history),sagasMiddleware)
    )
);
sagasMiddleware.run(rootSaga);
window.store = store;
export default store;