import { Calendar } from "../../Calendar/Calendar.jsx"
import { paths } from "../../../routesPaths.js"
import { BtnBrowse, BtnBrowseEditBtnBor, BtnGroup, BtnLink, CategoriesPsubttl, CategoriesTheme, FormBrowseArea, FormBrowseBlock, PopBrowseBlock, PopBrowseBtnBrowse, PopBrowseBtnEdit, PopBrowseContainer, PopBrowseContent, PopBrowseDiv, PopBrowseError, PopBrowseForm, PopBrowseStatus, PopBrowseTopBlock, PopBrowseTtl, PopBrowseWrap,  StatusP, StatusTheme, StatusThemes, SubttlBrowseLabel, ThemeDownCategories } from "./popBrowse.styled.js"
import { useNavigate, useParams } from "react-router-dom"
import { CardsContext } from "../../../context/cardsContext.jsx"
import { useContext, useState } from "react"
import { deleteCard } from "../../../api/cardsApi.js"
import { UserContext } from "../../../context/userContext.jsx"


export const PopBrowse = () => {

    const {cards, setCards} = useContext(CardsContext)
    const {user, setUser} = useContext(UserContext)
    const navigation = useNavigate()
    const [error, setError] = useState('')
    const {id} = useParams()
    const colors = {
        'Web Design': 'orange',
        'Research': 'green',
        'Copywriting': 'purple', 
    }
    const tasksCard = cards.find((card) => card._id === id);

    const deleteTask = () => {

        deleteCard({token: user.token, id}).then((response) => {
            setError('')
            setCards(response.tasks)
            navigation(paths.MAIN)
        }).catch((error) => {
            setError(error.message)
		})
    }
    
    return (
        <PopBrowseDiv id="popBrowse">
                <PopBrowseContainer>
                <PopBrowseBlock>
                    <PopBrowseContent>
                        <PopBrowseTopBlock>
                            <PopBrowseTtl>{tasksCard.title}</PopBrowseTtl>
                            <CategoriesTheme $topicColor={`${colors[tasksCard.topic]}`}>
                                <p>{tasksCard.topic}</p>
                            </CategoriesTheme>
                        </PopBrowseTopBlock>
                        <PopBrowseStatus>
                            <StatusP>Статус</StatusP>
                            <StatusThemes>
                                <StatusTheme>
                                    <p>Без статуса</p>
                                </StatusTheme>
                                <StatusTheme>
                                    <p>Нужно сделать</p>
                                </StatusTheme>
                                <StatusTheme>
                                    <p>В работе</p>
                                </StatusTheme>
                                <StatusTheme>
                                    <p>Тестирование</p>
                                </StatusTheme>
                                <StatusTheme>
                                    <p>Готово</p>
                                </StatusTheme>
                            </StatusThemes>
                        </PopBrowseStatus>
                        <PopBrowseWrap>
                            <PopBrowseForm className="form-browse" id="formBrowseCard" action="#">									
                                <FormBrowseBlock>
                                    <SubttlBrowseLabel htmlFor="textArea01">Описание задачи</SubttlBrowseLabel>
                                    <FormBrowseArea name="text" id="textArea01"  readOnly placeholder="Введите описание задачи..."></FormBrowseArea>
                                </FormBrowseBlock>
                            </PopBrowseForm>
                            <Calendar/>
                        </PopBrowseWrap>
                        <ThemeDownCategories>
                            <CategoriesPsubttl>Категория</CategoriesPsubttl>
                            <CategoriesTheme>
                                <p className="_orange">Web Design</p>
                            </CategoriesTheme>
                        </ThemeDownCategories>
                        <PopBrowseBtnBrowse>
                            <BtnGroup>
                                <BtnBrowseEditBtnBor>Редактировать задачу</BtnBrowseEditBtnBor>
                                <BtnBrowseEditBtnBor onClick={deleteTask}>Удалить задачу</BtnBrowseEditBtnBor>
                            </BtnGroup>
                            <BtnBrowse><BtnLink to={paths.MAIN}>Закрыть</BtnLink></BtnBrowse>
                        </PopBrowseBtnBrowse>
                        <PopBrowseBtnEdit>
                            <BtnGroup>
                                <BtnBrowse><BtnLink>Сохранить4</BtnLink></BtnBrowse>
                                <BtnBrowseEditBtnBor>Отменить4</BtnBrowseEditBtnBor>
                                <BtnBrowseEditBtnBor onClick={deleteTask}>Удалить задачу4</BtnBrowseEditBtnBor>
                            </BtnGroup>
                            <BtnBrowse><BtnLink to={paths.MAIN}>Закрыть4</BtnLink></BtnBrowse>
                        </PopBrowseBtnEdit> 
                        <PopBrowseError>{error && error}</PopBrowseError>            
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseContainer>
    </PopBrowseDiv>
    )
}