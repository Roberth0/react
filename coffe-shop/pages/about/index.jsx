import styles from './About.module.css'

export default function About({ data }) {
  return (
    <div className={styles.container}>
      {data.map((user) => (
        <div key={user.id}>
          <label className={styles.name}>{user.name}</label>
          <br />
          <label>{user.email}</label>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  let res = await fetch('https://jsonplaceholder.typicode.com/users')
  let response = await res.json()
  return {
    props: { data: response },
  }
}
