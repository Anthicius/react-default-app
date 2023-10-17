import React from 'react';
import './DeleteModal.css';

const DeleteModal = ({ onClose, onConfirmDelete }) => {
    return (
        <div className="modalStyle">
            <div className="modalContentStyle">
                <span className="closeButtonStyle" onClick={onClose}>
                    &times;
                </span>
                <h2>Do you want to delete this ToDo?</h2>
                <div className='modalButtons'>
                    <button onClick={onConfirmDelete}>Delete</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
