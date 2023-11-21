import React, { useState } from 'react';
import './AttributeCarouselCard.css';

export default function AttributeCarouselCard(props) {
    const [infoPosition, setInfoPosition] = useState({ x: 0, y: 0 });
    const [showInfo, setShowInfo] = useState(false);

    const handleMouseEnter = (e) => {
        const { clientX, clientY } = e;
        const imageRect = e.target.getBoundingClientRect();
        var offsetX = clientX - imageRect.left;
        var offsetY = clientY - imageRect.top;
        if (offsetX > 140) { offsetX = 0; }
        if (!showInfo) {
            setInfoPosition({ x: offsetX + 55, y: offsetY + 55 });
            setShowInfo(true);
        }

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
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>style</td>
                                    <td>bohemian</td>
                                    <td>0.9348</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>feminine</td>
                                    <td>0.987</td>
                                </tr>
                                <tr>
                                    <td>colours</td>
                                    <td>ecru</td>
                                    <td>0.098</td>
                                </tr>
                                <tr>
                                    <td>pattern</td>
                                    <td>dots</td>
                                    <td>0.4345</td>
                                </tr>
                                <tr>
                                    <td>ocassion</td>
                                    <td>semi-formal</td>
                                    <td>0.6498</td>
                                </tr>
                                <tr>
                                    <td>skirt_type</td>
                                    <td>a-line</td>
                                    <td>0.654</td>
                                </tr>
                                <tr>
                                    <td>sleeve_type</td>
                                    <td>straight-sleeve</td>
                                    <td>0.6745</td>
                                </tr>
                                <tr>
                                    <td>skirt_length</td>
                                    <td>mini</td>
                                    <td>0.457456</td>
                                </tr>
                                <tr>
                                    <td>neckline_type</td>
                                    <td>v-neck</td>
                                    <td>0.436</td>
                                </tr>
                                <tr>
                                    <td>sleeve_length</td>
                                    <td>short-sleeve</td>
                                    <td>0.362</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <h2 className="card-name">{props.name}</h2>
            <h4 className="card-name">{"image count : " + props.imageCount}</h4>
        </div>
    )
}
