import './ModalWindow.css';
export default function ModalWindow(props) {

    function closeWindow() {
        document.querySelector('.modal-wrap-center').classList.add('hide');
    }

    return (
        <div className='modal-wrap-center'>
            <div className="modal-wrap"></div>
            <div className="modal-window">
                <p className="modal-window__text">{props.text}</p>
                <button className="modal-window__button" onClick={closeWindow}>OK</button>
            </div>
        </div>
    )
}