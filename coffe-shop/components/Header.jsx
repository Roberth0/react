import Link from 'next/link'
import styles from './../styles/Layout.module.css'

let pages = [
  {
    path: '/home',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/images',
    name: 'Images',
  },
  {
    path: '/products',
    name: 'Productos'
  }
]

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          {pages.map(page => {
            return (
              <li key={page.name}>
                <Link href={page.path}>{page.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
