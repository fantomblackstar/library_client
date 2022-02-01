import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SignIn.css';
import avatar_icon from '../image/user.png';
import eye_icon from '../image/eye-black.png';
import { postData } from "../postData";

function SignIn(props) {
    const [loginInput, setloginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const navigate = useNavigate();
    const divPass = useRef(null);
    const divError = useRef(null);

    function onChangePasswordInput(event) {
        let value = event.target.value.replace(/\W/g, '');
        setPasswordInput(value);
    }

    function onChangeLoginInput(event) {
        let value = event.target.value.replace(/[^a-zA-Z0-9@.]/g, '');
        setloginInput(value);
    }

    async function onSubmit(event) {
        event.preventDefault();
        if (loginInput.length < 6 || passwordInput.length < 6) showErrorMessage('Логін і пароль повинні містити не менше 6 символів');
        else {
            let result = await sendRequest();
            if (result.isLogin) {
                props.onLogIn(loginInput, passwordInput);
                navigate("/");
            }
            else {
                showErrorMessage(result.message);
            }
        }
    }

    async function sendRequest() {
        const data = { login: loginInput, password: passwordInput };
        return await postData(data, 'login')
        .then(response => response.json())
        .then(data => data);
    }


    function showErrorMessage(text) {
        divError.current.classList.remove('hide');
        divError.current.textContent = `${text}`;
        setTimeout(() => {
            divError.current.classList.add('hide');
        }, 3 * 1000);
    }

    function showPassword(event) {
        divPass.current.type = 'text';
        setTimeout(() => divPass.current.type = 'password', 2 * 1000)
    }

    return (
        <div className="page authorisation">
            <form className="sign-in" onSubmit={onSubmit}>
                <div className="imgcontainer">
                    <img src={avatar_icon} alt="avatar" className="avatar" />
                </div>
                <label className="sign-in__label"><b>Логін</b></label>
                <input type="text" className='input-email' name="login" onChange={onChangeLoginInput} value={loginInput} />
                <label className="sign-in__label"><b>Пароль</b></label>
                <div className="sign-in__group">
                    <input type="password" className='input-password' name="psw" ref={divPass} onChange={onChangePasswordInput} value={passwordInput} />
                    <img src={eye_icon} alt='show_pass' className="show-pass-img" onClick={showPassword} />
                </div>
                <button type="submit">Ввійти</button>
                <p className='admin-error-message hide' ref={divError}></p>
            </form>
        </div>
    )
}

export default SignIn;