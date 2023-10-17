import React, { useState } from 'react'
import { ToDoList } from './ToDoList';

const ToDoForm = () => {

    const today = new Date().toISOString().split('T')[0];
    const [title, setTitle] = useState("");
    const [currentDate, setCurrentDate] = useState(today)
    const [description, setDescription] = useState("")
    const [isDone, setIsDone] = useState(false)
    const [finishDate, setFinishDate]= useState(today);
    const [formData, setFormData] = useState([]);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        setCurrentDate()
        setIsDone()
        
        const data = [
            {
                title: title,
                currentDate:currentDate,
                description: description,
                isDone:isDone,
                finishDate:finishDate
            }
        ]

        setFormData(data)
        
        setTitle("")
        setDescription("")
        setFinishDate(today)
    
    }

  return (
    <div>
    <form onSubmit={formSubmitHandler}>
        <label>
        Title
            <input
                type='text'
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
                required
            />
        </label>
        <label>
        Description
            <textarea
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                required
            />
        </label>
        <label>
        To Do deadline
            <input
                type='date'
                value = {finishDate}
                onChange={(e)=>setFinishDate(e.target.value)}
                required
                min={today}
            />
        </label>
        <button>Submit</button>
    </form>
    <ToDoList data = {formData}/>
    </div>
  )
}

export default ToDoForm