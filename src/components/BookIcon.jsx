import book_icon from '../image/book-icon.png';

function BookIcon(props) {
    return (
        <div className="book-icon">
            <div className='book-icon__img-block'>
                <img className="book-icon__img" src={props.bookInfo.img || book_icon} />
            </div>
        </div>
    )
}

export default BookIcon;