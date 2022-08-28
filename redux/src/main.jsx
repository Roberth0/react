import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createStore } from 'redux'


const store = createStore((state = 0, action) => {
  let { type } = action;

  switch (type) {
    case 'incrementar': {
      return state + 1
    }
    case 'decrementar': {
      return state - 1
    }
    default:
      return state
  }
})

store.dispatch({ type: 'incrementar' })
store.dispatch({ type: 'incrementar' })
store.dispatch({ type: 'incrementar' })
console.log(store.getState())
store.dispatch({ type: 'decrementar' })
console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
