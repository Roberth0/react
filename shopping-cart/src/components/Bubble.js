import React from "react";
const sytles = {
  bubble: {
    backgroundColor: "#C62E5E",
    borderRadius: "15px",
    color: "#fff",
    padding: "2px 10px",
    fontSize: "0.9rem",
    width: "20px",
    position: "relative",
    top: 18,
    left: 12,
  },
};

export default function Bubble({ item }) {
  const showItem = item => item > 9 ? "9+" : item;

  return ( 
    <span 
      style={sytles.bubble}>
      {showItem(item)}
    </span>
  );
}
