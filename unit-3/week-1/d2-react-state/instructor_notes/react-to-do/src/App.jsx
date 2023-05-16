import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList/ToDoList'


function App() {

  const [todos, setTodos] = useState([
    "Have Fun",
    "Learn React",
    "Learn the MERN-Stack"
  ]);

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

// todo = 'get breakfast'



// const [todos, setTodos] = [array of strings, special setter function]


// ['have fun', 'learn react', 'learn mern stack', 'get breakfast'];