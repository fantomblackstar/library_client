import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import book_icon from '../image/book-icon.png';
import '../styles/FreshBooks.css';

function FreshBooks(props) {
    const divSlider = useRef(null);
    const divDots = useRef(null);
    const divSliderBody = useRef(null);
    let sliderItemWidth = useRef(null);
    let sliderItemCount = useRef(null);
    let canSlide = useRef(true);
    let deltaX = useRef(0);
    let positionLeft = useRef(0);
    let touchEvent = useRef(null);
    const booksCount = 10;

    useEffect(() => {
        divSlider.current.addEventListener('wheel', handleOnWeel);
        divSlider.current.addEventListener('touchstart', (e) => touchEvent.current = e);
        divSlider.current.addEventListener('touchend', handelOnTouchEnd);

        const sliderWidth = divSlider.current.offsetWidth;
        setSliderItemCount(sliderWidth);
        handleStepDots();

        if (sliderItemCount.current === 2) sliderItemWidth.current = (sliderWidth - 10) / sliderItemCount.current;
        else {
            sliderItemWidth.current = (sliderWidth - 20) / sliderItemCount.current;
        }
    })


    const books = props.books.map((book, index) => {
        if (index < booksCount) {
            return <FreshBook key={book.key} bookInfo={book} />
        }
    })

    function handleOnWeel(event) {
        event = event || window.event;
        if(canSlide.current){
            deltaX.current += event.deltaY || event.detail || event.wheelDelta;
            canSlide.current = false;
            deltaX.current > 0 ? handleStepSlider(-1) : handleStepSlider(1);
            setTimeout(() => canSlide.current = true, 300);
            deltaX.current = 0;
        }
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    }

    function handelOnTouchEnd(event) {
        deltaX.current = touchEvent.current.touches[0].pageX - event.changedTouches[0].pageX;
        if (Math.abs(deltaX.current) > 100) {
            deltaX.current > 0 ? handleStepSlider(-1) : handleStepSlider(1);
            deltaX.current = 0;
        }
        touchEvent.current = null;
    }

    function handleStepSlider(n) {
        positionLeft.current += n;
        if (positionLeft.current === sliderItemCount.current - (booksCount + 1)) {
            positionLeft.current = 0;
        } else if (positionLeft.current === 1) {
            positionLeft.current = sliderItemCount.current - booksCount;
        }
        handleStepDots();
        divSliderBody.current.style.left = `${sliderItemWidth.current * positionLeft.current}px`;
    }

    function handleStepDots() {
        const allDots = divDots.current.childNodes;
        allDots.forEach((elem, index) => {
            if (index < Math.abs(positionLeft.current) + sliderItemCount.current && index > Math.abs(positionLeft.current) - 1) {
                elem.classList.add('active');
            }
            else if (elem.classList.contains('active') !== -1) elem.classList.remove('active');
        })
    }

    function setSliderItemCount(sliderWidth) {

        if (sliderWidth >= 1110) sliderItemCount.current = 6
        else if (sliderWidth === 840) sliderItemCount.current = 5;
        else if (sliderWidth === 640) sliderItemCount.current = 4;
        else sliderItemCount.current = 2;
    }

    function createDots() {
        let allDots = [];
        for (let i = 0; i < booksCount; i++) {
            if (i <= sliderItemCount.current) { allDots.push(<FreshDot key={i.toString()} active={true} />) }
            else { allDots.push(<FreshDot key={i.toString()} active={false} />) }
        }

        return <div ref={divDots} className="fresh-books__dots">{allDots}</div>
    }

    return (
        <div className="fresh-books" ref={divSlider} >
            <div className="fresh-books__body" ref={divSliderBody}>
                {books}
            </div>
            {createDots()}
        </div>
    )
}

export default FreshBooks;

function FreshBook(props) {
    const navigate = useNavigate();
    return (
        <div className="fresh-book" onClick={() => navigate(`/book/${props.bookInfo.key}`)}>
            <img className="fresh-book__image" src={props.bookInfo.img || book_icon} />
            <p className="fresh-book__name">{props.bookInfo.name}</p>
        </div>
    )
}

function FreshDot(props) {
    return props.active ?
        <span className="fresh-books__dot active"></span> : <span className="fresh-books__dot"></span>
}