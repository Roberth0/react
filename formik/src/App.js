import "./App.css"
import { Formik, Form, ErrorMessage } from "formik"
import Input from "./components/Input"
import Checkbox from "./components/Checkbox"
import Select from "./components/Select"
import Radio from "./components/Radio"

const validate = (values) => {

  const errors = {}

  if (values.name === "Alex" || !values.name) {
    errors.name = "Name already used"
  }
  if (values.lastname === "Romero" || !values.lastname) errors.lastname = "Used"
  if (!values.gender) errors.gender = "Not gender selected"
  if (!values.group) errors.group = "Not group selected"

  return errors
}

const onSubmit = val => {
  console.log(val)
}

function App() {


  return (
    <Formik
      initialValues={{ name: "", email: "", lastname: "", gender: "", group: "", term: "" }}
      validate={validate}
      onSubmit={onSubmit}
    >
      <div className="container">
        <Form>
          <Input name="name" label="Name" />
          <Input name="lastname" label="Lastname" />
          <Input name="email" label="Email" />

          <Checkbox name="term">
            Aceptar terminos y condiciones
          </Checkbox>

          <Select name="gender" label="Conditions">
            <option value="">Select one </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>

          <Radio label="1" name="group" value="1" />
          <Radio label="2" name="group" value="2" />
          <Radio label="3" name="group" value="3" />
          <Radio label="4" name="group" value="4" />
          <ErrorMessage name="group" />

          <br />
          <button type="submit"> Send</button>
        </Form>
      </div>
    </Formik >
  );
}

export default App;
