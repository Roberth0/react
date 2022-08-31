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
  }
  return state
}

const Item = ({ todo }) => {
  return (
    <li>{todo.title}</li>
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
      title: value,
    }
    dispatcher({ type: "todo/add", payload: todo })
    setValue("")
  }
  console.log({ state })


  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder="Task description" value={value} onChange={e => setValue(e.target.value)} />
        <input type="submit" />
      </form>
      <ul>
        {state ? state.entities.map(todo => <Item key={todo.id} todo={todo} />) : null}
      </ul>
    </div>
  )
}

export default App
