import { createContext, useContext } from 'react';

const Context = createContext('default value')


function App() {

  return (
    <Context.Provider value={'context value'}>
      <div>
        <p> Hey there this is a test</p>
        <p> Live server working </p>
        <Section />
      </div>
    </Context.Provider>
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
