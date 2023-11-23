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

    return (
        <div>
            <Modal isOpen={props.isModalOpen} closeModal={closeModal}>
                <h3>Dress Name</h3>
                <img className="modal--image" src='https://storage.googleapis.com/ff-stl-blogger-images/clubllondon/393085909_1479156646267856_5738207027951431471_n.jpg'></img>
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
                    </tbody>
                </table>
            </Modal>
        </div>
    );
};

export default MainModal;
