function BookInfo (props) {
    return (
        <div className="book-info">
            <p className="book-info__title">Характеристики:</p>
            <div className="book-info__group">
                <p className="book-info__name">Назва книги:</p>
                <p className="book-info__text">{props.bookInfo.name}</p>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Автор:</p>
                <p className="book-info__text">{props.bookInfo.avtor}</p>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Мова:</p>
                <p className="book-info__text">{props.bookInfo.language}</p>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Палітурка:</p>
                <p className="book-info__text">{props.bookInfo.cover}</p>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Сторінок:</p>
                <p className="book-info__text">{props.bookInfo.page}</p>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Формат:</p>
                <p className="book-info__text">{props.bookInfo.size}</p>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Видавництво:</p>
                <p className="book-info__text">{props.bookInfo.publish}</p>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Перекладач(і):</p>
                <p className="book-info__text">{props.bookInfo.translate}</p>
            </div>
            <div className="book-info__group">
                <p className="book-info__name">Розділ:</p>
                <p className="book-info__text">{props.bookInfo.section}</p>
            </div>
        </div>
    )
}

export default BookInfo;