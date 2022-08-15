import { Formik, Form } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import Input from './components/Input'
import ContainerForm from './components/ContainerForm'
import Section from './components/Section'
import Button from './components/Button'
import Result from './components/Result'


const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

function App() {
  const [balance, setBalance] = useState(0)
  const [showBalance, setShowBalance] = useState(false)

  const getBalance = ({ deposit, contribution, years, interest }) => {
    let total = Number(deposit)
    for (let i = 0; i < Number(years); i++) {
      total = (total + Number(contribution)) * (Number(interest) + 1)
    }

    setBalance(formatter.format(Math.round(total)))
    setShowBalance(true)
  }

  return (
    <ContainerForm>
      <Section>
        <Formik
          initialValues={{ deposit: '', contribution: "", years: "", interest: "" }}
          onSubmit={getBalance}
          validationSchema={Yup.object({
            deposit: Yup.number().required("Obligatorio").typeError("Debe ser un numero"),
            contribution: Yup.number().required("Obligatorio").typeError("Debe ser un numero"),
            years: Yup.number().required("Obligatorio").typeError("Debe ser un numero"),
            interest: Yup
              .number()
              .required("Obligatorio")
              .typeError("Debe ser un numero")
              .min(0, 'Valor minimo 0')
              .max(1, "Valor maximo 1")
          })}
        >
          <Form>
            <Input label="Initial Deposit" name="deposit" />
            <Input label="Annual Contribution" name="contribution" />
            <Input label="Years" name="years" />
            <Input label="Interest" name="interest" />
            <Button>Calculate</Button>
          </Form>
        </Formik>
        {showBalance && <Result>Balance final: {balance} </Result>}
      </Section>
    </ContainerForm>
  )
}

export default App
