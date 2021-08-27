import {GeneralPage} from "../components/GeneralPage/GeneralPage";
import {Add} from "../components/Add/Add";
import {Profile} from "../components/Profile/Profile";
import {Edit} from "../components/Edit/Edit";
import {Clients} from "../components/Clients/Clients";
import {Settings} from "../components/Settings/Settings";
import {CreateAndEditLessons} from "../components/Settings/Pages/CreateAndEditLessons/CreateAndEditLessons";
import {
    ADD_CLIENT_ROUTE, ALL_CLIENTS_ROUTE, AUTH_ADMIN_IN_APP,
    CREATE_AND_EDIT_LESSONS,
    EDIT_CLIENT_ROUTE,
    HOME_ROUTE,
    PROFILE_CLIENT_ROUTE, SETTINGS_APP_ROUTE
} from "./actionRoutes";
import {Auth} from "../components/Auth/Auth";

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

