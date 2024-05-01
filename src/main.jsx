import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '/img/logo.png'
import '/img/logo_dark.png'
import { GlobalStyle } from './global.styled.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
