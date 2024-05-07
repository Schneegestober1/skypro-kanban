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
import { Link } from "react-router-dom";
import { paths } from "../../routesPaths.js";

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
                            <ModalBtn id="btnEnter"><Link to={paths.REGISTER}>Войти</Link>
                            </ModalBtn>
                            <ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link>Регистрируйтесь здесь</Link>
                            </ModalFormGroup>
                        </ModalFormLoginR>
                    </ModalBlock>
                </Modal>
            </ContainerSign>
        </Wrapper>
    )
}