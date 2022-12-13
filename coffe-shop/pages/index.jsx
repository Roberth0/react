import Head from 'next/head'
import Header from './../components/Header'

export default function Root() {
  return (
    <div>
      <Head>
        <title>Coffe App</title>
      </Head>
      <Header />
      <main>
        <p>main component of the page</p>
      </main>
    </div>
  )
}
