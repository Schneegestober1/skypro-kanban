import { useState } from 'react'
import './App.css'
import { Header } from './componets/Header/Header.jsx'
import { Main } from './componets/Main/Main.jsx'
import { PopBrowse } from './componets/Popups/PopBrowse/PopBrowse.jsx'
import { PopNewCard } from './componets/Popups/PopNewCard/PopNewCard.jsx'
import { PopUSer } from './componets/Popups/Popuser/PopUser.jsx'
import { tasks } from './data.js'


function App() {
	const [cards, setCards] = useState(tasks);
	console.log(cards);
  return (
	<div className="wrapper">
		{/* pop-up start */}
		<PopUSer/>
		<PopNewCard/>
		<PopBrowse/>
		{/* pop-up end */}
		<Header/>
		<Main cards={cards}/>	
	</div>
  )
}
export default App
