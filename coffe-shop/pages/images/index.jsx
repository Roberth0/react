import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Layout from '../../components/Layout'

export default function Images({ data }) {
  return (
    <Layout>
      <div className={styles.container}>
        <p>Image component</p>
        <div>
          {data.map(item => {
            return (
              <Image src={item.urls.raw} width={450} height={300} layout="responsive" alt="landscape" />
            )
          })}
        </div>
      </div>
    </Layout>
  )

}

export async function getStaticProps() {
  let res = await fetch("https://api.unsplash.com/search/photos?per_page=5&query=landscape", {
    headers: {
      Authorization: 'Client-ID km5m4NtAQ-9Mc5csblhzWq7hqHiSzxXyI-5rFddHMfs',
      'Accept-Version': 'v1',
    },
  })
  let { results } = await res.json()
  return {
    props: { data: results }
  }
}
