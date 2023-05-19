import React, {Suspense, useContext} from 'react';
import {Context} from "../index";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../config/routeConfig";

const AppRouter = () => {
    const {store} = useContext(Context);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {
                !store.isAuth
                    ?
                    <Routes>
                        {Object.values(publicRoutes).map(({element, path}) => (
                            <Route
                                key={path}
                                element={element}
                                path={path}
                            />
                        ))}
                    </Routes>
                    :
                    <Routes>
                        {Object.values(privateRoutes).map(({element, path}) => (
                            <Route
                                key={path}
                                element={element}
                                path={path}
                            />
                        ))}
                    </Routes>
            }
        </Suspense>
    );
};

export default AppRouter;