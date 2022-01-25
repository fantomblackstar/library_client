import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/NewBook.css';
import EditBookIcon from "../components/EditBookIcon";
import EditBookInfo from "../components/EditBookInfo";
import EditBookAbout from "../components/EditBookAbout";

export default function NewBook(props) {
    const [info, setInfo] = useState({
        'name': props.name || '',
        'actor': props.actor || '',
        'language': props.language || '',
        'orgnName': props.orgnName || '',
        'orgnLanguage': props.orgnLanguage || '',
        'cover': props.cover || '',
        'page': props.page || '',
        'size': props.size || '',
        'publish': props.publish || '',
        'age': props.age || '',
        'translate': props.translate || '',
        'section': props.section || '',
        'about': props.about || '',
        'img': props.img || ''
    });

    const navigate = useNavigate();

    function onSubmitForm(event) {
        event.preventDefault();
        let validateForm = true;
        for (let key in info) {
            if (info[`${key}`] === '') {
                console.log(key);
                props.showModalWindow('Заповніть усі поля');
                validateForm = false;
                break;
            }
        }
        if (validateForm) {
            console.log(info);
            // send data on server
            if (true) {
                props.showModalWindow('Книгу успішно додано');
                navigate('/');
            }
            else {
                props.showModalWindow('Помилка з сервером, спробуйте пізніше');
            }
        }

    }

    function onChangeInfo(key, value) {
        setInfo(prevValue => ({ ...prevValue, [`${key}`]: value }));
    }

    return (
        <div className="page">
            <div className="container">
                <p className="page__title">Добавлення нової книги</p>
                <form className="new-book" onSubmit={onSubmitForm}>
                    <div className="row">
                        <EditBookIcon onChangeInfo={onChangeInfo} info={info} />
                        <EditBookInfo onChangeInfo={onChangeInfo} info={info} />
                    </div>
                    <EditBookAbout onChangeInfo={onChangeInfo} info={info} />
                    <button className="new-book__button">Добавити книгу</button>
                </form>
            </div>
        </div>
    )
}