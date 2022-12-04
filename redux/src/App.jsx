import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { combineReducers } from 'redux'

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'todo/add':
      return state.concat({ ...action.payload })

    case 'todo/completed':
      let newTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed
          return todo
        }
        return todo
      })
      return newTodos
    default:
      return state
  }
}

export const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'todo/filter':
      return action.payload
    default:
      return state
  }
}

export const reducer = combineReducers({
  entities: todosReducer,
  filter: filterReducer,
})

const showTodos = ({ entities, filter }) => {
  if (filter == 'incompleted') {
    return entities.filter((todo) => !todo.completed)
  }

  if (filter == 'completed') {
    return entities.filter((todo) => todo.completed)
  }
  return entities
}

const Item = ({ todo }) => {
  const dispatcher = useDispatch()

  const handleClick = () => {
    dispatcher({ type: 'todo/completed', payload: todo })
  }
  return (
    <li
      style={{ color: todo.completed ? 'green' : 'red' }}
      onClick={handleClick}
    >
      {todo.title}
    </li>
  )
}

const App = () => {
  const dispatcher = useDispatch()
  const todos = useSelector(showTodos)
  const [value, setValue] = useState('')

  const submit = (e) => {
    e.preventDefault()

    let todo = {
      id: Math.random().toString(36),
      completed: false,
      title: value,
    }
    dispatcher({ type: 'todo/add', payload: todo })
    setValue('')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='Task description'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>

      <button
        onClick={() => dispatcher({ type: 'todo/filter', payload: 'all' })}
      >
        Mostrar todos
      </button>

      <button
        onClick={() =>
          dispatcher({ type: 'todo/filter', payload: 'completed' })
        }
      >
        Completados
      </button>

      <button
        onClick={() =>
          dispatcher({ type: 'todo/filter', payload: 'incompleted' })
        }
      >
        Incompletos
      </button>

      <ul>
        {todos.map((todo) => (
          <Item key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
