import styles from './../styles/Home.module.css'
import Layout from './layout'

export default function Home({ data }) {
    return (
        <Layout>
            <div className={styles.container}>
                {data.slice(0, 5).map(item => (
                    <article key={item.id}>
                        <h4 className={styles.title}>{item.title}</h4>
                        <p>{item.body}</p>
                    </article>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
        props: { data },
    }
}
