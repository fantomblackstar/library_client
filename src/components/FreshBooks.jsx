import React from "react";
import book_icon from '../image/book-icon.png';
import '../styles/FreshBooks.css';

function FreshBooks (props){
    console.log(props);
    const books = props.books.map((book, index) => {
        if(index < 7){
           return <FreshBook key={book.name} bookInfo={book} />
        }
       
    })
    return (
        <div className="fresh-books">
            {books}
        </div>
    )
}

export default FreshBooks;

function FreshBook (props){
    console.log(props.bookInfo);
    return (
        <div className="fresh-book">
            <img className="fresh-book__image" src={book_icon}/>
            <p className="fresh-book__name">{props.bookInfo.name}</p>
        </div>
    )
}