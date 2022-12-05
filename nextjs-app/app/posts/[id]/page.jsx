const page = ({ params }) => {
  console.log(params)
  let { id } = params
  return <div>Esto es el post {id}</div>
}

export default page
