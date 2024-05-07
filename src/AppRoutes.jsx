import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.jsx";
import {LoginPage} from "./pages/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage.jsx";
import { paths } from "./routesPaths.js";

export const AppRoutes = ({globalTheme, setGlobalTheme}) => {
    return (
        <Routes>
            <Route path={paths.MAIN} element={<MainPage globalTheme={globalTheme} setGlobalTheme={setGlobalTheme}/>}/>
            <Route path={paths.LOGIN} element={<LoginPage/>}/>
            <Route path={paths.REGISTER} element={<RegisterPage/>}/>
        </Routes>
    )
}