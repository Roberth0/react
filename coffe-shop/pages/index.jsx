
import Login from '../components/Login'
import Head from 'next/head'

export default function Root() {
  return (
    <div>
      <Head>
        <title>Login Page</title>
      </Head>
      <main>
        <Login/>
      </main>
    </div>
  )
}
