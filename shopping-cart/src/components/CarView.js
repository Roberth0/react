const style = {
  container: {
    width: "200px",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.08)",
    top: 50,
    right: 20,
    padding: "5px",
  },
  product: {
    width: "100%",
    margin: "2px 0",
    display: "flex",
    justifyContent: "space-between",

  },
};

export default function CarView({ car }){
  return(
    <div style={style.container}>
    {car.length ?
      car.map( item => 
        <div style={style.product} key={item.name}>
          <div style={{width: "50px"}} >
            <img style={{width: "100%" }} src={item.img} alt={item.name}/>
          </div>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
        </div>) : <div>No hay productos seleccionados</div>}
    </div>
  );
}
