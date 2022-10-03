import React, { useState } from "react";


const TodoForm = () => {

  const [todo, setTodo] = useState('')

  const addTask = (e) => {
    setTodo(e.target.value)
    console.log(todo);
  }

  return ( 
    <div className="wrapper-input">
        <input 
        placeholder="Create a new todo..." 
        className="input-todo"
        value={todo}
        onChange={addTask}
         />
        <button onClick={''} className="btn-input" type='submit'>Add!</button>
    </div>
   );
}

export default TodoForm;