import {APP_ROUTE, AUTH_ROUTE} from "../constants/constants";
import {AuthPage} from "../pages/AuthPage";
import {AppPage} from "../pages/AppPage";

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        element: <AuthPage/>
    }
]

export const privateRoutes = [
    {
        path: APP_ROUTE,
        element: <AppPage/>
    }
]