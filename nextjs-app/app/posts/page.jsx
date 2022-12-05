function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  )
}

async function Posts() {
  const data = await fetchPosts()
  return (
    <section>
      <p> Posts mostrados</p>
      {data.map((post) => {
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      })}
    </section>
  )
}

export default Posts
