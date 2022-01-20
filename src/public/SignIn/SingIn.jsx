import React, { useState } from "react";
import './SignIn.css';
import avatar_icon from '../image/user.png';
import eye_icon from '../image/eye-black.png';
import ModalWindow from "../../components/modalWindow/ModalWindow";

export default function SignIn() {
    const [emailInput,setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    function onChangePasswordInput (event) {
        let value = event.target.value.replace(/\W/g,'');
        setPasswordInput(value);
    }

    function onChangeEmailInput (event) {
        let value = event.target.value.replace(/[^a-zA-Z0-9@.]/g,'');
        setEmailInput(value);
    }

    async function sendRequest (event) {
        event.preventDefault();
        console.log(emailInput, passwordInput);
    }

    return (
        <div className="page authorisation">
            <form className="sign-in" onSubmit={sendRequest}>
                <div className="imgcontainer">
                    <img src={avatar_icon} alt="avatar" className="avatar" />
                </div>
                <label className="sign-in__label"><b>Пошта</b></label>
                <input type="text" className='input-email' name="email" placeholder="Enter email" onChange={onChangeEmailInput} value={emailInput}/>
                <label className="sign-in__label"><b>Пароль</b></label>
                <div className="sign-in__group">
                    <input type="password" className='input-password' name="psw" placeholder="Enter password" onChange={onChangePasswordInput} value={passwordInput}/>
                    <img src={eye_icon} alt='show_pass' className="show-pass-img" />
                </div>
                <button type="submit">Ввійти</button>
                <p className='admin-error-message hide'>Password incorect</p>
            </form>
        </div>
    )
}