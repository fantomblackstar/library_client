import React from "react";

function BookAbout (props) {
    return (
        <div className="book-about">
            <p className="book-about__title">Опис книги:</p>
           <p className="book-about__text">{props.bookInfo.about}</p>
        </div>
    )
}

export default BookAbout;