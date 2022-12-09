import React from 'react'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>{children}</div>
    </>
  )
}
