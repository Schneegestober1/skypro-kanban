import { Link } from "react-router-dom"
import { PopExit, PopExitBlock, PopExitContainer, PopExitExitNo, PopExitExitYes, PopExitFormGroup, PopExitTtl, PopExitTtlH2 } from "./popUser.styled"
import { paths } from "../../../routesPaths"

export const PopUser= () => {
    return (
        <PopExit id="popExit"> 
				<PopExitContainer>
					<PopExitBlock>
						<PopExitTtl>
							<PopExitTtlH2>Выйти из аккаунта?</PopExitTtlH2>
						</PopExitTtl>
						<form className="pop-exit__form" id="formExit" action="#">
							<PopExitFormGroup>
								<PopExitExitYes id="exitYes"><Link to={paths.LOGIN}>Да, выйти</Link></PopExitExitYes>
								<PopExitExitNo id="exitNo"><Link to={paths.MAIN}>Нет, остаться</Link></PopExitExitNo>
							</PopExitFormGroup>
						</form>
					</PopExitBlock>
				</PopExitContainer>
        </PopExit>
    )
}