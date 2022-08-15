import styled from 'styled-components'
import { useField } from 'formik'

const Container = styled.div`
  margin-bottom: 10px;
`

const Label = styled.label`
  color: #000;
  margin-bottom: 5px;
  display: block;
`
const CustomInput = styled.input`
  outline: none;
  padding: 5px 3px;
  border: 1px solid #1258ee;
  width: 100%;
  margin-bottom: 5px;
`
const ErrorMessage = styled.div`
  color: #f00;
  margin-bottom: 5px;
`

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Container>
      <Label>{label}</Label>
      <CustomInput {...field} {...props} />
      {meta.touched && meta.error ? (<ErrorMessage>{meta.error}</ErrorMessage>) : null}
    </Container>
  )
}

export default Input


