import React from 'react'
import { Trash } from 'lucide-react';
import '../styles/taskItem.css'

const TaskItem = ({task, onDelete, onToggle}) => {

  return (
    <>
        <div className='task-item'>
            <button className={`toggle-btn ${task.completed ? 'completed' : ''}`}
                onClick={() => onToggle(task.id)}></button>
            <p className={`task-text ${task.completed ? 'completed' : ''}`}>
                {task.text}
            </p>
            <button className='delete-btn'
                onClick={() => onDelete(task.id)}>
                <Trash size={15}/>
            </button>
        </div>
    </>
  )
}

export default TaskItem