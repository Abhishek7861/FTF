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

    const openModal = () => {
        props.setModalData(props)
        console.log(props);
        props.setIsModalOpen(true);
    }
    return (
        <div className="card">
            <div className="image-container">
                <img className="product--image"
                    src={props.src}
                    alt="Description"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={openModal}
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
                                {props.attributes.map(data => (
                                    <tr>
                                        <td>{data.attribute_type}</td>
                                        <td>{data.attribute}</td>
                                        <td>{data.score}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <h2 className="card-name">Dress id: {props.name}</h2>
        </div>
    )
}
