function View( {data} ){

  const style = {
    view : {
      width: "30%",
      margin: "20px auto",
      backgroundColor: "#1376D4",
      padding: "20px",
      color: "#fff",
      borderRadius: "10px",
      boxShadow: "5px 10px 15px rgb(34, 34, 34, 0.14)",
    }
  }

  return (
    <div style={style.view}>
      {data.map( user => 
        <p key={user.name}> {user.name} {user.lastname} : {user.email}</p>
      )}
    </div>
  )
}

export default View
