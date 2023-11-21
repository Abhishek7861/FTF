import React, { useState } from 'react';
import './AttributeCarouselCard.css';

export default function AttributeCarouselCard(props) {
    const [infoPosition, setInfoPosition] = useState({ x: 0, y: 0 });
    const [showInfo, setShowInfo] = useState(false);

    const handleMouseEnter = (e) => {
        console.log(e);
        const { clientX, clientY } = e;
        console.log(clientX, clientY);
        // setInfoPosition({ x: clientX, y: clientY });
        setShowInfo(true);
    };

    const handleMouseLeave = () => {
        setShowInfo(false);
    };
    return (
        <div className="card">
            <div className="image-container">
                <img className="product--image"
                    src="https://storage.googleapis.com/ff-stl-blogger-images/clubllondon/393085909_1479156646267856_5738207027951431471_n.jpg"
                    alt="Description"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                {showInfo && (
                    <div
                        className="info-box"
                        style={{ top: infoPosition.y, left: infoPosition.x }}
                    >
                        <h3>Dress Attributes</h3>
                        <b>Value </b> value 1 <br/>
                        <b>Value </b> value 1 <br/>
                        <b>Value </b> value 1 <br/>
                        <b>Value </b> value 1 <br/>
                        <b>Value </b> value 1 <br/>
                        <b>Value </b> value 1 <br/>
                    </div>
                )}
            </div>
            <h2 className="card-name">{props.name}</h2>
            <h4 className="card-name">{"image count : " +props.imageCount}</h4>
        </div>
    )
}
