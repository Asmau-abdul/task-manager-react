import React, { useState } from 'react'
import '../styles/taskInput.css'

const TaskInput = ({onAdd}) => {

    const [text, setText] =useState('')

    const handleAdd = () => {
        if(text.trim() === '') return
        onAdd(text)
        setText('')
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') handleAdd()
    }

  return (
    <>
        <div className='task-input-row'>
            <input type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} onKeyDown={handleKey} placeholder='Add a new task...' />
            <button onClick={handleAdd}>Add task</button>
        </div>
    </>
  )
}

export default TaskInput