import React, {useRef} from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import logo_icon from "../image/logo.png";

function Header (props) {
    const divBurger = useRef(null);
    const divMenu = useRef(null);
    function toggleHeader () {
        divMenu.current.classList.toggle('active');
        divBurger.current.classList.toggle('active');
    }

    const navigate = useNavigate();

    return (!props.logIn)? (
        <div className="header">
            <div className="container header__body">
                <div className='header__logo block-img'  onClick={() => navigate('/')}><img className='block-img__img' src={logo_icon} alt="logo"/></div>
                <nav className="header__menu" ref={divMenu}>
                    <ul className="header__list">
                        <li className="header__link"><p onClick={() => {navigate('/'); toggleHeader()}}>Головна</p></li>
                        <li className="header__link"><p onClick={() => {navigate('/about'); toggleHeader()}}>Про нас</p></li>
                    </ul>
                </nav>
                <div className="header__burger" onClick={toggleHeader} ref={divBurger}>
                        <span></span>
                </div>
            </div>
        </div>
    ): (
        <div className="header">
        <div className="container header__body">
            <div className='header__logo block-img' onClick={() => navigate('/')}><img className='block-img__img' src={logo_icon} alt=""/></div>
            <nav className="header__menu" ref={divMenu}>
                <ul className="header__list">
                    <li className="header__link"><p onClick={()=> {navigate('/'); toggleHeader()}}>Головна</p></li>
                    <li className="header__link"><p onClick={()=> {navigate('/new-book'); toggleHeader()}}>Нова Книга</p></li>
                    <li className="header__link"><p onClick={()=> {navigate('/about'); toggleHeader()}}>Про нас</p></li>
                </ul>
            </nav>
            <div className="header__burger" onClick={toggleHeader} ref={divBurger}>
                    <span></span>
            </div>
        </div>
    </div>
    );
}

export default Header;