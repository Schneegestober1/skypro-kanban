import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.jsx";
import {LoginPage} from "./pages/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage.jsx";
import { paths } from "./routesPaths.js";
import PrivateRoute from "./PriviteRoutes.jsx";
import { useState } from "react";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";

export const AppRoutes = ({globalTheme, setGlobalTheme}) => {
    const [isAuth, setIsAuth] = useState(true)
    
    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route path={paths.MAIN} element={<MainPage globalTheme={globalTheme} setGlobalTheme={setGlobalTheme}/>}/> 
            </Route>
            <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>}/>
            <Route path={paths.REGISTER} element={<RegisterPage/>}/>
            <Route path={paths.NOT_FOUND} element={<NotFoundPage/>}/>
        </Routes>
    )
}