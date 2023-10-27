import React from 'react'
import "./SocialImageCardCarousel.css";
import { Link } from "react-router-dom";

export default function SocialImageCard(props) {
    return (
        <div className="card">
          <img className="product--image" src={props.src} alt="product image" />
          <Link to={props.postUrl}>
            <h2 className="card-name">{"username: "+props.userName}</h2>
          </Link>
          <div className='LikesAndComments'>
          <h2 className="comments">{"Comments: "+ props.noOfComments}</h2>
          <h2 className="comments">{"Likes: " +props.noOfLikes}</h2>
          </div>
        </div>
      );
}
