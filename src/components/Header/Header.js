import './Header.css';

export default function Header(){
    return (
        <div className="header">
            <div className="container header__body">
                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__link"><a href="/">Головна</a></li>
                        <li className="header__link"><a href="/new">Новинки</a></li>
                        <li className="header__link"><a href="/about">Про нас</a></li>
                        <li className="header__link"><a href="/signin">Sign In</a></li>
                    </ul>
                </nav>
                <div className="header__burger">
                        <span></span>
                </div>
               
            </div>
        </div>
    );
}