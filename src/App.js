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
