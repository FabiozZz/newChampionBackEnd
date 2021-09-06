import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./reducers/userReducer";
import {clientsReducer} from "./reducers/clientsReducer";
import {profileReducer} from "./reducers/profileReducer";
import {createLessonsReducer} from "./reducers/createLessonsReducer";
import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware} from "connected-react-router";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./Sagas";
import {stuffReducer} from "./reducers/stuffReducer";
import {settingsForGroupEditPageReducer} from "./reducers/settingsForGroupEditPageReducer";
import {generalPageReducer} from "./reducers/generalPageReducer";
import {addClientReducer} from "./reducers/addClientReducer";
import {settings_abonementReducer} from "./reducers/settings_abonementReducer";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    user: userReducer,
    stuffs: stuffReducer,
    settings_group:settingsForGroupEditPageReducer,
    settings_abonement:settings_abonementReducer,
    general_page: generalPageReducer,
    clientsList: clientsReducer,
    addClient: addClientReducer,
    profile: profileReducer,
    lessons: createLessonsReducer,
    router: connectRouter(history)
})

const sagasMiddleware = createSagaMiddleware()


const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(routerMiddleware(history),sagasMiddleware)
    // )
);
sagasMiddleware.run(rootSaga);
window.store = store;
export default store;