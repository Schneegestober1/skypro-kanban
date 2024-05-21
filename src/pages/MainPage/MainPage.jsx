import {Main} from "../../componets/Main/Main.jsx";
import {useContext, useEffect, useState} from "react";
import {Wrapper} from "../../global.styled.js";
import {PopNewCard} from "../../componets/Popups/PopNewCard/PopNewCard.jsx";
import {Header} from "../../componets/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { getCards } from "../../api/cardsApi.js";
import { UserContext } from "../../context/userContext.jsx";
import { CardsContext } from "../../context/cardsContext.jsx";

export const MainPage = ({globalTheme, setGlobalTheme}) => {
    const {cards, setCards} = useContext(CardsContext)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const {user} = useContext(UserContext)

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
        getCards(user.token).then((response) => {
            setErrorMsg('')
            setCards(response.tasks)
            setIsLoading(false)
        }).catch((error) => {
            setErrorMsg(error.message)
        }).finally(() => {
            setIsLoading(false)
        })
    },[])

    return(
        <Wrapper>
            {/* pop-up start */}
            <Outlet/>
            <PopNewCard/>
            {/* pop-up end */}
            <Header user={user} globalTheme={globalTheme} setGlobalTheme={setGlobalTheme} addCard={addCard}/>
            <Main errorMsg={errorMsg} isLoading={isLoading} cards={cards}/>
        </Wrapper>
    )
}

