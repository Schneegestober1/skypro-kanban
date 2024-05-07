import {Wrapper} from "../../global.styled.js";
import {
    ContainerSignUp,
    Modal,
    ModalBlock,
    ModalBtnSignUpEnt, ModalFormGroup,
    ModalFormLogin,
    ModalInput,
    ModalTtl
} from "./loginPage.styled.js";

export const LoginPage = () => {
    return (
        <Wrapper>
            <ContainerSignUp>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Регистрация</h2>
                        </ModalTtl>
                        <ModalFormLogin id="formLogUp" action="#">
                            <ModalInput className="first-name" type="text" name="first-name" id="first-name"
                                   placeholder="Имя"/>
                            <ModalInput className="login" type="text" name="login" id="loginReg"
                                   placeholder="Эл. почта"/>
                            <ModalInput className="password-first" type="password" name="password"
                                   id="passwordFirst" placeholder="Пароль"/>
                            <ModalBtnSignUpEnt id="SignUpEnter"><a
                                href="#">Зарегистрироваться</a></ModalBtnSignUpEnt>
                            <ModalFormGroup>
                                <p>Уже есть аккаунт?</p>
                                <a href="#">Войдите здесь</a>
                            </ModalFormGroup>
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSignUp>
        </Wrapper>
    )
}