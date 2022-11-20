
const styles = {
  btn: {
    border: "none",
    color: "#fff",
    backgroundColor: "#26539A",
    padding: "10px",
    borderRadius: "5px",
    margin: "5px 0",
    cursor: "pointer",
  },
};

export default function Producto({ product, addToCar }){ 
  return(
    <div className="product-card">
      <img src={product.img} alt={product.name}></img>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button style={styles.btn} onClick={() => addToCar(product)}>
        Agregar
      </button>
    </div>
  )
}

