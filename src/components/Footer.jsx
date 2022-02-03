import React from 'react';
import '../styles/Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="footer">
            <div className="container ">
                <div className='footer__body'>
                    <p className="footer__link" onClick={() => navigate('/admin')}>Бібліотека с.Кавсько</p>
                    <p className="footer__text">@2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;