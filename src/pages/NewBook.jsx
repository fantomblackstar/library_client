import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Book.css';
import EditBookIcon from "../components/EditBookIcon";
import EditBookInfo from "../components/EditBookInfo";
import EditBookAbout from "../components/EditBookAbout";
import { postData } from "../postData";

export default function NewBook (props) {
    const [info, setInfo] = useState({
        'name': props.name || '',
        'avtor': props.avtor || '',
        'language': props.language || 'Українська',
        'cover': props.cover || 'Тверда',
        'page': props.page || '',
        'size': props.size || '',
        'publish': props.publish || '',
        'translate': props.translate || '',
        'section': props.section || '',
        'about': props.about || '',
        'img': props.img || '',
        'ignoreimg': false
    });

    const navigate = useNavigate();

    async function onSubmitForm (event) {
        event.preventDefault();
        let validateForm = true;
        for (let key in info) {
            if(key === 'img' && info.ignoreimg) {
                info.img = '';
                continue;
            }
            if (info[`${key}`] === '') {
                console.log(key);
                props.showModalWindow('Заповніть усі поля');
                validateForm = false;
                break;
            }
        }

        if (validateForm) {
            let res = await postData(info, 'new-book')
            .then(response => response.json())
            .then(data => data);

            if (res) {
                props.showModalWindow('Книгу успішно додано');
                navigate('/');
            }
            else {
                props.showModalWindow('Помилка з сервером, спробуйте пізніше');
            }
        }
    }

    function onChangeInfo (key, value) {
        setInfo(prevValue => ({ ...prevValue, [`${key}`]: value }));
    }

    return (
        <div className="page">
            <div className="container">
                <p className="page__title">Добавлення нової книги</p>
                <form className="new-book" onSubmit={onSubmitForm}>
                    <div className="row">
                        <EditBookIcon onChangeInfo={onChangeInfo} bookInfo={info} />
                        <EditBookInfo onChangeInfo={onChangeInfo} bookInfo={info} />
                    </div>
                    <EditBookAbout onChangeInfo={onChangeInfo} bookInfo={info} />
                    <button className="new-book__button button-submit">Добавити книгу</button>
                </form>
            </div>
        </div>
    )
}