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
  const divModalWindow = useRef(null);

  useEffect(() => {
    if (booksObj === '') getBooks();
  }, [booksObj]);

  async function getBooks() {
    await postData({}, 'get-books')
      .then(response => response.json())
      .then(data => setBooksObj(Object.values(data)));
  }

  function showModalWindow(text) {
    divModalWindow.current.children[1].children[0].innerHTML = text;
    divModalWindow.current.classList.remove('hide');
  }

  function closeModalWindow() {
    divModalWindow.current.classList.add('hide');
  }

  function onLogIn(login) {
    adminData.current = {'login' : login};
    setLogIn(true);
  }

  async function deleteBook(key, img = ''){
    let res = await postData({key, img}, 'remove-book');
 
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

  async function addNewBook (bookInfo){
    showModalWindow('Книгу успішно додано');
    setBooksObj(prevState => ([bookInfo, ...prevState]));
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
          addNewBook={addNewBook}
        />
        <Footer />
      </HashRouter>
      <ModalWindow ref={divModalWindow} closeModalWindow={closeModalWindow}/>
    </div>
  );
}

export default App;