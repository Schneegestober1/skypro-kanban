import { useEffect, useState } from "react";
import { tasks } from './data.js'
import { Main } from "../../componets/Main/main.styled";
import { Wrapper } from "../../global.styled";
import { Header } from './componets/Header/Header.jsx'
import { PopBrowse } from './componets/Popups/PopBrowse/PopBrowse.jsx'
import { PopNewCard } from './componets/Popups/PopNewCard/PopNewCard.jsx'
import { PopUser } from './componets/Popups/Popuser/PopUser.jsx'

export const MainPage = () => {
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
	}, [])

    return (
        <Wrapper>
			{/* pop-up start */}
			<PopBrowse/>
			<PopNewCard/>
			<PopUser/>
			{/* pop-up end */}
			<Header globalTheme={globalTheme} setGlobalTheme={setGlobalTheme} addCard={addCard}/>
			<Main isLoading={isLoading} cards={cards}/>	
		</Wrapper>
    )
}