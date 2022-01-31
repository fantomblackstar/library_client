import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookIcon from "../components/BookIcon";
import EditBookInfo from "../components/EditBookInfo";
import EditBookAbout from "../components/EditBookAbout";
import { postData } from "../postData";

function BookAdmin(props) {
    const bookKey = useLocation().pathname.split('/')[2];
    const bookObj = props.booksObj.filter((elem) => elem.key === bookKey)[0];
    const navigate = useNavigate();

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
        'ignoreimg': false
    });

    function onChangeInfo(key, value) {
        setBookInfo(prevValue => ({ ...prevValue, [`${key}`]: value }));
    }

    async function onSubmitForm(event) {
        event.preventDefault();
        let validateForm = true;
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
                props.showModalWindow('Книгу успішно редаговано');
                navigate('/');
            }
            else {
                props.showModalWindow('Помилка з сервером, спробуйте пізніше');
            }
        }
    }

    return <div className="page">
        <div className="container">
            <form className="book-edit" onSubmit={onSubmitForm}>
                <div className="row">
                    <BookIcon bookInfo={bookInfo} />
                    <EditBookInfo onChangeInfo={onChangeInfo} bookInfo={bookInfo} />
                </div>
                    <EditBookAbout onChangeInfo={onChangeInfo} bookInfo={bookInfo}/>
                <button className="button-submit">Зберегти зміни</button>
            </form>
        </div>
    </div>
}

export default BookAdmin;