import React from "react";
import library_img1 from "../image/library1.jpg";
import library_size_icon from "../image/library-size.png";
import laptop_icon from "../image/laptop-icon.png";
import reader_icon from "../image/reading-icon.png";
import navigator_icon from '../image/navigation.png';
import phone_icon from '../image/telephone.png';
import house_icon from '../image/house.png';
import map_icon from '../image/map.png';
import map_pin_icon from '../image/pin.png';
import fasebook_icon from '../image/facebook.png';
import mail_icon from '../image/mail.png';

import '../styles/AboutUs.css';

export default function AboutUs(props) {
    console.log(props.logIn);
    return (
        <div className="page about-us">
            <div className="container">
                <p className="page__title">БІБЛІОТЕКА-ФІЛІЯ № 27 С.КАВСЬКО СТРИЙСЬКОЇ РЦБС</p>
                <section className="icon-info section">
                    <div className="icon-info__column">
                        <img className="icon-info__img" src={laptop_icon} />
                        <p className="icon-info__count">1</p>
                        <p className="icon-info__subtitle">Кількість комп'ютерів</p>
                    </div>
                    <div className="icon-info__column">
                        <img className="icon-info__img" src={library_size_icon} />
                        <p className="icon-info__count">75 M2</p>
                        <p className="icon-info__subtitle">Площа бібліотеки</p>
                    </div>
                    <div className="icon-info__column">
                        <img className="icon-info__img" src={reader_icon} />
                        <p className="icon-info__count">25</p>
                        <p className="icon-info__subtitle">Кількість місць для читачів</p>
                    </div>
                </section>
                <section className="about-info section">
                    <p className="page__title">Про нас</p>
                    <p className="page__text"> Бібліотека-філія с. Кавсько розміщена в соціально-культурному комплексі, на 2 поверсі, і займає 1 кімнату, загальна площа приміщення бібліотеки - 75м2.</p>
                    <img src={library_img1} id="library-photo-1" />
                    <p className="page__text">Завідує бібліотекою Федорків Оксана, освіта-базова вища, закінчила Самбірське культурно-освітнє училище в 1988 році, за спеціальністю "Бібліотечна справа". </p>
                    <p className="page__text">Бібліотека обслуговує протягом року - 594 користувачі, з них користувачів-дітей віком до 15 років - 119, користувачів юнацької групи - 95.
                        Кількість відвідувань бібліотеки протягом усього року - 5 580. Бібліотечний фонд налічує 6 676 пр. документів. Видано протягом року - 10 602 примірників документів, з них дітям до 15 років - 5 088.</p>
                    <p className="page__text">Актуально оформлено народознавчий куток "Вишивки наших читачів", де зібрано всі стародавні речі, вишиті сорочки, корсети, спідниці. Узагальнення заслуговує краєзнавча робота, де зібрано всі пошукові матеріали: написання історії села, церкви, школи.</p>
                    <p className="page__text">Бібліотека охоплює всі напрямки популяризації літератури в роботі з користувачами різних вікових категорій. </p>
                    <p className="page__text">При бібліотеці діє клуб за інтересами "Струни серця", метою клубу є популяризація кращих творів українських письменників, залучення нових читачів до бібліотеки, популяризація бібліотеки, підняття її іміджу, згуртування активних користувачів, друзів бібліотеки. Свою роботу бібліотекар проводить спільно зі школою, церквою, Народним домом, музеєм та громадськістю села.</p>
                </section>
                <section className="main-info section">
                    <div className="main-info__column">
                        <p className="main-info__title">Адреса \ Локація</p>
                        <p className="main-info__text"><img className="main-info__img" src={house_icon} /><b>Населений пункт: </b>Кавсько</p>
                        <p className="main-info__text"><img className="main-info__img" src={map_icon} /><b>Область: </b>Львівська</p>
                        <p className="main-info__text"><img className="main-info__img" src={mail_icon} /><b>Поштовий індекс: </b>82420</p>
                        <p className="main-info__text"><img className="main-info__img" src={map_pin_icon} /><b>Адреса: </b>вул.Польова,4</p>
                    </div>
                    <div className="main-info__column">
                        <p className="main-info__title">Контактні дані</p>
                        <p className="main-info__text"><img className="main-info__img" src={phone_icon} /><b>Телефон:</b> (03245)38559</p>
                    </div>
                    <div className="main-info__column">
                        <p className="main-info__title">Ми в соціальних мережах</p>
                        <p className="main-info__text"><img className="main-info__img" src={fasebook_icon} /><b>Facebook:</b><a className="main-info__link" href="https://www.facebook.com/groups/2042168039352010/about" target="_blank"> Бібліотека с.Кавсько</a></p>
                    </div>
                </section>
            </div>
        </div>
    )
}