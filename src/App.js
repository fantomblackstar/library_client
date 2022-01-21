import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
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

  function onLogIn() {
    setLogIn(true);
  }

  return (
    <div className="App">
      <HashRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs logIn={logIn} />} />
          <Route path="/new" element={<NewBooks />} />
          <Route path="/admin" element={<SignIn onLogIn={onLogIn} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
