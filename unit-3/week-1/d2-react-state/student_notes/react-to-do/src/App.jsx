import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList/ToDoList'

// Add the todos array
const todos = [
  'Have Fun with BTY',
  'Learn React with BTY',
  'Learn the MERN-Stack BTY'
];

function App() {

  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className="App">
      <h1>React To-Do with BTY</h1>
      {/* Pass todos as a prop */}
      {showTodos && <ToDoList todos={todos} />}
    </div>
  )
}

export default App
