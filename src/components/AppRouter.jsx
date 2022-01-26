import React from "react";
import { Routes, Route } from 'react-router-dom';
import SignIn from "../pages/SingIn";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import NewBook from "../pages/NewBook";
import NotFound from "../pages/NotFound";



function AppRouter(props) {
    const auth = props.logIn;
    return (
        auth ? 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<SignIn onLogIn={props.onLogIn} />} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/newbook" element={<NewBook showModalWindow={props.showModalWindow}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            :
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<SignIn onLogIn={props.onLogIn} />} />
                <Route path="/about" element={<AboutUs logIn={props.logIn} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    );
}

export default AppRouter;