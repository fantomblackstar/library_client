import React, {useState} from "react";
import '../styles/EditBookInfo.css';

function EditBookInfo(props){

    return (
        <div className="book-info">
            <p className="book-info__title">Характеристики:</p>
            <div className="book-info__group">
                <p className="book-info__name">Назва книги:</p>
                <input className="book-info__input" value={props.info.name} onChange={(event) => props.onChangeInfo('name', event.target.value.replace(/[^a-zа-я0-9\.\, ]/gi,'') )}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Автор:</p>
                <input className="book-info__input" value={props.info.actor} onChange={(event) => props.onChangeInfo('actor',event.target.value.replace(/[^a-zа-я\.\, ]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Мова:</p>
                <input className="book-info__input" value={props.info.language} onChange={(event) => props.onChangeInfo('language', event.target.value.replace(/[^a-zа-я\.]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Оригінальна назва:</p>
                <input className="book-info__input" value={props.info.orgnName} onChange={(event) => props.onChangeInfo('orgnName', event.target.value.replace(/[^a-zа-я0-9\. ]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Мова оригіналу:</p>
                <input className="book-info__input" value={props.info.orgnLanguage} onChange={(event) => props.onChangeInfo('orgnLanguage', event.target.value.replace(/[^a-zа-я\.]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Обкладинка:</p>
                <input className="book-info__input" value={props.info.cover} onChange={(event) => props.onChangeInfo('cover', event.target.value.replace(/[^a-zа-я\.]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Сторінок:</p>
                <input className="book-info__input" value={props.info.page} onChange={(event) => props.onChangeInfo('page', event.target.value.replace(/[^0-9]/g,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Формат:</p>
                <input className="book-info__input" value={props.info.size} onChange={(event) => props.onChangeInfo('size', event.target.value.replace(/[^a-zа-я0-9]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Видавництво:</p>
                <input className="book-info__input" value={props.info.publish} onChange={(event) => props.onChangeInfo('publish', event.target.value.replace(/[^a-zа-я\.]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Перекладач(і):</p>
                <input className="book-info__input" value={props.info.translate} onChange={(event) => props.onChangeInfo('translate', event.target.value.replace(/[^a-zа-я\.\, ]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Вікові обмеження:</p>
                <input className="book-info__input" value={props.info.age} onChange={(event) => props.onChangeInfo('age', event.target.value.replace(/[^0-9+]/gi,''))}/>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Розділ:</p>
                <input className="book-info__input" value={props.info.section} onChange={(event) => props.onChangeInfo('section', event.target.value.replace(/[^a-zа-я\.\, ]/gi,''))}/>
            </div>
        </div>
    )
}

export default EditBookInfo;