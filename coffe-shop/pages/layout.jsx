import Link from 'next/link'
import styles from '../styles/Layout.module.css'

let pages = [
  {
    path: '/',
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
]

export default function Layout({ children }) {
  return (
    <>
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
      <main>{children}</main>
    </>
  )
}
