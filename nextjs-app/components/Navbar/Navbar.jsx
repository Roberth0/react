import style from '../../styles/home.module.css'
import Link from 'next/link'

const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Posts",
    route: "/posts",
  },
]

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.nav}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
