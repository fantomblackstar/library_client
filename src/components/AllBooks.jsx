import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AllBooks.css';
import book_icon from '../image/book-icon.png';

function AllBooks(props) {
    const [showBookCount, setShowBookCount] = useState(6);
    const divLoader = useRef(null);

    function createBookRows() {
        const allBooks = props.books.slice(0, showBookCount);
        let rowBooks = [];
        let rowKey = '';
        let rows = [];
        allBooks.forEach((elem, index) => {
            rowBooks.push(elem);
            rowKey += elem.key;

            if ((index + 1) % 3 === 0) {
                rows.push(<BooksRow books={rowBooks} key={rowKey} />)
                rowBooks = [];
                rowKey = '';
            }
        })
        return rows;
    }

    function loadMoreImage() {
        const nodes = divLoader.current.children;
        nodes[0].style.opacity = '0';
        nodes[1].classList.add('active');
        setTimeout(() => {
            const nodes = divLoader.current.children;
            nodes[0].style.opacity = '1';
            nodes[1].classList.remove('active');
            setShowBookCount(prevState => prevState + 3);
        }, 1000);
    }

    return (
        <div className="all-books">
            {createBookRows()}
            <div className="load-more" ref={divLoader}>
                <p className="load-more__text" onClick={loadMoreImage}>Завантажити ще книги</p>
                <div className="loader_small"></div>
            </div>
        </div>
    )
}

export default AllBooks;

function BooksRow(props) {
    const row = <div className="all-books__row">
        {props.books.map(book => {
            return <Book key={book.key} bookInfo={book} />
        })}
    </div>

    return row;
}

function Book(props) {
    const navigate = useNavigate();
    return (
        <div className="short-book" onClick={() => navigate(`/book/${props.bookInfo.key}`)}>
            <img className="short-book__img" src={props.bookInfo.img || book_icon} />
            <p className="short-book__name">{props.bookInfo.name}</p>
            <p className="short-book__avtor">{props.bookInfo.avtor}</p>
        </div>
    )
}