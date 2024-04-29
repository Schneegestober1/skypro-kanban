import { PopExit, PopExitBlock, PopExitContainer, PopExitFormGroup, PopExitTtl, PopExitTtlH2 } from "./popUser.styled"

export const PopUSer= () => {
    return (
        <PopExit id="popExit"> 
				<PopExitContainer>
					<PopExitBlock>
						<PopExitTtl>
							<PopExitTtlH2>Выйти из аккаунта?</PopExitTtlH2>
						</PopExitTtl>
						<form className="pop-exit__form" id="formExit" action="#">
							<PopExitFormGroup>
								<button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
								<button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
							</PopExitFormGroup>
						</form>
					</PopExitBlock>
				</PopExitContainer>
        </PopExit>
    )
}