# Task Manager App

A simple task manager built with React. My first multi-component React project, built while learning React fundamentals.

## Features

- Add new tasks
- Mark tasks as complete
- Delete tasks
- Filter tasks by All, Active, or Completed

## Tech Stack

- React 
- Vite
- Plain CSS

## Getting Started

### Prerequisites
- Node.js v18+

### Installation

1. Clone the repo
    git clone https://github.com/YOUR_USERNAME/task-manager-react.git

2. Navigate into the project
    cd task-manager-react

3. Install dependencies
    npm install

4. Start the dev sever
    npm run dev

5. Open .your brower at http://localhost:5173

## Project Structure

src/
├── components/
│   ├── TaskInput.jsx    ← input and add button
│   ├── FilterBar.jsx    ← All / Active Completed tabs
│   ├── TaskList.jsx     ← renders the task list
│   └── TaskItem.jsx     ← single task row with delete
├── styles/
│   ├── taskInput.css    
│   ├── taskItem.css    
│   ├── filterBar.css    
├── App.jsx
└── App.css

## What I Learned
- React component structure and JSX
- Props and passing functions as props
- useState for managing state
- Controlled inputs
- Lifting state up to common parent
- Conditional rendering and list rendering

## Screenshots

![All] (screenshots/task-manager-1)
![Active] (screenshots/task-manager-2)
![Completed] (screenshots/task-manager-3)