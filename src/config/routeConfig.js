import {APP_ROUTE, PERSONAL_AREA_ROUTE} from "../constants/constants";
import {AppPage} from "../pages/AppPage";
import {PersonalAccountPage} from "../pages/PersonalAccountPage";

export const publicRoutes = [
    {
        path: APP_ROUTE,
        element: <AppPage/>
    }
]

export const privateRoutes = [
    {
        path: PERSONAL_AREA_ROUTE,
        element: <PersonalAccountPage/>
    }
]