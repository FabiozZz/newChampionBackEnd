import { GeneralPage } from 'components/GeneralPage/GeneralPage';
import { Add } from 'components/Add/Add';
import { Profile } from 'components/Profile/Profile';
import { Edit } from 'components/Edit/Edit';
import { Clients } from 'components/Clients/Clients';
import { Settings } from 'components/Settings/Settings';
import { CreateAndEditLessons } from 'components/Settings/Pages/CreateAndEditLessons/CreateAndEditLessons';
import {
	ADD_CLIENT_ROUTE,
	ALL_CLIENTS_ROUTE,
	CREATE_AND_EDIT_LESSONS,
	EDIT_CLIENT_ROUTE,
	HOME_ROUTE,
	PROFILE_CLIENT_ROUTE,
	PROFILE_CLIENT_ROUTE_ABONEMENT,
	PROFILE_CLIENT_ROUTE_ABONEMENT_CONSTRUCTOR,
	PROFILE_CLIENT_ROUTE_ABONEMENT_ONCE,
	PROFILE_CLIENT_ROUTE_ABONEMENT_TRIAL,
	REPORTS_ABONEMENTS_ROUTE,
	REPORTS_CLIENT_ROUTE,
	REPORTS_PROCEED_ROUTE,
	REPORTS_VISITS_ROUTE,
	SETTINGS_ABONEMENT,
	SETTINGS_ABONEMENT_EDIT,
	SETTINGS_ABONEMENT_VIEW,
	SETTINGS_AGE_GROUP_CREATE,
	SETTINGS_APP_ROUTE,
	SETTINGS_CREATE_ABONEMENT,
	SETTINGS_GROUP,
	SETTINGS_GROUP_CREATE,
	SETTINGS_GROUP_EDIT,
	SETTINGS_STATUS,
	SETTINGS_STATUS_CREATE,
	SETTINGS_STATUS_EDIT,
	SETTINTS_SALES_LIST,
	SETTINTS_SALES_LIST_CREATE,
	SETTINTS_SALES_LIST_EDIT,
	STUFF_ROUTE,
} from './actionRoutes';
import { Stuffs } from 'components/Stuffs/Stuffs';
import { SettingsGroup } from 'components/Settings/Pages/SettingsGroup/SettingsGroup';
import { CreateGroup } from 'components/Settings/Pages/SettingsGroup/CreateGroup/CreateGroup';
import { EditGroup } from 'components/Settings/Pages/SettingsGroup/EditGroup/EditGroup';
import { SettingsStatus } from 'components/Settings/Pages/SettingsStatus/SettingsStatus';
import { SettingsAbonement } from 'components/Settings/Pages/SettingsAbonement/SettingsAbonement';
import { CreateAgeGroup } from 'components/Settings/Pages/SettingsGroup/CreateAgeGroup/CreateAgeGroup';
import { ViewAbonement } from 'components/Settings/Pages/SettingsAbonement/ViewAbonement/ViewAbonement';
import { CreateAbonement } from 'components/Settings/Pages/SettingsAbonement/CreateAbonement/CreateAbonement';
import { EditAbonement } from 'components/Settings/Pages/SettingsAbonement/EditAbonement/EditAbonement';
import { CreateStatus } from 'components/Settings/Pages/SettingsStatus/CreateStatus/CreateStatus';
import { EditStatus } from 'components/Settings/Pages/SettingsStatus/EditStatus/EditStatus';
import SettingsMarkketing from 'components/Settings/Pages/SettingsMarketing';
import SettingsMarketingCreate from 'components/Settings/Pages/SettingsMarketing/CreateSale';
import EditSale from 'components/Settings/Pages/SettingsMarketing/EditSale';
import Abonement from 'components/Profile/AbonementPage/Abonement';
import AbonementConstructor from 'components/Profile/AbonementPage/AbonementConstructor';
import { Reports } from 'components/Reports/Reports';
import VisitedReport from 'components/Reports/Pages/VisitedReport';
import ProceedReport from 'components/Reports/Pages/ProceedReport';
import ClientReport from 'components/Reports/Pages/ClientReport';
import AbonementReport from 'components/Reports/Pages/AbonementReport';
import AbonementOnce from 'components/Profile/AbonementPage/AbonementOnce';
import AbonementTrial from 'components/Profile/AbonementPage/AbonementTrial';

