import { createContext, useContext, useState } from 'react';

const Context = createContext('default value')

const Provider = ({ children }) => {

  const [value, setValue] = useState(false)

  const data = {
    value,
    toggle: () => setValue(!value)
  }

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}


function App() {

  return (
    <Provider>
      <div>
        <p> Hey there this is a test</p>
        <p> Live server working </p>
        <Section />
      </div>
    </Provider>
  );
}

const Section = ({ }) => {
  const { value, toggle } = useContext(Context)
  return (
    <>
      <label>{value.toString()}</label>
      <button onClick={toggle}>Click Me </button>
    </>
  )
}

export default App;
