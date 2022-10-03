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
      if (item.id == id) {
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
                <input value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={(e) => saveTodo(item.id)}>Save</button>
              </div>
              :
              <div>{item.title}</div>
            }
            <button onClick={() => deleteTodos(item.id)}>Delete</button>
            <button onClick={() => editTodos(item.id, item.title)}>Edit</button>
          </div>
        )) 
      }
    </div>
  )
}

export default TodoList