import styles from './../styles/login.module.css'
import { useState } from 'react'
import Router from 'next/router'


function Login() {
  const [state, setState] = useState({ username: '', passwd: '' })

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    let username = e.target[0].value
    let passwd = e.target[1].value

    if (username == 'juan' && passwd == '12') {
      setState({ username: '', passwd: '' })
      Router.push("/home")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
      <h2 style={{fontSize: "32px"}}>Login</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          
          <label className={styles.labelName}>Username</label>
          <input className={styles.label} name='username' type='text' onChange={handleChange} value={state.username} autoComplete="off" />
          <label className={styles.labelName}>Password</label>
          <input className={styles.label} name='passwd' type='password' value={state.passwd} onChange={handleChange} />

          <input className={styles.button} type='submit' value="Login" />
          {/* <button className={styles.button}>Login</button> */}
        </form>
      </div>
    </div>
  )
}

export default Login
