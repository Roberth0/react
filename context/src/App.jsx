import { createContext, useContext } from 'react';

const Context = createContext('default value')

const Provider = ({ children }) => {
  return (
    <Context.Provider value={"context value"}>
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
  const ctx = useContext(Context)
  return (
    <>
      <div> Section Component </div>
      <div> {ctx}</div>
    </>
  )
}

export default App;
