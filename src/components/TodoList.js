import { useState } from "react"

const TodoList = ({todos, setTodos}) => {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')

  const deleteTodos = (id) => {
    const newTodos = [...todos].filter(item => item.id !== id)
    setTodos(newTodos)
  }

  const editTodos = (id, title) => {
    setEdit(id)
    setValue(title)
  }

  const saveTodo = (id) => {
    const newTodo = [...todos].map(item => {
      if (item.id === id) {
        item.title = value
      }
      return item
  })
    setTodos(newTodo)
    setEdit(null)
  }

  return (
    <div className="list-wrapper">
      {
        todos.map( item => (
          <div key={item.id}>
            {
              edit == item.id ? <div>
                <input className="edit-input" value={value} onChange={(e) => setValue(e.target.value)} />
                <button className="edit-btn" onClick={(e) => saveTodo(item.id)}>Save</button>
              </div>
              :
              <div className="list-todo">{item.title}</div>
            }
            <button className="list-todo-btn" onClick={() => deleteTodos(item.id)}>Delete</button>
            <button className="list-todo-btn" onClick={() => editTodos(item.id, item.title)}>Edit</button>
          </div>
        )) 
      }
    </div>
  )
}

export default TodoList