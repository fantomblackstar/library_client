import React from "react";

function EditBookInfo (props) {
    return (
        <div className="book-info">
            <p className="book-info__title">Характеристики:</p>
            <div className="book-info__group">
                <p className="book-info__name">Назва книги:</p>
                <input className="book-info__input" value={props.bookInfo.name} onChange={(event) => props.onChangeInfo('name', event.target.value.replace(/[^a-z\u0400-\u04FF0-9.,\' ]/gi,'') )}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Автор:</p>
                <input className="book-info__input" value={props.bookInfo.avtor} onChange={(event) => props.onChangeInfo('avtor',event.target.value.replace(/[^a-z\u0400-\u04FF.,\- ]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Мова:</p>
                <input className="book-info__input" value={props.bookInfo.language} onChange={(event) => props.onChangeInfo('language', event.target.value.replace(/[^a-z\u0400-\u04FF. ]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Палітурка:</p>
                <input className="book-info__input" value={props.bookInfo.cover} onChange={(event) => props.onChangeInfo('cover', event.target.value.replace(/[^a-z\u0400-\u04FF.\']/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Сторінок:</p>
                <input className="book-info__input" value={props.bookInfo.page} onChange={(event) => props.onChangeInfo('page', event.target.value.replace(/[^0-9]/g,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Формат:</p>
                <input className="book-info__input" value={props.bookInfo.size} onChange={(event) => props.onChangeInfo('size', event.target.value.replace(/[^a-z\u0400-\u04FF0-9 ]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Розділ:</p>
                <input className="book-info__input" value={props.bookInfo.section} onChange={(event) => props.onChangeInfo('section', event.target.value.replace(/[^a-z\u0400-\u04FF., ]/gi,''))}/>
            </div>
        </div>
    )
}

export default EditBookInfo;