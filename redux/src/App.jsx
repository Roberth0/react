import { useDispatch, useSelector } from 'react-redux'

export const reducer = (state = 0, action) => {
  let { type, payload } = action

  switch (type) {
    case "incrementar":
      return state + 1
    case "decrementar":
      return state - 1
    case "set":
      return payload
  }
}


function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const increment = () => {
    dispatch({ type: "incrementar" })
  }

  const decrement = () => {
    dispatch({ type: "decrementar" })
  }

  const setValue = () => {
    dispatch({ type: "set", payload: 5 })
  }
  return (
    <div>
      <h1>Redux</h1>
      <p>Contador {state}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={setValue}>Set</button>
    </div>
  )
}

export default App
