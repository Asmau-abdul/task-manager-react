import React, { useState } from 'react'
import '../styles/taskInput.css'

const TaskInput = ({onAdd}) => {

    const [text, setText] =useState('')

    const handleAdd = () => {
        if(text.trim() === '') return
        onAdd(text)
        setText('')
    }

  return (
    <>
        <div className='task-input-row'>
            <input type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} placeholder='Add a new task...' />
            <button onClick={handleAdd}>Add task</button>
        </div>
    </>
  )
}

export default TaskInput