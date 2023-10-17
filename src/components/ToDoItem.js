import React, { useState } from 'react';
import DeleteModal from './modal/DeleteModal';
import "./ToDoItem.css"
import EditModal from './modal/EditModal';

const ToDoItem = ({ data, index, onDelete }) => {
    const [checked, setChecked] = useState(data.isDone);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [newData, setNewData] = useState(data);

    const checkboxHandler = () => {
        setChecked((prevChecked) => !prevChecked);
    };

    const deleteHandler = () => {
        setShowDeleteModal(true);
    };

    const editHandler = () => {
        setShowEditModal(true);
    };

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };

    const confirmDelete = () => {
        onDelete(index);
        setShowDeleteModal(false);
    };

    const handleEdit = (editedData) => {
        const updatedData = {
            ...newData,
            title: editedData.title,
            description: editedData.description,
            finishDate: editedData.finishDate,
        };
        setNewData(updatedData);
    };

    return (
        <div key={index} className='to-do-wrapper'>
            <h3>{newData.title}</h3>
            <p>{`Creation date: ${newData.currentDate}`}</p>
            <h4>Description</h4>
            <p>{newData.description}</p>
            <p>{`Finish date: ${newData.finishDate}`}</p>
            <label>
                Completed:
                <input type='checkbox' checked={checked} onChange={checkboxHandler} />
            </label>
            <div>
                <button onClick={deleteHandler}>Delete ToDo</button>
                {showDeleteModal && (
                    <DeleteModal onClose={closeDeleteModal} onConfirmDelete={confirmDelete} />
                )}
                <button onClick={editHandler}>Edit ToDo</button>
                {showEditModal && (
                    <EditModal
                        onClose={closeEditModal}
                        onEdit={handleEdit}
                        data={data}
                    />
                )}
            </div>
        </div>
    );
};

export default ToDoItem;