export const routes = [
	{
		/* Домашняя страница */
		id: HOME_ROUTE,
		path: '/',
		exact: true,
		component: GeneralPage,
	},
	{
		/* Страница добавления клиента */
		id: ADD_CLIENT_ROUTE,
		path: '/add_client',
		exact: false,
		component: Add,
	},
	{
		/* Страница профиля клиента */
		id: PROFILE_CLIENT_ROUTE,
		path: '/profile/:id/',
		exact: true,
		component: Profile,
	},

	{
		/* Страница профиля клиента добавление нового абонемента */
		id: PROFILE_CLIENT_ROUTE_ABONEMENT,
		path: '/profile/:id/abonement',
		exact: true,
		component: Abonement,
	},
	{
		/* Страница профиля клиента добавление разового занятия */
		id: PROFILE_CLIENT_ROUTE_ABONEMENT_ONCE,
		path: '/profile/:id/abonement_once',
		exact: true,
		component: AbonementOnce,
	},
	{
		/* Страница профиля клиента добавление пробного занятия */
		id: PROFILE_CLIENT_ROUTE_ABONEMENT_TRIAL,
		path: '/profile/:id/abonement_trial',
		exact: true,
		component: AbonementTrial,
	},
	{
		/* Страница профиля клиента добавление конфигурируемого абонемента */
		id: PROFILE_CLIENT_ROUTE_ABONEMENT_CONSTRUCTOR,
		path: '/profile/:id/abonement_constructor',
		exact: true,
		component: AbonementConstructor,
	},

	{
		/* Страница редактирования профиля клиента */
		id: EDIT_CLIENT_ROUTE,
		path: '/profile/:id/edit',
		exact: true,
		component: Edit,
	},
	{
		/* Страница Клиенты */
		id: ALL_CLIENTS_ROUTE,
		path: '/clients',
		exact: false,
		component: Clients,
	},
	{
		/* Главная страница настроек */
		id: SETTINGS_APP_ROUTE,
		path: '/settings',
		exact: true,
		component: Settings,
	},
	{
		/* Страница создания и редактирования занятий */
		id: CREATE_AND_EDIT_LESSONS,
		path: '/settings/lesson',
		exact: false,
		component: CreateAndEditLessons,
	},
	{
		/* Страница Сотрудники */
		id: STUFF_ROUTE,
		path: '/stuffs',
		exact: false,
		component: Stuffs,
	},
	{
		/* Страница настройки групп */
		id: SETTINGS_GROUP,
		path: '/settings/group',
		exact: true,
		component: SettingsGroup,
	},
	{
		/* Страница создания группы */
		id: SETTINGS_GROUP_CREATE,
		path: '/settings/group/create_group',
		exact: true,
		component: CreateGroup,
	},
	{
		/* Страница создания возрастной группы */
		id: SETTINGS_AGE_GROUP_CREATE,
		path: '/settings/group/create_age_group',
		exact: true,
		component: CreateAgeGroup,
	},
	{
		/* Страница редактирования группы */
		id: SETTINGS_GROUP_EDIT,
		path: '/settings/group/create_group/:id',
		exact: true,
		component: EditGroup,
	},
	{
		/* Страница настройек статусов */
		id: SETTINGS_STATUS,
		path: '/settings/status',
		exact: true,
		component: SettingsStatus,
	},
	{
		/* Страница редактирования статуса */
		id: SETTINGS_STATUS_EDIT,
		path: '/settings/status/edit/:id',
		exact: true,
		component: EditStatus,
	},
	{
		/* Страница создания статуса */
		id: SETTINGS_STATUS_CREATE,
		path: '/settings/create_status',
		exact: true,
		component: CreateStatus,
	},
	{
		/* Страница настроек абонементов */
		id: SETTINGS_ABONEMENT,
		path: '/settings/abonement',
		exact: true,
		component: SettingsAbonement,
	},
	{
		/* Страница создания абонементов */
		id: SETTINGS_CREATE_ABONEMENT,
		path: '/settings/abonement/create/',
		exact: true,
		component: CreateAbonement,
	},
	{
		/* Страница просмотра абонемента */
		id: SETTINGS_ABONEMENT_VIEW,
		path: '/settings/abonement/:id',
		exact: true,
		component: ViewAbonement,
	},
	{
		/* Страница редактирования абонементов */
		id: SETTINGS_ABONEMENT_EDIT,
		path: '/settings/abonement/edit/:id',
		exact: true,
		component: EditAbonement,
	},
	{
		/* Страница настройек источников рекламы */
		id: SETTINTS_SALES_LIST,
		path: '/settings/marketing',
		exact: true,
		component: SettingsMarkketing,
	},
	{
		/* Страница добавления источника рекламы */
		id: SETTINTS_SALES_LIST_CREATE,
		path: '/settings/marketing/create_sale',
		exact: true,
		component: SettingsMarketingCreate,
	},
	{
		/* Страница редактирования источника рекламы */
		id: SETTINTS_SALES_LIST_EDIT,
		path: '/settings/marketing/:id',
		exact: true,
		component: EditSale,
	},
	{
		/* Главная страница отчетов */
		id: SETTINGS_ABONEMENT_EDIT,
		path: '/reports',
		exact: true,
		component: Reports,
	},
	{
		/* Отчеты по посещениям */
		id: REPORTS_VISITS_ROUTE,
		path: '/reports/visited',
		exact: true,
		component: VisitedReport,
	},
	{
		/* Отчеты по выручке */
		id: REPORTS_PROCEED_ROUTE,
		path: '/reports/proceeds',
		exact: true,
		component: ProceedReport,
	},
	{
		/* Отчеты по клиентам */
		id: REPORTS_CLIENT_ROUTE,
		path: '/reports/client',
		exact: true,
		component: ClientReport,
	},
	{
		/* Отчеты по абонементам */
		id: REPORTS_ABONEMENTS_ROUTE,
		path: '/reports/abonement',
		exact: true,
		component: AbonementReport,
	},
	// {
	// 	id: AUTH_ADMIN_IN_APP,
	// 	path: '/settings/lesson',
	// 	exact: false,
	// 	component: Auth,
	// },
];

export const getRouteConfig = id => {
	const route = routes.find(r => r.id === id);

	if (route) {
		const { component, ...rest } = route;
		return rest;
	}
};
