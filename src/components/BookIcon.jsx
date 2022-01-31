import book_icon from '../image/book-icon.png';

function BookIcon (props) {
    return (
        <div className="book-icon">
            <img className="book-icon__img" src={props.bookInfo.img || book_icon} />
        </div>
    )
}

export default BookIcon;