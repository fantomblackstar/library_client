import React, { useState } from 'react';
import { HashRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './components/AppRouter';
import ModalWindow from './components/ModalWindow';



function App() {
  const [logIn, setLogIn] = useState(false);

  function showModalWindow(text) {
    document.querySelector('.modal-window__text').innerHTML = text;
    document.querySelector('.modal-wrap-center').classList.remove('hide');
  }

  function onLogIn() {
    setLogIn(true);
  }

  return (
    <div className="App">
      <HashRouter >
        <Header logIn={logIn} />
        <AppRouter
          logIn={logIn}
          onLogIn={onLogIn}
          showModalWindow={showModalWindow}
        />
      </HashRouter>
      <Footer />
      <ModalWindow />
    </div>
  );
}

export default App;