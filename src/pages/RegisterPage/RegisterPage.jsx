import {
    ContainerSign,
    Modal,
    ModalBlock, ModalBtn, ModalFormGroup,
    ModalFormLogin,
    ModalInput,
    ModalTtl
} from "./registerPage.styled.js";
import {Wrapper} from "../../global.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../routesPaths.js";
import { register } from "../../api/auth.js";
import { useState } from "react";

export const RegisterPage = () => {

    const navigate = useNavigate()

    const [nameInput, setNameInput] = useState()
    const [loginInput, setLoginInput] = useState()
    const [passInput, setPassInput] = useState()

    const registerHandler = (e) => {

        e.preventDefault()

        register({login: nameInput, name: loginInput, password: passInput}).then((res) => {
            console.log(res);
            navigate(paths.LOGIN)
        })
    }

    return (
        <Wrapper>
            <ContainerSign>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Регистрация</h2>
                        </ModalTtl>
                        <ModalFormLogin id="formLogUp" action="#">
                            <ModalInput onChange={(e) => setNameInput(e.target.value)} value={nameInput} className="first-name" type="text" name="first-name" id="first-name" placeholder="Имя"/>
                            <ModalInput onChange={(e) => setLoginInput(e.target.value)} value={loginInput} className="login" type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
                            <ModalInput onChange={(e) => setPassInput(e.target.value)} value={passInput} className="password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
                            <ModalBtn type="button" id="SignUpEnter"><a onClick={registerHandler}>Зарегистрироваться</a></ModalBtn>
                            <ModalFormGroup>
                                <p>Уже есть аккаунт?</p>
                                <Link to={paths.LOGIN}> Войдите здесь</Link>
                            </ModalFormGroup>
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSign>
        </Wrapper>
    )
}