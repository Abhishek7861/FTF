// Your main component (e.g., App.js)

import React, { useState } from 'react';
import Modal from './Modal';
import './MainModal.css';

const MainModal = (props) => {

    const openModal = () => {
        props.setIsModalOpen(true);
    };

    const closeModal = () => {
        props.setIsModalOpen(false);
    };
    console.log(props.modalData);
    return (
        <div>
            <Modal isOpen={props.isModalOpen} closeModal={closeModal}>
                <h3>Dress Id: {props.modalData.name}</h3>
                <img className="modal--image" src={props.modalData.src}></img>
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Value</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.modalData.attributes.map(data => (
                            <tr>
                                <td>{data.attribute_type}</td>
                                <td>{data.attribute}</td>
                                <td>{data.score}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </Modal>
        </div>
    );
};

export default MainModal;
