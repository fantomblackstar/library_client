import React from "react";
import { Routes, Route } from 'react-router-dom';
import SignIn from "../pages/SingIn";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import NewBook from "../pages/NewBook";
import NotFound from "../pages/NotFound";
import Book from "../pages/Book";
import BookAdmin from "../pages/BookAdmin";
import Admin from "../pages/Admin";

function AppRouter(props) {
    const auth = props.logIn;
    return (
        auth ? 
            <Routes>
                <Route path="/" element={<Home booksObj={props.booksObj}/>} />
                <Route path="/admin" element={<Admin adminData={props.adminData} onLogIn={props.onLogIn} />} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/new-book" element={<NewBook showModalWindow={props.showModalWindow}/>} />
                <Route path="/book/:book_id" element={<BookAdmin booksObj={props.booksObj}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            :
            <Routes>
                <Route path="/" element={<Home booksObj={props.booksObj}/>} />
                <Route path="/admin" element={<SignIn onLogIn={props.onLogIn} />} />
                <Route path="/about" element={<AboutUs logIn={props.logIn} />} />
                <Route path="/book/:book_id" element={<Book booksObj={props.booksObj}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    );
}

export default AppRouter;