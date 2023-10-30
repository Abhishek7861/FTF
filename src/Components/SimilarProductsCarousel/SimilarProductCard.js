import React from "react";
import { Link } from "react-router-dom";

export default function SimilarCardProduct(props) {
    return (
        <div className="card">
            <img className="product--image" src={props.src} alt="product image" />
            <h3 className="card-name">{"Description: " + props.description}</h3>
            <Link to={props.product_url}>
                <h3 className="card-name">{"Price: " + props.price}</h3>
            </Link>
        </div>
    );
}