import React from "react";
import '../styles/SetBookIcon.css';

export default function SetBookIcon (props) {

    function onLoadImage(event) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
           const srcImg = reader.result + "";
           console.log(srcImg);
           document.querySelector('.book-icon__img').style.backgroundImage = `url(${srcImg})`;
        });
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <div className="book-icon">
            <div className="book-icon__img"></div>
            <input type="file" className="book-icon__input" onChange={onLoadImage}/>
        </div>
    )
}