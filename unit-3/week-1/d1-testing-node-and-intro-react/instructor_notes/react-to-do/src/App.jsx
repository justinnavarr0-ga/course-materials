import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './components/Blog/Blog'
import ToDoList from './components/ToDoList/ToDoList'

// Add the todos array
const todos = [
  'Have Fun with BTY',
  'Learn React with BTY',
  'Learn the MERN-Stack BTY'
];


function App() {
  return (
    <div className="App">
      <h1>React To-Do with BTY</h1>
      {/* Pass todos as a prop */}
      <ToDoList todos={todos} />
    </div>
  )
}

export default App
