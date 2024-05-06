import { useState } from 'react'
import './App.css'
import { GlobalStyle} from './global.styled.js'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './themeStyle.styled.js'
import {Route, Routes} from "react-router-dom"
import {MainPage} from "./pages/MainPage/MainPage.jsx"
import { LoginPage } from './pages/LoginPage/LoginPage.jsx'
import { RegisterPage } from './pages/RegisterPage/RegisterPage.jsx'


function App() {
	const [globalTheme, setGlobalTheme] = useState(true)


  return (
	<ThemeProvider theme={globalTheme ? lightTheme : darkTheme}>
		<GlobalStyle/>
		<Routes>
			<Route path={'/'} element={<MainPage globalTheme={globalTheme} setGlobalTheme={setGlobalTheme}/>}/>
			<Route path={'/login'} element={<LoginPage/>}/>
			<Route path={'/register'} element={<RegisterPage/>}/>
			
		</Routes>
	</ThemeProvider>
  )
}
export default App
