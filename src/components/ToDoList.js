import React, { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';

export const ToDoList = ({ data }) => {
    const [newData, setNewData] = useState(data);

    const handleDelete = (index) => {
        const updatedData = newData.filter((item, i) => i !== index);
        setNewData(updatedData);
    };

    
    useEffect(() => {
        setNewData(prevData => [...prevData, ...data]);
    }, [data]);

    return (
        <div>
            {newData.map((item, index) => (
                <ToDoItem
                    key={index}
                    data={item}
                    index={index}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};
