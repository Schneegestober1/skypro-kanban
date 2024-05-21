import { useState } from 'react'
import './App.css'
import { GlobalStyle} from './global.styled.js'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './themeStyle.styled.js'
import {AppRoutes} from "./AppRoutes.jsx";

// 1:42:37


function App() {
  const [globalTheme, setGlobalTheme] = useState(true)

  return (
	<ThemeProvider theme={globalTheme ? lightTheme : darkTheme}>
		<GlobalStyle/>
		<AppRoutes globalTheme={globalTheme} setGlobalTheme={setGlobalTheme}/>
	</ThemeProvider>
  )
}
export default App
