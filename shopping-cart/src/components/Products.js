import Producto from './Producto'

export default function Products({ products, addToCar }) {
  return (
    <>
      {products.map(product =>
        <Producto 
          product={product} 
          addToCar={addToCar} 
          key={product.name}
        />)}
    </>
  );
}
