import { useState } from 'react'
import './App.css'
import { GlobalStyle} from './global.styled.js'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './themeStyle.styled.js'
import { Route, Routes } from 'react-router-dom'


function App() {

  const [globalTheme, setGlobalTheme] = useState(true)

  return (
	<ThemeProvider theme={globalTheme ? lightTheme : darkTheme}>
		<GlobalStyle/>
		<Routes>
			<Route path={''} element={''}></Route>
		</Routes>
		
	</ThemeProvider>
  )
}
export default App
