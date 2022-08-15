import { useField } from 'formik'

function Input({ label, ...props }) {

  const [field, meta] = useField(props)
  return (

    <div>
      <label>{label}</label>
      <input {...field} />
      {meta.touched && meta.error ? <div style={{ color: "red" }}> {meta.error} </div> : null}
    </div>
  )

}

export default Input 
