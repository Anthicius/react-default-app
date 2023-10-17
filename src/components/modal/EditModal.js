import React, { useState } from 'react';

const EditModal = ({ onClose, onEdit, data }) => {
    const [title, setTitle] = useState(data.title);
    const [currentDate, setCurrentDate] = useState(data.currentDate);
    const [description, setDescription] = useState(data.description);
    const [isDone, setIsDone] = useState(data.isDone);
    const [finishDate, setFinishDate] = useState(data.finishDate);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const editedData = {
            title: title,
            currentDate: currentDate,
            description: description,
            isDone: isDone,
            finishDate: finishDate,
        };

        onEdit(editedData);
        onClose();
    };

    return (
        <div className="modalStyle">
            <div className="modalContentStyle">
                <span className="closeButtonStyle" onClick={onClose}>
                    &times;
                </span>
                <h2>Edit ToDo</h2>
                <form onSubmit={formSubmitHandler}>
                    <label>
                        Title
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Description
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        To Do deadline
                        <input
                            type="date"
                            value={finishDate}
                            onChange={(e) => setFinishDate(e.target.value)}
                            required
                            min={currentDate}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <div className="modalButtons">
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
