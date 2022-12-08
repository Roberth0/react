import style from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <div className={style.container}>
      {data.slice(0, 5).map((item) => (
        <article key={item.id}>
          <h4 className={style.title}>{item.title}</h4>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: { data },
  }
}
