import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './components/AppRouter';

function App() {
  const [logIn, setLogIn] = useState(false);

  function onLogIn() {
    setLogIn(true);
  }

  return (
    <div className="App">
      <HashRouter >
        <Header logIn={logIn}/>
        <AppRouter logIn = {logIn} onLogIn={onLogIn}/>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
