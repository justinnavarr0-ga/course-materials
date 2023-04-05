import { useState } from 'react'
import './App.css'
import NewToDoForm from './components/NewToDoForm/NewToDoForm';
import ToDoList from './components/ToDoList/ToDoList'

const initialTodos = [
  'Have Fun with BTY',
  'Learn React with BTY',
  'Learn the MERN-Stack BTY'
];


function App() {

  const [todos, setTodos] = useState(initialTodos)
  const [showTodos, setShowTodos] = useState(true);

  function addToDo(todo){
    setTodos([...todos, todo])
  }
  
  return (
    <div className="App">
      <h1>React To-Do with BTY</h1>
      <button 
        onClick={() => setShowTodos(!showTodos)}
      >
        {showTodos ? 'Hide' : 'Show'}
      </button>
      {showTodos && <ToDoList todos={todos} />}
      <hr />
      <NewToDoForm addToDo={addToDo}/>
    </div>
  )
}

export default App
