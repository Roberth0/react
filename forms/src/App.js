import { useState } from "react"

function App () {
  const [data, setData] = useState({ campo: "", num: "1", sel: "", check: true, "radio-group": "radio"})

  const handleChange = ({ target }) => {
    setData({...data, [target.name]: target.type === "checkbox" ? target.checked : target.value});
  }

  console.log(data);
  return (

    <div>
      <div> Controlled Form </div>
      <span> campo</span>
      {data.campo.length > 8 ? <span> campo lleno </span> : null}
      <input name="campo" type="text" value={data.campo} onChange={handleChange}/>
      <br/>
      <input type="number" name="num" value={data.num} onChange={handleChange} />
      <select value={data.sel} onChange={handleChange} name="sel">
        <option value="" >Default </option>
        <option value="1" >opcion 1 </option>
        <option value="2" >opcion 2 </option>
        <option value="3" >opcion 3 </option>
      </select>


      <div>
        <input 
          type="checkbox"
          name="check"
          checked= {data.check}
          onChange = {handleChange}
        />
      </div>

      <div onChange={handleChange} >
        <input type="radio" value="radio" name="radio-group" checked={data["radio-group"] === "radio"}/> Opcion 1
        <input type="radio" value="radio2" name="radio-group"/> Opcion 2
        <input type="radio" value="radio3" name="radio-group"/> Opcion 3
      </div>
    </div>
  )


}


export default App
