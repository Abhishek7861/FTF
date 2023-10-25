import React from 'react';
import { useState } from 'react';
import './DropDown.css';


export default function DropDown({onChange, selectMessage, selectOptions,selectedOption}) {

    const handleSelect = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="dropdown-container">
            <select className="dropdown" value={selectedOption} onChange={handleSelect}>
                <option value="">{selectMessage}</option>
                {selectOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}
