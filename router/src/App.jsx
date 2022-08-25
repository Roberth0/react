import { Routes, Route, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p> Home</p>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <p> About</p>
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
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
