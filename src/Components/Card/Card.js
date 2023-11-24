import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";


export default function Card(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.src} alt="product image" />
      <Link to={"/trend-detail?" + "trend" + "=" + props.name}>
        <h2 className="card-name">{props.name}</h2>
      </Link>
      <h4>{" "}</h4>
      {/* <h4 className="card-name">{"image count : "+props.imageCount}</h4> */}
    </div>
  );
}