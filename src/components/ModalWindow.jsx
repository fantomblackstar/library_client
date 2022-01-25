import '../styles/ModalWindow.css';
function ModalWindow(props) {
    function closeModalWindow() {
        document.querySelector('.modal-wrap-center').classList.add('hide');
    }

    return (
        <div className='modal-wrap-center hide'>
            <div className="modal-wrap"></div>
            <div className="modal-window">
                <p className="modal-window__text">{props.text}</p>
                <button className="modal-window__button" onClick={closeModalWindow}>OK</button>
            </div>
        </div>
    )
}

export default ModalWindow;