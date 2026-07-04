import { useState } from 'react'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem'
import FilterBar from './components/FilterBar'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const handleAdd = (text) => {
    const newTask = {id: Date.now(), text, completed: false}
    setTasks(prev => [...prev, newTask])
  }

  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const handleToggle = (id) => {
    setTasks(prev => prev.map(task => {
      if(task.id === id){
        return {...task, completed: !task.completed}
      }
      return task
    }))
  }

  const filterTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <>
      <div className='app-container'>
        <h1>Task Manager</h1>
        <TaskInput onAdd={handleAdd} />
        <FilterBar onFilter={setFilter} currentFilter={filter}/>
        {filterTasks.map(task => (
            <TaskItem key={task.id} task={task} onDelete={handleDelete} onToggle={handleToggle}/>
        ))}

      </div>
    </>
  )
}

export default App
