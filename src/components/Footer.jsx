import '../styles/Footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container ">
                <div className='row footer__body'>
                    <p className="footer__text"><a href='#/admin'>Бібліотека с.Кавсько</a></p>
                    <p className="footer__text">@2022</p>
                </div>
            </div>
        </footer>
    )
}