import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.jsx";
import {LoginPage} from "./pages/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage.jsx";
import { paths } from "./routesPaths.js";
import PrivateRoute from "./PriviteRoutes.jsx";
import { useState } from "react";

export const AppRoutes = ({globalTheme, setGlobalTheme}) => {
    const [isAuth, setIsAuth] = useState(false)
    console.log(isAuth);
    
    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route path={paths.MAIN} element={<MainPage globalTheme={globalTheme} setGlobalTheme={setGlobalTheme}/>}/> 
            </Route>
            <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>}/>
            <Route path={paths.REGISTER} element={<RegisterPage/>}/>
        </Routes>
    )
}