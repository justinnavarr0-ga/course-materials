import { useState } from "react";

function NewToDoForm({addToDo}) {
  const [newToDo, setNewToDo] = useState('')

  const handleChange = (evt) => {
    setNewToDo(evt.target.value)
  }

  function handleAddToDo(evt){
    evt.preventDefault()
    addToDo(newToDo)
    setNewToDo('')
  }

  return (
    <div>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddToDo}>
        <input 
          placeholder="New To-Do" 
          value={newToDo}
          onChange={handleChange}
          required
          pattern=".{4,}"
        />
        <button type="submit">ADD TO-DO</button>
      </form>
    </div>
  );
}

export default NewToDoForm;