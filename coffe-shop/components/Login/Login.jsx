import style from './Login.module.css'
import { useState } from 'react'
import Home from './../Home/Home'
let logged = false;

const handleSubmit = (e) => {
  e.preventDefault()
  let username = e.target[0].value
  let passwd = e.target[1].value

  if (username == 'juan' && passwd == '12') {
    console.log("it does work")
    logged = !logged
  }
}

function Login() {
  const [state, setState] = useState({ username: '', passwd: '' })

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value })
  }

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name='username'
          type='text'
          onChange={handleChange}
          value={state.username}
        />
        <label>Password</label>
        <input
          name='passwd'
          type='password'
          value={state.passwd}
          onChange={handleChange}
        />
        <input type='submit' />
      </form>
      {logged ? <Home/> : console.log("not logged")}
    </div>
  )
}

export default Login
