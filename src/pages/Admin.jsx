import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SignIn.css';
import avatar_icon from '../image/user.png';
import eye_icon from '../image/eye-black.png';
import { postData } from "../postData";

function Admin(props) {
    const [inputs, setInputs] = useState({
        'oldPass': '',
        'newPass': '',
        'newRePass': '',
        'changeLogin': false,
        'newLogin': ''
    })

    const navigate = useNavigate();
    const divNewPass = useRef(null);
    const divNewRePass = useRef(null);
    const divOldPass = useRef(null);
    const divError = useRef(null);
    const divLogin = useRef(null);

    async function onSubmit(event) {
        event.preventDefault();
        const login = props.adminData.current.login;
        const { oldPass, newPass, newRePass, changeLogin, newLogin } = inputs;

        if (oldPass.length < 6) {
            showErrorMessage('Старий пароль повинен бути не менше 6 символів');
            return;
        }

        const data = { 'login': login, 'password': oldPass };
        const validPass = await postData(data, 'login')
            .then(response => response.json())
            .then(data => data);

        if (!validPass.isLogin) showErrorMessage("Старий пароль не вірний!");
        else if (newRePass !== newPass) showErrorMessage('Паролі не співпадають');
        else if (newPass.length < 6) showErrorMessage('Новий пароль повинен бути не менше 6 символів')
        else {
            if (changeLogin && newLogin.length < 6) {
                showErrorMessage('Логін повинен бути не менше 6 символів');
                return;
            }

            let result = await sendEditRequest();
            if (result) {
                changeLogin ? props.onLogIn(login) : props.onLogIn(newLogin);
                navigate("/");
            }
            else {
                showErrorMessage('Помилка з сервером, спробуйте пізніше');
            }
        }
    }

    function showErrorMessage(text) {
        divError.current.classList.remove('hide');
        divError.current.textContent = `${text}`;
        setTimeout(() => {
            divError.current.classList.add('hide');
        }, 3 * 1000);
    }

    async function sendEditRequest() {
        const login = props.adminData.current.login;
        const data = { login, 'password': inputs.newPass };
        if (inputs.changeLogin) data['newLogin'] = inputs.newLogin;
        // let res = await postData(data,'edit-admin');
        return true;
    }

    function showInputValue(input) {
        input.current.type = 'text';
        setTimeout(() => { if (input.current) input.current.type = 'password' }, 2000)
    }

    function toggleLogin() {
        onChangeInputs('changeLogin', !inputs.changeLogin);

        if (divLogin.current.classList.contains('hide')) divLogin.current.classList.remove('hide');
        else divLogin.current.classList.add('hide');
    }

    function onChangeInputs(key, value) {
        setInputs(prevState => ({ ...prevState, [`${key}`]: value }));
    }

    return (
        <div className="page authorisation">
            <form className="sign-in" onSubmit={onSubmit}>
                <div className="imgcontainer">
                    <img src={avatar_icon} alt="avatar" className="avatar" />
                </div>
                <label className="sign-in__label"><b>Старий пароль:</b></label>
                <div className="sign-in__group">
                    <input type="password" className='input-password' name="psw" ref={divOldPass} onChange={(event) => onChangeInputs('oldPass', event.target.value.replace(/\W/g, ''))} value={inputs.oldPass} />
                    <img src={eye_icon} alt='show_pass' className="show-pass-img" onClick={() => showInputValue(divOldPass)} />
                </div>
                <label className="sign-in__label"><b>Новий пароль:</b></label>
                <div className="sign-in__group">
                    <input type="password" className='input-password' name="psw" ref={divNewPass} onChange={(event) => onChangeInputs('newPass', event.target.value.replace(/\W/g, ''))} value={inputs.newPass} />
                    <img src={eye_icon} alt='show_pass' className="show-pass-img" onClick={() => showInputValue(divNewPass)} />
                </div>
                <label className="sign-in__label"><b>Повторіть новий пароль:</b></label>
                <div className="sign-in__group">
                    <input type="password" className='input-password' name="psw" ref={divNewRePass} onChange={(event) => onChangeInputs('newRePass', event.target.value.replace(/\W/g, ''))} value={inputs.newRePass} />
                    <img src={eye_icon} alt='show_pass' className="show-pass-img" onClick={() => showInputValue(divNewRePass)} />
                </div>
                <div className="sign-in__group">
                    <label className="sign-in__label" htmlFor="change-login">
                        <input className="sign-in__input_checkbox" id="change-login" type="checkbox" onChange={toggleLogin} />
                        <b>Новий логін</b>
                    </label>
                    <input type="text" className='input-login hide' name="login" ref={divLogin} onChange={(event) => onChangeInputs('newLogin', event.target.value.replace(/[^a-z0-9@.]/g, ''))} value={inputs.newLogin} />
                </div>
                <button type="submit">Зберегти зміни</button>
                <p className='admin-error-message hide' ref={divError}></p>
            </form>
        </div>
    )
}

export default Admin;