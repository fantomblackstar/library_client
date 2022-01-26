import React, { useState, useEffect } from "react";
import FreshBooks from "../components/FreshBooks";

function Home(props) {

    const [booksObj, setBooksObj] = useState('');

    useEffect(() => {
        if (booksObj === '') getBooks();
        else {
         
        }

    }, [booksObj]);


    async function getBooks() {
        console.log('send request');
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setBooksObj(json));
    }

    return (booksObj === '') ? (
        <div className="page">
            <div className="container">
                <p className="page__title">Новинки</p>
            </div>

        </div>
    ) :
    (
        <div className="page">
            <div className="container">
                <p className="page__title">Новинки</p>
                <FreshBooks books={booksObj}/>
            </div>

        </div>
    )
}

export default Home;