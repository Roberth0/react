import { useRef } from 'react'

function App() {

  const field = useRef()
  const field2 = useRef()

  const submit = () => {
    console.log(field.current)
    // let data = {field.current.name : field.current.value}
  }

  return (
    <div>
      <div>
        <span> Campo 1</span>
        <input name="field" type="text" ref={field}/>
      </div>
      <input name="field2" type="date" ref={field2}/>
      <input type="submit" onClick={submit}/>
    </div>
  )
}
export default App
