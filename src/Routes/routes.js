import {GeneralPage} from "../components/GeneralPage/GeneralPage";
import {Add} from "../components/Add/Add";
import {Profile} from "../components/Profile/Profile";
import {Edit} from "../components/Edit/Edit";
import {Clients} from "../components/Clients/Clients";
import {Settings} from "../components/Settings/Settings";
import {CreateAndEditLessons} from "../components/Settings/Pages/CreateAndEditLessons/CreateAndEditLessons";
import {
    ADD_CLIENT_ROUTE,
    ALL_CLIENTS_ROUTE,
    CREATE_AND_EDIT_LESSONS,
    EDIT_CLIENT_ROUTE,
    HOME_ROUTE,
    PROFILE_CLIENT_ROUTE, SETTINGS_ABONEMENT, SETTINGS_AGE_GROUP_CREATE,
    SETTINGS_APP_ROUTE,
    SETTINGS_GROUP,
    SETTINGS_GROUP_CREATE,
    SETTINGS_GROUP_EDIT,
    SETTINGS_STATUS,
    STUFF_ROUTE
} from "./actionRoutes";
import {Stuffs} from "../components/Stuffs/Stuffs";
import {SettingsGroup} from "../components/Settings/Pages/SettingsGroup/SettingsGroup";
import {CreateGroup} from "../components/Settings/Pages/SettingsGroup/CreateGroup/CreateGroup";
import {EditGroup} from "../components/Settings/Pages/SettingsGroup/EditGroup/EditGroup";
import {SettingsStatus} from "../components/Settings/Pages/SettingsStatus/SettingsStatus";
import {SettingsAbonement} from "../components/Settings/Pages/SettingsAbonement/SettingsAbonement";
import {CreateAgeGroup} from "../components/Settings/Pages/SettingsGroup/CreateAgeGroup/CreateAgeGroup";

export const routes = [
    {
        id: HOME_ROUTE,
        path: '/',
        exact: true,
        component: GeneralPage
    },
    {
        id: ADD_CLIENT_ROUTE,
        path: '/add_client',
        exact: false,
        component: Add
    },
    {
        id: PROFILE_CLIENT_ROUTE,
        path: '/profile/:id/',
        exact: true,
        component: Profile
    },
    {
        id: EDIT_CLIENT_ROUTE,
        path: '/profile/:id/edit',
        exact: true,
        component: Edit
    },
    {
        id: ALL_CLIENTS_ROUTE,
        path: '/clients',
        exact: false,
        component: Clients
    },
    {
        id: SETTINGS_APP_ROUTE,
        path: '/settings',
        exact: true,
        component: Settings
    },
    {
        id: CREATE_AND_EDIT_LESSONS,
        path: '/settings/lesson',
        exact: false,
        component: CreateAndEditLessons
    },
    {
        id: STUFF_ROUTE,
        path: '/stuffs',
        exact: false,
        component: Stuffs
    },
    {
        id: SETTINGS_GROUP,
        path: '/settings/group',
        exact: true,
        component: SettingsGroup
    },
    {
        id: SETTINGS_GROUP_CREATE,
        path: '/settings/group/create_group',
        exact: true,
        component: CreateGroup
    },
    {
        id: SETTINGS_AGE_GROUP_CREATE,
        path: '/settings/group/create_age_group',
        exact: true,
        component: CreateAgeGroup
    },
    {
        id: SETTINGS_GROUP_EDIT,
        path: '/settings/group/create_group/:id',
        exact: true,
        component: EditGroup
    },
    {
        id: SETTINGS_STATUS,
        path: '/settings/status',
        exact: true,
        component: SettingsStatus
    },
    {
        id: SETTINGS_ABONEMENT,
        path: '/settings/abonement',
        exact: true,
        component: SettingsAbonement
    },
    // {
    //     id: AUTH_ADMIN_IN_APP,
    //     path: '/settings/lesson',
    //     exact: false,
    //     component: Auth
    // }
];

export const getRouteConfig = id => {
    const route = routes.find(r => r.id === id);

    if (route) {
        const {component, ...rest} = route;
        return rest;
    }
};

