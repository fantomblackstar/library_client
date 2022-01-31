import BookIcon from "../components/BookIcon";
import BookInfo from "../components/BookInfo";
import BookAbout from "../components/BookAbout";
import { useLocation } from "react-router-dom";

function Book (props) {
    const bookKey = useLocation().pathname.split('/')[2];
    const bookObj = props.booksObj.filter((elem) => elem.key === bookKey)[0];
    console.log(bookObj);
    return <div className="page">
        <div className="container">
            <div className="row">
                <BookIcon bookInfo={bookObj} />
                <BookInfo bookInfo={bookObj} />
            </div>
            <BookAbout bookInfo={bookObj} />
        </div>
    </div>
}

export default Book;