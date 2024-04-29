import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './componets/Header/Header.jsx'
import { Main } from './componets/Main/Main.jsx'
import { PopBrowse } from './componets/Popups/PopBrowse/PopBrowse.jsx'
import { PopNewCard } from './componets/Popups/PopNewCard/PopNewCard.jsx'
import { PopUSer } from './componets/Popups/Popuser/PopUser.jsx'
import { tasks } from './data.js'
import { Wrapper } from './global.styled.js'


function App() {
	const [cards, setCards] = useState(tasks);
	const [isLoading, setIsLoading] = useState(false)

	const addCard = (event) => {
		event.preventDefault()
		const newCard = {
			id: cards[cards.length - 1].id + 1,
			date: '05/05/2024',
			topic: 'Web Design',
			title: 'Название задачи',
			status: 'Без статуса',
		}
		setCards(
			[...cards, newCard ]
		)
	}


	useEffect(() => {
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
		}, 500)
	}, [cards])


  return (
	<Wrapper>
		{/* pop-up start */}
		<PopUSer/>
		<PopNewCard/>
		<PopBrowse/>
		{/* pop-up end */}
		<Header addCard={addCard}/>
		<Main isLoading={isLoading} cards={cards}/>	
	</Wrapper>
  )
}
export default App
