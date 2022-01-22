import React from "react";
import '../styles/NewBook.css';
import SetBookIcon from "../components/SetBookIcon";

export default function NewBook() {
    return (
        <div className="page">
            <div className="container">
                <p className="page__title">Добавлення нової книги</p>
                <form className="new-book">
                    <SetBookIcon/>
                </form>
            </div>
        </div>
    )
}