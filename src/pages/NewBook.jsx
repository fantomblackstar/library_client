import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/NewBook.css';
import EditBookIcon from "../components/EditBookIcon";
import EditBookInfo from "../components/EditBookInfo";
import EditBookAbout from "../components/EditBookAbout";
import { postData } from "../postData";

export default function NewBook(props) {
    const [info, setInfo] = useState({
        'name': props.name || 'Як стати кодером',
        'actor': props.actor || 'Василь Варивода',
        'language': props.language || 'ua',
        'orgnName': props.orgnName || 'dsa',
        'orgnLanguage': props.orgnLanguage || 'asd',
        'cover': props.cover || 'das',
        'page': props.page || '12',
        'size': props.size || '13',
        'publish': props.publish || 'asd',
        'age': props.age || 'asda',
        'translate': props.translate || 'das',
        'section': props.section || 'ads',
        'about': props.about || 'das',
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
            // send data on server
            console.log(info);
            postData(info, 'new-book')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });

            if (true) {
                props.showModalWindow('Книгу успішно додано');
                navigate('/');
            }
            else {
                props.showModalWindow('Помилка з сервером, спробуйте пізніше');
            }
        }
        console.log('111');
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