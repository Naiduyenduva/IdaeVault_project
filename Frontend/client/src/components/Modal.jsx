import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className='close' onClick={onClose}>X</button>
                <p className='message'>{message}</p>
            </div>
        </div>
    );
};

export default Modal;
