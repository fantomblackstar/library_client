import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SignIn.css';
import avatar_icon from '../image/user.png';
import eye_icon from '../image/eye-black.png';
import { postData } from "../postData";

function Admin(props) {
    const [newRePassword, setNewRePassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const divNewPass = useRef(null);
    const divNewRePass = useRef(null);
    const divError = useRef(null);

    async function onSubmit(event) {
        event.preventDefault();
        if (newRePassword !== newPassword) showErrorMessage('Паролі не співпадають');
        else if (newPassword.length < 6) showErrorMessage('Пароль повинен бути не менше 6 символів')
        else {
            let result = await sendRequest();
            if (result) {
                props.onLogIn(props.adminLogin.current);
            }
            else {
                showErrorMessage('Помилка з сервером, спробуйте пізніше');
            }
            navigate("/");
        }
    }

    function showErrorMessage(text) {
        divError.current.classList.remove('hide');
        divError.current.textContent = `${text}`;
        setTimeout(() => {
            divError.current.classList.add('hide');
        }, 3 * 1000);
    }

    async function sendRequest() {
        const data = JSON.stringify({ login: props.adminLogin.current, password: newPassword });
        //let res = await postData('/new-password')
        return false;
    }

    function showNewPassword(event) {
        divNewPass.current.type = 'text';
        setTimeout(() => divNewPass.current.type = 'password', 2 * 1000)
    }

    function showNewRePassword(event) {
        divNewRePass.current.type = 'text';
        setTimeout(() => divNewRePass.current.type = 'password', 2 * 1000)
    }

    return (
        <div className="page authorisation">
            <form className="sign-in" onSubmit={onSubmit}>
                <div className="imgcontainer">
                    <img src={avatar_icon} alt="avatar" className="avatar" />
                </div>
                <label className="sign-in__label"><b>Новий пароль:</b></label>
                <div className="sign-in__group">
                    <input type="password" className='input-password' name="psw" ref={divNewPass} onChange={(event) => setNewPassword(event.target.value.replace(/\W/g, ''))} value={newPassword} />
                    <img src={eye_icon} alt='show_pass' className="show-pass-img" onClick={showNewPassword} />
                </div>
                <label className="sign-in__label"><b>Повторіть новий пароль:</b></label>
                <div className="sign-in__group">
                    <input type="password" className='input-password' name="psw" ref={divNewRePass} onChange={(event) => setNewRePassword(event.target.value.replace(/\W/g, ''))} value={newRePassword} />
                    <img src={eye_icon} alt='show_pass' className="show-pass-img" onClick={showNewRePassword} />
                </div>
                <button type="submit">Ввійти</button>
                <p className='admin-error-message hide' ref={divError}>Password incorect</p>
            </form>
        </div>
    )
}

export default Admin;