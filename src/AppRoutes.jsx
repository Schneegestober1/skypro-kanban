import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.jsx";
import {LoginPage} from "./pages/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage.jsx";

export const AppRoutes = ({globalTheme, setGlobalTheme}) => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage globalTheme={globalTheme} setGlobalTheme={setGlobalTheme}/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
        </Routes>
    )
}