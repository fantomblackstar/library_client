import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import logo_icon from "../image/logo.png";
export default function Header(){
    function toggleHeader () {
        document.querySelector('.header__menu').classList.toggle('active');
        document.querySelector('.header__burger').classList.toggle('active');
    }

    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="container header__body">
                <div className='header__logo block-img'><img className='block-img__img' src={logo_icon}/></div>
                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__link"><a onClick={()=> navigate('/')}>Головна</a></li>
                        <li className="header__link"><a onClick={()=> navigate('/new')}>Новинки</a></li>
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