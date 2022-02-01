import { applyMiddleware, combineReducers, createStore } from 'redux';
import { userReducer } from './reducers/userReducer';
import { clientsReducer } from './reducers/clientsReducer';
import { profileReducer } from './reducers/profileReducer';
import { createLessonsReducer } from './reducers/createLessonsReducer';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas';
import { stuffReducer } from './reducers/stuffReducer';
import { generalPageReducer } from './reducers/generalPageReducer';
import { addClientReducer } from './reducers/addClientReducer';
import { settings_abonementReducer } from './reducers/settings_abonementReducer';
import { settingsGroupReducer } from './reducers/settingsGroupReducer';
import { settingsMarketingReducer } from 'store/reducers/settingsMarketingReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {reportProceedReducer} from "./reducers/reportProceedReducer";

export const history = createBrowserHistory();

const persistConfig = {
	key: 'user',
	storage: storage,
	whitelist: [
		'user',
		'stuff',
		'settingsGroup',
		'generalPage',
		'clients',
		'addClient',
		'profile',
		'createLessons',
		'settingsMarketing',
		'reports_proceed'
	], // which reducer want to store
};

const rootReducer = combineReducers({
	user: userReducer,
	stuffs: stuffReducer,
	settings_group: settingsGroupReducer,
	settings_abonement: settings_abonementReducer,
	general_page: generalPageReducer,
	clientsList: clientsReducer,
	addClient: addClientReducer,
	profile: profileReducer,
	lessons: createLessonsReducer,
	marketing: settingsMarketingReducer,
	reports_proceed:reportProceedReducer,
	router: connectRouter(history),
});

const pReducer = persistReducer(persistConfig, rootReducer);

const sagasMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(routerMiddleware(history), sagasMiddleware);

const store = createStore(pReducer, middleware);
sagasMiddleware.run(rootSaga);

const persistor = persistStore(store);

window.store = store;
export { store, persistor };
