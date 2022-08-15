const { useState } = require("react");

function useForm(initialData) {
  const [data, setData] = useState(initialData)

  const handleForm = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const reset  = () => setData(initialData)

  return [data, handleForm, reset]
}

export default useForm
