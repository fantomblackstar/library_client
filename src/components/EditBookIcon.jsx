import React from "react";

function EditBookIcon (props) {

    function onLoadImage(event) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
           const srcImg = reader.result + "";
           document.querySelector('.book-icon__img').style.backgroundImage = `url(${srcImg})`;
           props.onChangeInfo('img', srcImg);
        });
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <div className="book-icon">
        <p className="book-icon__title">Фото: </p>
            <div className="book-icon__img"></div>
            <input type="file" className="book-icon__input" onChange={onLoadImage}/>
        </div>
    )
}

export default EditBookIcon;