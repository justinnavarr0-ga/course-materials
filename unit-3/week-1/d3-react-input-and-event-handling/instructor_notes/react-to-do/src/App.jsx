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
  const [formData, setFormData] = useState({
    name: "",
    emotion: "😠"
  });

  function addToDo(todo){
    setTodos([...todos, todo])
  }
  
  function handleChange(evt){
    console.log(evt.target)
    const newFormData = {...formData, [evt.target.name]: evt.target.value}
    setFormData(newFormData)
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
      <form>
        <label>NAME</label>
        <input name="name" onChange={handleChange} value={formData.name}/>
        <label>EMOTION</label>
        <select name="emotion" onChange={handleChange} value={formData.emotion}>
          <option value="😁">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😠">Angry</option>
        </select>
      </form>
      <h1>{formData.name} is {formData.emotion}</h1>
    </div>
  )
}

export default App
