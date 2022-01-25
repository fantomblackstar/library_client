import React, {useState} from "react";

function EditBookAbout (props) {
    return (
        <div className="book-about">
            <p className="book-about__title">Опис книги:</p>
            <textarea className="book-about__textarea" value={props.info.about} onChange={(event) => props.onChangeInfo('about', event.target.value)}></textarea>
        </div>
    )
}

export default EditBookAbout;