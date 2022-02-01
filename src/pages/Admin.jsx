import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SignIn.css';
import avatar_icon from '../image/user.png';
import eye_icon from '../image/eye-black.png';
import { postData } from "../postData";

function Admin(props) {
    const [newRePassword, setNewRePassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newLogin, setNewLogin] = useState('');
    const navigate = useNavigate();
    const divNewPass = useRef(null);
    const divNewRePass = useRef(null);
    const divOldPass = useRef(null);
    const divError = useRef(null);

    async function onSubmit(event) {
        event.preventDefault();
        if(oldPassword !== props.adminData.current.password) showErrorMessage("Старий пароль не вірний!")
        else if(newLogin !== '' && newLogin.length < 6) showErrorMessage('Логін повинен бути не менше 6 символів')
        else if (newRePassword !== newPassword) showErrorMessage('Паролі не співпадають');
        else if (newPassword.length < 6) showErrorMessage('Пароль повинен бути не менше 6 символів')
        else {
            let result = await sendRequest();
            if (result) {
                props.onLogIn(newLogin || props.adminData.current.login, newPassword || props.adminData.current.password );
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

    async function sendRequest() {
        // const data = JSON.stringify({ login: newLogin || props.adminData.current.login, password: newPassword || props.adminData.current.password});
        //let res = await postData('/new-password')
        return true;
    }

    function showNewPassword(event) {
        divNewPass.current.type = 'text';
        setTimeout(() => divNewPass.current.type = 'password', 2 * 1000)
    }

    function showNewRePassword(event) {
        divNewRePass.current.type = 'text';
        setTimeout(() => divNewRePass.current.type = 'password', 2 * 1000)
    }

    function showOldPassword(event) {
        divOldPass.current.type = 'text';
        setTimeout(() => divOldPass.current.type = 'password', 2 * 1000)
    }

    return (
        <div className="page authorisation">
            <form className="sign-in" onSubmit={onSubmit}>
                <div className="imgcontainer">
                    <img src={avatar_icon} alt="avatar" className="avatar" />
                </div>
                <label className="sign-in__label"><b>Новий логін:</b></label>
                <input type="text" className='input-email' name="login" onChange={(event) => setNewLogin(event.target.value.replace(/[^a-z0-9@.]/g, ''))} value={newLogin} />
                <label className="sign-in__label"><b>Старий пароль:</b></label>
                <div className="sign-in__group">
                    <input type="password" className='input-password' name="psw" ref={divOldPass} onChange={(event) => setOldPassword(event.target.value.replace(/\W/g, ''))} value={oldPassword} />
                    <img src={eye_icon} alt='show_pass' className="show-pass-img" onClick={showOldPassword} />
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