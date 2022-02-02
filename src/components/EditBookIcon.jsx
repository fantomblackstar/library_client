import React, { useRef } from "react";
import download_icon from '../image/download-icon-white.png';
import book_icon from '../image/book-icon.png';

function EditBookIcon(props) {
    const imgRef = useRef(null);

    function onLoadImage(event) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const srcImg = reader.result + "";
            imgRef.current.src = srcImg;
            props.onChangeInfo('img', srcImg);
        });
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <div className="book-icon">
            <p className="book-icon__title">Фото: </p>
            <div className="book-icon__img-block">
                <img className="book-icon__img" src={props.bookInfo.img || book_icon} ref={imgRef} />
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