import Head from 'next/head'
import Header from "./Header"

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Coffe App</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <footer>
                All rights reserved 2022
            </footer>
        </div>
    )
}
