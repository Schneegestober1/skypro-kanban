import { useState } from "react"
import { Container } from "../../global.styled.js";
import * as S from './header.styled.js'

export const Header = ({addCard}) => {
	const [isOpenedModalUserWindow, setIsOpenedModalUserWindow] = useState(false);

	function handlerOpenModalWindow(event) {
		event.preventDefault()
		setIsOpenedModalUserWindow(perv => !perv)
	}

    return (
        <S.Header>
			<Container>
				<S.HeaderBlock>
					<S.HeaderLogo>
						<a href="" target="_self"><img src="/img/logo.png" alt="logo"/></a>
					</S.HeaderLogo>
					<S.HeaderLogo>
						<a href="" target="_self"><img src="/img/logo_dark.png" alt="logo"/></a>
					</S.HeaderLogo>
					<S.HeaderNav>
						<button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard" onClick={addCard}>Создать новую задачу</a></button>
						<a href="#user-set-target" className="header__user _hover02" onClick={(event) => handlerOpenModalWindow(event)}>Ivan Ivanov</a>
							{isOpenedModalUserWindow && (
								<div className="header__pop-user-set pop-user-set" id="user-set-target">
									<p className="pop-user-set__name">Ivan Ivanov</p>
									<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
									<div className="pop-user-set__theme">
										<p>Темная тема</p>
										<input type="checkbox" className="checkbox" name="checkbox"/>
									</div>
									<button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
								</div>
							)}
					</S.HeaderNav>					
				</S.HeaderBlock>
			</Container>			
		</S.Header>
    )
}