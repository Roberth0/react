import "./Form.css"
import Button from './Button'

function Form ({ name, lastname, email, onSubmit, handleChange }) {

  const style = {
    margin: "0 auto",
    marginTop: "5%",
    width: "30%",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "5px 10px 15px rgb(34, 34, 34, 0.14)",
  }

  return (
    <form style={style} className="form" onSubmit={onSubmit}>
      <p>Name</p>
      <input type="text" name="name" value={name} placeholder="Name" autoComplete="off" onChange={handleChange}/>
      <p>Lastname</p>
      <input type="text" name="lastname" value={lastname} placeholder="Lastname" autoComplete="off" onChange={handleChange}/>
      <p>Email</p>
      <input type="email" name="email" value={email} placeholder="Email" autoComplete="off" onChange={handleChange}/>
      <br/>
      <Button className="send" />
    </form>
  )
}

export default Form
