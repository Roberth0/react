import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createStore } from 'redux'

const store = createStore((state = "adf", action) => {
  console.log({ state, action })
  // action = {type: "typename", payload: any}
  let { payload } = action
  console.log("Estado actualizado ", payload);
  state = payload;
  return state;
})

console.log(store);
store.dispatch({ type: "estado1", payload: 10 })
console.log(store.getState());
store.dispatch({ type: "estado2", payload: 20 })
console.log(store.getState());
store.dispatch({ type: "estado3", payload: 30 })
console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
