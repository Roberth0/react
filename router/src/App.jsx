import { Routes, Route, Link, useParams, NavLink, useMatch, useLocation } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1> Home </h1>
    </div>
  )
}


const Contact = () => {
  const match = useMatch()
  console.log(match)
  return (
    <h3> Contact </h3>
  )
}

const About = () => {
  const params = useParams()
  return (
    <div>
      <h1> About </h1>
      <ul>
        <li>
          <NavLink style={{ color: "red" }} to="/about/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/about/:info" element={<Contact />} />
      </Routes>
    </div>
  )
}


const Error = () => {
  return (
    <div>
      <p>404 Page not found!</p>
    </div>
  )
}
function useQuery() {
  return new URLSearchParams(useLocation().search)

}

function App() {
  const urlquery = useQuery()
  let name = urlquery.get("name");
  console.log("Name=", name)
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
