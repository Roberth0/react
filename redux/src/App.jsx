import { useDispatch, useSelector } from "react-redux"

const initialState = {
  entities: [],
}


export const reducer = (state = initialState, action) => {
  let { type } = action
  switch (type) {
    case "todo/add":
      console.log("reducer")
      // return state.entities = [{}]
      return { ...state, entities: [{}] }
  }
  return state
}


const App = () => {
  const dispatcher = useDispatch()
  const state = useSelector(x => x)

  console.log(state, "renderizado")
  return (
    <div>
      <form>
        <input type="text" placeholder="Task description" />
        <input type="submit" />
      </form>
      <button onClick={() => dispatcher({ type: 'todo/add' })}>Add todo</button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  )
}

export default App
