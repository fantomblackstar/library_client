import React, {useRef} from "react";
import download_icon from '../image/download-icon-white.png';

function EditBookIcon(props) {
    const imgRef = useRef(null);

    function onLoadImage (event) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const srcImg = reader.result + "";
            imgRef.current.style.backgroundImage = `url(${srcImg})`;
            props.onChangeInfo('img', srcImg);
        });
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <div className="book-icon">
            <p className="book-icon__title">Фото: </p>
            <div className="book-icon__img-block" ref={imgRef}></div>
            <div className="book-icon__input-wrapper">
                <input type="file" className="book-icon__input_file" id='input-img__file' accept="image/jpeg" onChange={onLoadImage} />
                <label htmlFor="input-img__file" className="book-icon__file-button">
                    <span className="book-icon__file-icon-wrapper"><img className="input-img__file-icon" src={download_icon} alt="Вибрати файл" width="40" /></span>
                    <span className="book-icon__file-button-text">Виберіть файл</span>
                </label>
            </div>
            <input type='checkbox' className="book-icon__input_ckeckbox" id="ignor-img" onClick={() => (props.onChangeInfo('ignoreimg', !props.bookInfo.ignoreimg))}/>
            <label htmlFor="ignor-img"><span></span>Добавити книгу без фото</label>
        </div>
    )
}

export default EditBookIcon;