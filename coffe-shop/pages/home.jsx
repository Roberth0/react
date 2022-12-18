import styles from './../styles/Home.module.css'
import useUser from './../hooks/useUser'
import Layout from '../components/Layout'

export default function Home({ data }) {
  const user = useUser("a")
  if (!user) return null

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
