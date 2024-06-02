import { paths } from "../../../routesPaths.js"
import { BtnBrowse, BtnBrowseEditBtnBor, BtnGroup, BtnLink, CategoriesPsubttl, CategoriesTheme, FormBrowseArea, FormBrowseBlock, PopBrowseBlock, PopBrowseBtnBrowse, PopBrowseBtnEdit, PopBrowseContainer, PopBrowseContent, PopBrowseDiv, PopBrowseError, PopBrowseForm, PopBrowseRadioInput, PopBrowseStatus, PopBrowseTopBlock, PopBrowseTtl, PopBrowseWrap,  StatusP, StatusTheme, StatusThemeP, StatusThemes, SubttlBrowseLabel, ThemeDownCategories } from "./popBrowse.styled.js"
import { useNavigate, useParams } from "react-router-dom"
import { CardsContext } from "../../../context/cardsContext.jsx"
import { useContext, useState } from "react"
import { deleteCard, editCard } from "../../../api/cardsApi.js"
import { UserContext } from "../../../context/userContext.jsx"
import { BoooTin, DP } from "../PopNewCard/popNewCard.styled.js"
import { formatDate } from "date-fns"


export const PopBrowse = () => {

    const {cards, setCards} = useContext(CardsContext)
    const {user, setUser} = useContext(UserContext)
    const [date, setDate] = useState(new Date())
  
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

    const [isActive, setIsActive] = useState(false)

    const [editInputTask, setEdtitInputTask] = useState({
        title: tasksCard.title,
        topic: tasksCard.topic,
        description: tasksCard.description,
        date: tasksCard.date,
        status: tasksCard.status,
    })


    const onSaveEditTask = () => {
        const editTask = {
            title: tasksCard.title,
            topic: tasksCard.topic,
            date: date,
            description: editInputTask.description,
            status: editInputTask.status,
        }

        editCard({token: user.token, editTask: editTask, id})
        .then((response) => {
            setCards(response.tasks);
            navigation(paths.HOME);
        })
        .catch((error) => {
            setError(error.message);
        })
    }

    const getDateFormat = (date) => {
        if(isActive) {
            const formatDate = date.toLocaleDateString('ru-RU')
            return <BoooTin>Срок исполнения:<br/>{formatDate}</BoooTin>
        } else {
            const formatDate = date.toLocaleDateString('ru-RU')
            return <BoooTin>Срок исполнения:<br/>{formatDate}</BoooTin>
        }
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
                            {isActive ? <StatusThemes>
                                <StatusTheme $isActiv={editInputTask.status === 'Без статуса'}>
                                    <StatusThemeP htmlFor="status1">Без статуса</StatusThemeP>
                                    <PopBrowseRadioInput onChange={(e) => {setEdtitInputTask({...editInputTask, status: e.target.value})}} type="radio" name="status" id="status1" value={'Без статуса'}/>
                                </StatusTheme>
                                <StatusTheme $isActiv={editInputTask.status === 'Нужно сделать'}>
                                    <StatusThemeP htmlFor="status1">Нужно сделать</StatusThemeP>
                                    <PopBrowseRadioInput onChange={(e) => {setEdtitInputTask({...editInputTask, status: e.target.value})}} type="radio" name="status" id="status2" value={'Нужно сделать'}/>
                                </StatusTheme>
                                <StatusTheme $isActiv={editInputTask.status === 'В работе'}>
                                    <StatusThemeP htmlFor="status1">В работе</StatusThemeP>
                                    <PopBrowseRadioInput onChange={(e) => {setEdtitInputTask({...editInputTask, status: e.target.value})}} type="radio" name="status" id="status3" value={'В работе'}/>
                                </StatusTheme>
                                <StatusTheme $isActiv={editInputTask.status === 'Тестирование'}>
                                    <StatusThemeP htmlFor="status1">Тестирование</StatusThemeP>
                                    <PopBrowseRadioInput onChange={(e) => {setEdtitInputTask({...editInputTask, status: e.target.value})}} type="radio" name="status" id="status4" value={'Тестирование'}/>
                                </StatusTheme>
                                <StatusTheme $isActiv={editInputTask.status === 'Готово'}>
                                    <StatusThemeP htmlFor="status1">Готово</StatusThemeP>
                                    <PopBrowseRadioInput onChange={(e) => {setEdtitInputTask({...editInputTask, status: e.target.value})}} type="radio" name="status" id="status4" value={'Готово'}/>
                                </StatusTheme>
                            </StatusThemes> :                             
                            <StatusThemes>
                                <StatusTheme>
                                    <StatusThemeP>{tasksCard.status}</StatusThemeP>
                                </StatusTheme>
                            </StatusThemes>}
                        </PopBrowseStatus>
                        <PopBrowseWrap>
                            <PopBrowseForm className="form-browse" id="formBrowseCard" action="#">									
                                <FormBrowseBlock>
                                    <SubttlBrowseLabel htmlFor="textArea01">Описание задачи</SubttlBrowseLabel>
                                    {isActive ? 
                                    <FormBrowseArea onChange={(e) => {setEdtitInputTask({...editInputTask, description: e.target.value})}} value={editInputTask.description} name="text" id="textArea01" placeholder="Введите описание задачи..."></FormBrowseArea> :
                                    <FormBrowseArea name="text" id="textArea01"  readOnly placeholder="Введите описание задачи44444..."></FormBrowseArea>} 
                                </FormBrowseBlock>
                            </PopBrowseForm>
                            {isActive ? 
                            <DP mode="single" selected={date} onSelect={setDate} footer={getDateFormat(date)}/> :
                            <DP selected={date}  footer={getDateFormat(date)}/>}
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