import { useState } from 'react';
import useForm from './hooks/useForm'
import './App.css';
import Form from './components/Form'
import View from './components/View'

function App() {

  const onSubmit = e => {
    e.preventDefault()
    if(form.name === "") return
    setData(data.concat(form))
    reset()
  }

  const [data, setData] = useState([{name: "Juan", lastname: "perez", email: "someone@example.com"}])
  const [form, setForm, reset] = useForm({name: "", lastname: "", email: ""})

  return (
    <div className="App">
      <Form 
        name={form.name} 
        lastname={form.lastname} 
        email={form.email} 
        onSubmit={onSubmit}
        handleChange={setForm}
      />
      <View data={data}/>
    </div>
  );
}

export default App;
