import '../styles/ModalWindow.css';
import React from 'react';
const ModalWindow = React.forwardRef((props, ref) => (
    <div className='modal-wrap-center hide' ref={ref}>
        <div className="modal-wrap"></div>
        <div className="modal-window">
            <p className="modal-window__text">{props.text}</p>
            <button className="modal-window__button" onClick={props.closeModalWindow}>OK</button>
        </div>
    </div>

));
    


export default ModalWindow;