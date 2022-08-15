import { useField } from "formik"

function Select({ label, ...props }) {

  const [field, meta] = useField(props)

  return (
    <div>
      <label> {label} </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <div style={{ color: "red" }}>{meta.error}</div> : null}
    </div>
  )
}

export default Select
