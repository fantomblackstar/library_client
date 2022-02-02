import BookIcon from "../components/BookIcon";
import BookInfo from "../components/BookInfo";
import BookAbout from "../components/BookAbout";
import Preloader from "../components/Preloader";
import { useLocation } from "react-router-dom";

function Book(props) {
    const bookKey = useLocation().pathname.split('/')[2];
    let bookObj;
    if (props.booksObj) {
        bookObj = props.booksObj.filter((elem) => elem.key === bookKey)[0];
    }

    return props.booksObj ? (
        <div className="page">
            <div className="container">
                <div className="row">
                    <BookIcon bookInfo={bookObj} />
                    <BookInfo bookInfo={bookObj} />
                </div>
                <BookAbout bookInfo={bookObj} />
            </div>
        </div>) :
        (
            <div className="page">
                <Preloader />
            </div>
        )
}

export default Book;