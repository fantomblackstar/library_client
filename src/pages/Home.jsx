import React from "react";
import FreshBooks from "../components/FreshBooks";
import AllBooks from "../components/AllBooks";
import Preloader from "../components/Preloader";

function Home (props) {
    return (props.booksObj === '') ? (
        <div className="page">
            <Preloader />
        </div>
    ) :
        (
            <div className="page">
                <div className="container">
                    <p className="page__title">Новинки</p>
                    <FreshBooks books={props.booksObj} />
                    <p className="page__title">Всі книги</p>
                    <AllBooks books={props.booksObj} />
                </div>
            </div>
        )
}

export default Home;