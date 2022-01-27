import React, { useState, useEffect } from "react";
import FreshBooks from "../components/FreshBooks";
import AllBooks from "../components/AllBooks";
import { postData } from "../postData";

function Home(props) {

    const [booksObj, setBooksObj] = useState('');

    useEffect(() => {
        if (booksObj === '') getBooks();
        else {
         
        }

    }, [booksObj]);


    async function getBooks() {
        let res = await postData({}, 'get-books')
        .then(response => response.json())
        .then(data => data);
        console.log(res);
    }

    return (booksObj === '') ? (
        <div className="page">
            <div className="container">
                <p className="page__title">Новинки</p>
                <p>Помилка в отриманні даних спробуйте пізніше</p>
            </div>

        </div>
    ) :
    (
        <div className="page">
            <div className="container">
                <p className="page__title">Новинки</p>
                <FreshBooks books={booksObj}/>
                <p className="page__title">Всі книги</p>
                <AllBooks books={booksObj}/>
            </div>
        </div>
    )
}

export default Home;