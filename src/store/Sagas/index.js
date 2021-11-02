import { all, cancelled, fork, put, spawn, take, select } from 'redux-saga/effects';
import generalPageSaga from './generalPagesSagas';
import { LOCATION_CHANGE } from 'connected-react-router';
import { matchPath } from 'react-router';
import { getRouteConfig } from '../../Routes/routes';
import {
	ADD_CLIENT_ROUTE,
	ALL_CLIENTS_ROUTE,
	EDIT_CLIENT_ROUTE,
	HOME_ROUTE,
	PROFILE_CLIENT_ROUTE,
	SETTINGS_ABONEMENT,
	SETTINGS_ABONEMENT_EDIT,
	SETTINGS_ABONEMENT_VIEW,
	SETTINGS_CREATE_ABONEMENT,
	SETTINGS_GROUP,
	SETTINGS_GROUP_CREATE,
	SETTINGS_GROUP_EDIT,
	SETTINGS_STATUS,
	SETTINGS_STATUS_CREATE,
	SETTINGS_STATUS_EDIT,
} from '../../Routes/actionRoutes';
import clientsPageSagas from './clientsPageSagas';
import { load_clients_all } from '../Actions/clientsActions';
import addingClientPageSagas from './addClientOnCRM';
import { clear_profile, load_profile_user, open_edit_page } from '../Actions/profileActions';
import { profilePageSagas } from './profilePageSagas';
import {
	load_data_for_edit_group_page,
	load_data_one_group,
} from '../Actions/settingsGroupEditActions';
import { editGroupPageSagas } from './editGroupPage';
import { load_general_page_data } from '../Actions/generalPageActions';
import { load_data_for_add_page } from '../Actions/addClientsActions';
import { start_load_data_set_group } from '../Actions/settingsGroupActions';
import { settingsGroupSagas } from './settingsGroupSagas';
import {
	start_load_data_abonement,
	start_load_data_settings_abonement,
	start_load_data_status,
} from '../Actions/settingsAbonementActions';
import { settingsAbonementSagas } from './settingsAbonementSagas';

