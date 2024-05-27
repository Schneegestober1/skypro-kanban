import { useContext, useState } from "react"
import { addNewCard } from "../../../api/cardsApi"
import { Link, useNavigate } from "react-router-dom"
import { paths } from "../../../routesPaths"
import { UserContext } from "../../../context/userContext"
import { CardsContext } from "../../../context/cardsContext"
import { ErrorPopNewCard } from "../../../pages/RegisterPage/registerPage.styled"
import { DP, RadioInput, WrapperRadio } from "./popNewCard.styled"

export const PopNewCard= () => {
    const {user} = useContext(UserContext)
    const {setCards} = useContext(CardsContext)
    const navigate = useNavigate()

    const [topic, setTopic] = useState('')
    const [date, setDate] = useState(new Date())
    const [error, setError] = useState('')
    const [inputValue, setInputValue] = useState({
        title: '',
        status: 'Без статуса',
        description: ''
    })

    const onChangeInput = (e) => {
        const {value, name} = e.target
        setInputValue({...inputValue, [name]: value})
    }

	const onAddNewCard = () => {
        setError('')

        if(!inputValue.description) {
            return setError('Введите описание задачи')
        }

        const title = inputValue.title || 'Новая задача'
     
		const newTask = {
			...inputValue, topic, title, date
		}

		addNewCard({token: user.token, newTask: newTask})
		.then((response) => {
			setCards(response.tasks)
            navigate(paths.MAIN)
		}).catch((error) => {
            setError(error.message)
		})
	}

    const getDateFormat = (date) => {
        const formatDate = date.toLocaleDateString('ru-RU')
        return <p style={{ marginTop: '10px'}}>Срок исполнения:<br/>{formatDate}</p>
    }

    // const colors = {
    //     'Web Design': 'orange',
    //     'Research': 'green',
    //     'Copywriting': 'purple', 
    // }

    console.log(topic);
    
    return (
        <div className="pop-new-card" id="popNewCard">
        <div className="pop-new-card__container">
            <div className="pop-new-card__block">
                <div className="pop-new-card__content">
                    <h3 className="pop-new-card__ttl">Создание задачи</h3>
                    <Link to={paths.MAIN} className="pop-new-card__close">&#10006;</Link>
                    <div className="pop-new-card__wrap">
                        <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                            <div className="form-new__block">
                                <label htmlFor="formTitle" className="subttl">Название задачи</label>
                                <input onChange={onChangeInput} className="form-new__input" type="text" name="title" id="formTitle" placeholder="Введите название задачи..." autoFocus/>
                            </div>
                            <div className="form-new__block">
                                <label htmlFor="textArea" className="subttl">Описание задачи</label>
                                <textarea onChange={onChangeInput} className="form-new__area" name="description" id="textArea"  placeholder="Введите описание задачи..."></textarea>
                            </div>
                        </form>
                        <div className="pop-new-card__calendar calendar">
                            <p className="calendar__ttl subttl">Даты</p>
                            <DP mode="single" selected={date} onSelect={setDate} footer={getDateFormat(date)}/>
                        </div>
                    </div>
                    <div className="pop-new-card__categories categories">
                        <p className="categories__p subttl">Категория</p>
                        <div className="categories__themes">
                            <WrapperRadio $isActive={topic === 'Web Design'} className="categories__theme _orange">
                                <label htmlFor="radio1">Web Design</label>
                                <RadioInput onChange={(e) => setTopic(e.target.value)} id="radio1" type="radio" name="keks" value={'Web Design'}/> 
                            </WrapperRadio>
                            <WrapperRadio $isActive={topic === 'Research'} className="categories__theme _green">
                                <label htmlFor="radio2">Research</label>
                                <RadioInput onChange={(e) => setTopic(e.target.value)} className="_green" id="radio2" type="radio" name="keks" value={'Research'}/>
                            </WrapperRadio>
                            <WrapperRadio $isActive={topic === 'Copywriting'} className="categories__theme _purple">
                                <label htmlFor="radio3">Copywriting</label>
                                <RadioInput onChange={(e) => setTopic(e.target.value)} className="_purple" id="radio3" type="radio" name="keks" value={'Copywriting'}/>
                            </WrapperRadio>
                        </div>
                    </div>
                    <ErrorPopNewCard>{error && error}</ErrorPopNewCard>
                    {/* перенести из RP */}
                    <button onClick={onAddNewCard} className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
                </div>
            </div>
        </div>
        </div>
    )
}