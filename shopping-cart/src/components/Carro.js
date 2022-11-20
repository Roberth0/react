import React, { useState } from "react";
import Bubble from "./Bubble";
import CarView from "./CarView.js"

const styles = {
  carro: {
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    backgroundColor: "#3AAA49",
    padding: "5px 10px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 18,
  },
};


export default function Carro({ item, car }) {

  const [showCar, setShowCar] = useState(false);

  const handleClick = () => {
    setShowCar(!showCar);
  }

  return (
    <div>
      {showCar ? <CarView car={car}/> : <Bubble item={item}/> }
      <button style={styles.carro} onClick={handleClick}>Carro</button>
    </div>
  );
}
