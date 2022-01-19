import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Home from './public/home/Home';
import AboutUs from './public/aboutUs/AboutUs';
import NewBooks from './public/newBooks/NewBooks';
import ErrorPage from './public/errorPage/Errorpage';
import SignIn from './public/signIn/SingIn';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/new" element={<NewBooks />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
