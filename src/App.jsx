import { useState } from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './themeStyle.styled.js'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage.jsx'
import { GlobalStyle } from './global.styled.js'

function App() {

  const [globalTheme, setGlobalTheme] = useState(true)

  return (
	<ThemeProvider theme={globalTheme ? lightTheme : darkTheme}>
		<GlobalStyle/>
		<Routes>
			<Route path={'/'} element={<MainPage globalTheme={globalTheme} setGlobalTheme={setGlobalTheme}/>}/>	
		</Routes>	
	</ThemeProvider>
  )
}
export default App
