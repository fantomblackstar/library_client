import React, { useRef } from "react";
import download_icon from '../image/download-icon-white.png';
import book_icon from '../image/book-icon.png';
import imageCompression from 'browser-image-compression';

function EditBookIcon(props) {
    const imgRef = useRef(null);

    async function onLoadImage(event) {
        const options = {
            maxSizeMB: 0.3,
            useWebWorker:true
        }
        const compressedFile = await imageCompression(event.target.files[0], options);
        props.onChangeInfo('img', await imageCompression.getDataUrlFromFile(compressedFile));
    }

    return (
        <div className="book-icon">
            <p className="book-icon__title">Фото: </p>
            <div className="book-icon__img-block">
                <img className="book-icon__img" src={props.bookInfo.img || book_icon} ref={imgRef} alt="bookicon"/>
            </div>
            <div className="book-icon__input-wrapper">
                <input type="file" className="book-icon__input_file" id='input-img__file' accept="image/jpeg" onChange={onLoadImage} />
                <label htmlFor="input-img__file" className="book-icon__file-button">
                    <span className="book-icon__file-icon-wrapper"><img className="input-img__file-icon" src={download_icon} alt="Вибрати файл" width="40" /></span>
                    <span className="book-icon__file-button-text">Виберіть файл</span>
                </label>
            </div>
        </div>
    )
}

export default EditBookIcon;