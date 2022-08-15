import { useField } from 'formik'

function Checkbox({ children, ...props }) {

  const [field, meta] = useField({ ...props, type: "checkbox" })

  return (
    <div className="check-container">
      <label>
        <input type="checkbox" {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? <div style={{ color: "red" }}> {meta.error}</div> : null}
    </div>
  )
}

export default Checkbox
