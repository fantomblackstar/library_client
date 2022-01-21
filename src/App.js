import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NewBooks from './pages/NewBooks';
import ErrorPage from './pages/Errorpage';
import SignIn from './pages/SingIn';
import Footer from './components/Footer';

function App() {
  const [logIn, setLogIn] = useState(false);
  
  function onLogIn(){
    // console.log('login succesful');
    setLogIn(true);
  }

  useEffect(()=> {
    console.log(logIn);
  },[logIn])

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/new" element={<NewBooks />} />
          <Route path="/admin" element={<SignIn onLogIn={onLogIn}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
