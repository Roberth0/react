import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Title from "./components/Title";
import "./App.css";
import Layout from "./components/Layout";

function App() {

  const addToCar = (product) => {

    if(car.find(item => item.name === product.name)){
      let newCar = car.map( item => item.name === product.name ? ({...item, quantity: item.quantity + 1}) : item);
      return setCar(newCar);
    }

    return setCar(car.concat({...product, quantity: 1}));
  };

  const [car, setCar] = useState([]);

  const [products, setProducts] = useState([
    { name: "Tomate", price: 200, img: "/productos/tomate.jpg" },
    { name: "Lechuga", price: 150, img: "/productos/lechuga.jpg" },
    { name: "Arbejas", price: 100, img: "/productos/arbejas.jpg" },
  ]);

  let totalItems = car.reduce( (total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar item={totalItems} car={car}/>
      <Layout>
        <Title/>
        <div className="App">
          <Products
            addToCar={addToCar}
            products={products}
          />
        </div>
      </Layout>
    </>
  );
}

export default App;
