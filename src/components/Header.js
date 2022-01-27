import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import logo_icon from "../image/logo.png";
function Header (props) {
    function toggleHeader () {
        document.querySelector('.header__menu').classList.toggle('active');
        document.querySelector('.header__burger').classList.toggle('active');
    }

    const navigate = useNavigate();

    return (!props.logIn)? (
        <div className="header">
            <div className="container header__body">
                <div className='header__logo block-img'><img className='block-img__img' src={logo_icon}/></div>
                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__link"><a onClick={()=> navigate('/')}>Головна</a></li>
                        <li className="header__link"><a onClick={()=> navigate('/about')}>Про нас</a></li>
                    </ul>
                </nav>
                <div className="header__burger" onClick={toggleHeader}>
                        <span></span>
                </div>
            </div>
        </div>
    ): (
        <div className="header">
        <div className="container header__body">
            <div className='header__logo block-img'><img className='block-img__img' src={logo_icon}/></div>
            <nav className="header__menu">
                <ul className="header__list">
                    <li className="header__link"><a onClick={()=> navigate('/')}>Головна</a></li>
                    <li className="header__link"><a onClick={()=> navigate('/new-book')}>Нова Книга</a></li>
                    <li className="header__link"><a onClick={()=> navigate('/about')}>Про нас</a></li>
                </ul>
            </nav>
            <div className="header__burger" onClick={toggleHeader}>
                    <span></span>
            </div>
        </div>
    </div>
    );
}

export default Header;