import React, { useState, useEffect, useRef } from 'react';
import { HashRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './components/AppRouter';
import ModalWindow from './components/ModalWindow';
import { postData } from "./postData";


function App() {
  const [logIn, setLogIn] = useState(false);
  const [booksObj, setBooksObj] = useState('');
  const adminData = useRef({login:''});

  useEffect(() => {
    if (booksObj === '') getBooks();
  }, [booksObj]);

  async function getBooks() {
    console.log('getBooks');
    await postData({}, 'get-books')
      .then(response => response.json())
      .then(data => setBooksObj(Object.values(data)));
  }

  function showModalWindow(text) {
    document.querySelector('.modal-window__text').innerHTML = text;
    document.querySelector('.modal-wrap-center').classList.remove('hide');
  }

  function onLogIn(login) {
    adminData.current = {'login' : login};
    setLogIn(true);
  }

  async function deleteBook(key, img = ''){
    let res = await postData({key, img}, 'remove-book');
   console.log(res);
    if(res){
      let books = booksObj.filter((elem) => elem.key !== `${key}`);
      setBooksObj(books);
      showModalWindow('Книгу успішно видалено');
    }
    else {
      showModalWindow('Проблема з сервером, спробуйте пізніше');
    }

  }

  async function editBook(bookInfo){
      let books = booksObj.map((elem) => {
        if(elem.key === bookInfo.key){
          return bookInfo;
        }
        return elem;
      });
      setBooksObj(books);
      showModalWindow('Книгу успішно редаговано');
  }

  return (
    <div className="App">
      <HashRouter >
        <Header logIn={logIn} />
        <AppRouter
          logIn={logIn}
          onLogIn={onLogIn}
          showModalWindow={showModalWindow}
          booksObj={booksObj}
          adminData={adminData}
          deleteBook={deleteBook}
          editBook={editBook}
        />
      </HashRouter>
      <Footer />
      <ModalWindow />
    </div>
  );
}

export default App;