export function* routeChangeSaga() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		/* страница клиентов */
		if (matchPath(action.payload.location.pathname, getRouteConfig(ALL_CLIENTS_ROUTE))) {
			let some_data;
			console.log(matchPath(action.payload.location.pathname, getRouteConfig(ALL_CLIENTS_ROUTE)));
			some_data = yield put(load_clients_all());
			console.log(some_data);
			if (yield cancelled()) {
				console.log('cancel');
			}
		}
		/* страница добавления клиента */
		if (matchPath(action.payload.location.pathname, getRouteConfig(ADD_CLIENT_ROUTE))) {
			console.log(matchPath(action.payload.location.pathname, getRouteConfig(ADD_CLIENT_ROUTE)));
			yield put(load_data_for_add_page());
			if (yield cancelled()) {
				console.log('cancel');
			}
		}
		/* страница настроек групп */
		if (matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_GROUP_CREATE))) {
			console.log(
				matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_GROUP_CREATE))
			);
			const settingsData = yield select(state => state.settings_group);
			console.log(settingsData);
			if (!settingsData.couches || !settingsData.ages_group) {
				yield put(start_load_data_set_group());
			}
			if (yield cancelled()) {
				console.log('cancel');
			}
		}

		/* страница создания группы */
		if (matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_GROUP))) {
			console.log(matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_GROUP)));
			yield put(start_load_data_set_group());
			if (yield cancelled()) {
				console.log('cancel');
			}
		}

		/* страница настроек абонементов */
		if (matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_ABONEMENT))) {
			console.log(matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_ABONEMENT)));
			yield put(start_load_data_settings_abonement());
			if (yield cancelled()) {
				console.log('cancel');
			}
		}
		/* страница настроек статусов */
		if (matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_STATUS))) {
			console.log(matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_STATUS)));
			yield put(start_load_data_settings_abonement());
			if (yield cancelled()) {
				console.log('cancel');
			}
		}

		/* страница создания абонементов */
		if (matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_CREATE_ABONEMENT))) {
			console.log(
				matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_CREATE_ABONEMENT))
			);
			const settings = yield select(state => state.settings_abonement);
			if (!settings.ages.length || !settings.statuses.length) {
				yield put(start_load_data_settings_abonement());
			}
		}

		/* страница создания статуса */
		if (matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_STATUS_CREATE))) {
			console.log(
				matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_STATUS_CREATE))
			);
			const settings = yield select(state => state.settings_abonement);
			if (!settings.ages.length || !settings.statuses.length) {
				yield put(start_load_data_settings_abonement());
			}
		}

		/* страница просмотра абонемента */
		const abonementPage = matchPath(
			action.payload.location.pathname,
			getRouteConfig(SETTINGS_ABONEMENT_VIEW)
		);
		if (abonementPage) {
			let { id } = abonementPage.params;
			id = Number(id);
			if (!isNaN(id) && typeof id === 'number') {
				yield put(start_load_data_abonement(id));
			}
		} else {
			yield put(clear_profile());
		}

		/* страница редактирования абонемента */
		const statusEditPage = matchPath(
			action.payload.location.pathname,
			getRouteConfig(SETTINGS_STATUS_EDIT)
		);
		if (statusEditPage) {
			let { id } = statusEditPage.params;
			id = Number(id);
			if (!isNaN(id) && typeof id === 'number') {
				yield put(start_load_data_status(id));
			}
		} else {
			yield put(clear_profile());
		}

		/* страница редактирования статуса */
		const abonementEditPage = matchPath(
			action.payload.location.pathname,
			getRouteConfig(SETTINGS_ABONEMENT_EDIT)
		);
		if (abonementEditPage) {
			let { id } = abonementEditPage.params;
			id = Number(id);
			if (!isNaN(id) && typeof id === 'number') {
				yield put(start_load_data_abonement(id));
			}
		} else {
			yield put(clear_profile());
		}

		/* страница профиля */
		const profilePage = matchPath(
			action.payload.location.pathname,
			getRouteConfig(PROFILE_CLIENT_ROUTE)
		);
		if (profilePage) {
			const id = profilePage.params;
			console.log(id);
			if (id) {
				yield put(load_profile_user(id));
			}
		} else {
			yield put(clear_profile());
		}

		// const editPage = matchPath(action.payload.location.pathname, getRouteConfig(EDIT_CLIENT_ROUTE))
		// if (profilePage) {
		//     const id = profilePage.params;
		//     console.log(id)
		//     if (id) {
		//         yield put(open_edit_page(id))
		//     }
		// }

		/* страница главная */
		// if (matchPath(action.payload.location.pathname, getRouteConfig(HOME_ROUTE))) {
		//     const {isAuth} = yield select(state => state.user);
		//     if (isAuth) {
		//         yield put(load_general_page_data());
		//         // yield put(load_stuff());
		//     }
		//     // if (Api.getToken()) {
		//     // yield put()
		//     // }
		//     // const id = detailsPage.params;
		//     // if (id) {
		//     //     yield put({type:LOAD_USER_DETAILS,payload: id})
		//     // }
		// }

		//     if (matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_GROUP))) {
		//         console.log(matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_GROUP)))
		//         yield put(load_data_for_edit_group_page());
		//     }
		//     const groupEditPage = matchPath(action.payload.location.pathname, getRouteConfig(SETTINGS_GROUP_EDIT));
		//
		//     if (groupEditPage) {
		//         const id = groupEditPage.params;
		//         if (id) {
		//             yield put(load_data_one_group(id));
		//         }
		//     }
	}
}

export default function* rootSaga() {
	console.log('start saga');
	const sagas = [
		/* сага главной страницы */
		generalPageSaga,

		/* сага страницы клиентов */
		clientsPageSagas,

		/* сага страницы добавления нового клиента */
		addingClientPageSagas,

		/* сага страницы профиля клиента */
		profilePageSagas,

		/* сага страницы настроек редактирования групп */
		editGroupPageSagas,

		/* сага страницы настроек группы */
		settingsGroupSagas,

		/* сага страницы настроек абонемента */
		settingsAbonementSagas,
	];
	yield all(sagas.map(s => spawn(s)));
	yield fork(routeChangeSaga);
}
