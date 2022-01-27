import React from "react";
import '../styles/AllBooks.css';
import book_icon from '../image/book-icon.png';

function AllBooks(props) {
    function createBookRows() {
        // const allBooks = props.books.splice(7);
        const allBooks = props.books;
        console.log(allBooks);
        let rowBooks = [];
        let rowKey = '';
        let rows = [];
        allBooks.forEach((elem, index) => {
            if ((index + 1) % 3 === 0) {
                rowBooks.push(elem);
                rowKey += elem.name;
                rows.push(<BooksRow books={rowBooks} key={rowKey} />)
                rowBooks = [];
                rowKey = '';
            }
            else {
                rowBooks.push(elem);
                rowKey += elem.name.replace(/ /g, '');
            }
        })
        return rows;
    }

    return (
        <div className="all-books">
            {createBookRows()}
        </div>
    )
}

export default AllBooks;

function BooksRow(props) {
    const row = <div className="all-books__row">
        {props.books.map(book => {
            return <Book key={book.name.replace(/ /g, '')} bookInfo={book} />
        })}
    </div>

    return row;
}

function Book(props) {
    return (
        <div className="short-book">
            <img className="short-book__img" src={book_icon} />
            <p className="short-book__name">{props.bookInfo.name}</p>
            <p className="short-book__avtor">{props.bookInfo.username}</p>
        </div>
    )
}