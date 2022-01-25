import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './public/Home/Home';
import AboutUs from './public/AboutUs/AboutUs';
import NewBooks from './public/NewBooks/NewBooks';
import ErrorPage from './public/ErrorPage/Errorpage';
import SignIn from './public/SignIn/SingIn';
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
          <Route path="/admin" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
