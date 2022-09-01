import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'

const initialState = {
  entities: [],
}


export const reducer = (state = initialState, action) => {
  let { type, payload } = action
  switch (type) {
    case "todo/add":
      return { ...state, entities: state.entities.concat(payload) }
    case "todo/completed":
      let newTodos = state.entities.map(todo => {
        if (todo.id === payload.id) {
          todo.completed = !todo.completed
          return todo
        }
        return todo
      })
      return { ...state, entities: newTodos }
  }
  return state
}

const Item = ({ todo }) => {
  const dispatcher = useDispatch()

  const handleClick = () => {
    dispatcher({ type: "todo/completed", payload: todo })
  }
  return (
    <li style={{ color: todo.completed ? "green" : "red" }} onClick={handleClick}>{todo.title}</li>
  )
}



const App = () => {
  const dispatcher = useDispatch()
  const state = useSelector(x => x)
  const [value, setValue] = useState("")


  const submit = e => {
    e.preventDefault()

    let todo = {
      id: Math.random().toString(36),
      completed: false,
      title: value,
    }
    dispatcher({ type: "todo/add", payload: todo })
    setValue("")
  }


  return (
    <div>

      <form onSubmit={submit}>
        <input type="text" placeholder="Task description" value={value} onChange={e => setValue(e.target.value)} />
      </form>

      <button>Mostrar todos</button>
      <button>Completados</button>
      <button>Incompletos</button>

      <ul>
        {state.entities.map(todo => <Item key={todo.id} todo={todo} />)}
      </ul>

    </div>
  )
}

export default App
