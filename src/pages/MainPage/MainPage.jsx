import {Main} from "../../componets/Main/Main.jsx";
import {useEffect, useState} from "react";
import {Wrapper} from "../../global.styled.js";
import {PopNewCard} from "../../componets/Popups/PopNewCard/PopNewCard.jsx";
import {Header} from "../../componets/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { getCards } from "../../api/cardsApi.js";


export const MainPage = ({globalTheme, setGlobalTheme, isAuth}) => {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const addCard = (event) => {
        event.preventDefault()
        const newCard = {
            _id: cards[cards.length - 1].id + 1,
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
        getCards(isAuth.token).then((response) => {
            setCards(response.tasks)
            setIsLoading(false)
        })
    }, [])

    return(
        <Wrapper>
            {/* pop-up start */}
            <Outlet/>
            <PopNewCard/>
            {/* pop-up end */}
            <Header isAuth={isAuth} globalTheme={globalTheme} setGlobalTheme={setGlobalTheme} addCard={addCard}/>
            <Main isLoading={isLoading} cards={cards}/>
        </Wrapper>
    )
}