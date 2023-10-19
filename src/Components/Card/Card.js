import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img className="product--image" src="https://cars.tatamotors.com/images/harrier/harrier-banner-m.jpg" alt="product image" />
      <h2>{props.name}</h2>
    </div>
  );
}