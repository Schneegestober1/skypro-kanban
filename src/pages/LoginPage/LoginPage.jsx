import {Wrapper} from "../../global.styled.js";
import { ModalFormLoginR} from "./loginPage.styled.js";
import {
    ContainerSign,
    Modal,
    ModalBlock,
    ModalBtn, ModalFormGroup,
    ModalInput,
    ModalTtl
} from "../RegisterPage/registerPage.styled.js";

export const LoginPage = () => {
    return (
        <Wrapper>
            <ContainerSign>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Вход</h2>
                        </ModalTtl>
                        <ModalFormLoginR id="formLogIn" action="#">
                            <ModalInput type="text" name="login" id="formlogin"
                                   placeholder="Эл. почта"/>
                            <ModalInput type="password" name="password" id="formpassword"
                                   placeholder="Пароль"/>
                            <ModalBtn id="btnEnter"><a href="">Войти</a>
                            </ModalBtn>
                            <ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <a href="">Регистрируйтесь здесь</a>
                            </ModalFormGroup>
                        </ModalFormLoginR>
                    </ModalBlock>
                </Modal>
            </ContainerSign>
        </Wrapper>
    )
}