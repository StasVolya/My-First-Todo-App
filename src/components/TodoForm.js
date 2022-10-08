import React, { useEffect, useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");
  
  const saveTodo = () => {
    {
      if (value.length < 1) {
        alert("Add not empty task, please!");
      } else {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            title: value,
          },
        ]);
        setValue("");
      }
    }
  };



  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      saveTodo(e)
    }
  }

  return (
    <div className="wrapper-input">
      <input
        placeholder="Create a new todo..."
        className="input-todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="btn-input" onClick={saveTodo}>
        Add!
      </button>
    </div>
  );
};

export default TodoForm;
