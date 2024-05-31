import { useState } from "react"
import { Container } from "../../global.styled.js";
import * as S from './header.styled.js'
import { Link } from "react-router-dom";
import { paths } from "../../routesPaths.js";


export const Header = ({globalTheme, setGlobalTheme, user}) => {
	const [isOpenedModalUserWindow, setIsOpenedModalUserWindow] = useState(false)



	function handlerOpenModalWindow(event) {
		event.preventDefault()
		setIsOpenedModalUserWindow(perv => !perv)
	}


    return (
        <S.Header>
			<Container>
				<S.HeaderBlock>
					<S.HeaderLogoLight>
						<a href="" target="_self"><img src="/img/logo.png" alt="logo"/></a>
					</S.HeaderLogoLight>
					<S.HeaderLogoDark>
						<a href="" target="_self"><img src="/img/logo_dark.png" alt="logo"/></a>
					</S.HeaderLogoDark>
					<S.HeaderNav>
						<S.HeaderBtnMainNew id="btnMainNew"><Link to={paths.NEW_CARD}>Создать новую задачу</Link></S.HeaderBtnMainNew>
						<S.HeaderUser href="#user-set-target" onClick={(event) => handlerOpenModalWindow(event)}>{user.name}</S.HeaderUser>
							{isOpenedModalUserWindow && (
								<S.HeaderPopUserSet id="user-set-target">
									<S.PopUserSetName>{user.name}</S.PopUserSetName>
									<S.PopUserSetEmail>{user.login}</S.PopUserSetEmail>
									<S.PopUserSetTheme>
										<p>Темная тема</p>
										<input type="checkbox" className="checkbox" name="checkbox" onChange={()=> setGlobalTheme(!globalTheme)}/>
									</S.PopUserSetTheme>
									<button type="button" className="_hover03"><Link to={paths.EXIT}>Выйти</Link></button>
								</S.HeaderPopUserSet>
							)}
					</S.HeaderNav>					
				</S.HeaderBlock>
			</Container>			
		</S.Header>
    )
}