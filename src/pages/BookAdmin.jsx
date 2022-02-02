import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditBookInfo from "../components/EditBookInfo";
import EditBookAbout from "../components/EditBookAbout";
import EditBookIcon from "../components/EditBookIcon";
import { postData } from "../postData";
import Preloader from "../components/Preloader";
import '../styles/Book.css';

function BookAdmin(props) {
    const bookKey = useLocation().pathname.split('/')[2];
    const bookObj = props.booksObj.filter((elem) => elem.key === bookKey)[0];
    const navigate = useNavigate();
    const [canDeleteBook, setCanDeleteBook] = useState(false);
    const [bookInfo, setBookInfo] = useState({
        'name': bookObj.name,
        'avtor': bookObj.avtor,
        'language': bookObj.language,
        'cover': bookObj.cover,
        'page': bookObj.page,
        'size': bookObj.size,
        'publish': bookObj.publish,
        'translate': bookObj.translate,
        'section': bookObj.section,
        'about': bookObj.about,
        'img': bookObj.img,
        'key': bookObj.key,
    });

    function onChangeInfo(key, value) {
        setBookInfo(prevValue => ({ ...prevValue, [`${key}`]: value }));
    }

    function deleteBook () {
        if(!canDeleteBook){
            props.showModalWindow('Після видалення книги всі дані про неї буде стерто, якщо ви справді бажаєте видалити книгу, нажміть кнопку "ОК" після чого ще раз нажміть на кнопку "Видалити книгу"');
            setCanDeleteBook(true);
        } else {
            props.deleteBook(bookInfo.key, bookInfo.img);
            navigate('/');
        }
    }

    async function onSubmitForm(event) {
        event.preventDefault();
        let validateForm = true;
        if (!bookInfo.img) {
            delete bookInfo.img;
        }
        for (let key in bookInfo) {
            if (bookInfo[`${key}`] === '') {
                props.showModalWindow('Заповніть усі поля');
                validateForm = false;
                break;
            }
        }

        if (validateForm) {
            let res = await postData(bookInfo, 'edit-book')
                .then(response => response.json())
                .then(data => data);

            if (res) {
                props.editBook(bookInfo);
                navigate('/');
            }
            else {
                props.showModalWindow('Помилка з сервером, спробуйте пізніше');
            }
        }
    }

    return props.booksObj ? (
        <div className="page">
            <div className="container">
                <form className="book-edit" onSubmit={onSubmitForm}>
                    <div className="row">
                        <EditBookIcon bookInfo={bookInfo} onChangeInfo={onChangeInfo} />
                        <EditBookInfo onChangeInfo={onChangeInfo} bookInfo={bookInfo} />
                    </div>
                    <EditBookAbout onChangeInfo={onChangeInfo} bookInfo={bookInfo} />
                    <div className="row">
                        <button type="submit" className="button-submit">Зберегти зміни</button>
                        <button type="button" className="button-delete" onClick={deleteBook}>Видалити книгу</button>
                    </div>
                </form>
            </div>
        </div>) :
        (
            <div className="page">
                <Preloader />
            </div>
        )
}

export default BookAdmin;