import {
    ContainerSignUp,
    Modal,
    ModalBlock, ModalBtn, ModalBtnSignUpEnt, ModalFormGroup,
    ModalFormLogin,
    ModalInput,
    ModalTtl
} from "./registerPage.styled.js";
import {Wrapper} from "../../global.styled.js";

export const RegisterPage = () => {
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
                            <ModalBtn id="SignUpEnter"><a
                                href="#">Зарегистрироваться</a></ModalBtn>
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