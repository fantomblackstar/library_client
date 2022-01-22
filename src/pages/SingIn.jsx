import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SignIn.css';
import avatar_icon from '../image/user.png';
import eye_icon from '../image/eye-black.png';

function SignIn ( props ) {
    const [emailInput,setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const navigate = useNavigate();

    function onChangePasswordInput (event) {
        let value = event.target.value.replace(/\W/g,'');
        setPasswordInput(value);
    }

    function onChangeLoginInput (event) {
        let value = event.target.value.replace(/[^a-zA-Z0-9@.]/g,'');
        setEmailInput(value);
    }

    function onSubmit(event){
        event.preventDefault();
        let result = sendRequest();
        if(result){
            props.onLogIn();
            navigate("/");
        }
        else {
            let errorBlock = document.querySelector('.admin-error-message');
            errorBlock.classList.remove('hide');
            errorBlock.textContent =  `Invalid password`;
            setTimeout(() => {
                document.querySelector('.admin-error-message').classList.add('hide');
            },3*1000);
        }
    }

    async function sendRequest () {
        // console.log(emailInput, passwordInput);
        return true;
    }

    return (
        <div className="page authorisation">
            <form className="sign-in" onSubmit={onSubmit}>
                <div className="imgcontainer">
                    <img src={avatar_icon} alt="avatar" className="avatar" />
                </div>
                <label className="sign-in__label"><b>Логін</b></label>
                <input type="text" className='input-email' name="login" placeholder="Enter login" onChange={onChangeLoginInput} value={emailInput}/>
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


export default SignIn;