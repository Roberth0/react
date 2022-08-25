import { Routes, Route, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1> Home </h1>
    </div>
  )
}


const Contact = () => {
  return (
    <h3> Contact </h3>
  )
}

const About = () => {
  return (
    <div>
      <h1> About </h1>
      <ul>
        <li>
          <Link to="/about/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/about/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
