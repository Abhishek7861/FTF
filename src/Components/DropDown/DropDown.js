import React from 'react';
import { useState } from 'react';
import './DropDown.css';


export default function DropDown({selectMessage, selectOptions}) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (e) => {
        setSelectedOption(e.target.value);
    };
    
    return (
        <div className="dropdown-container">
            <select className="dropdown" value={selectedOption} onChange={handleSelect}>
                <option value="">{selectMessage}</option>
                {selectOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            {selectedOption && <p>You selected: {selectedOption}</p>}
        </div>
    )
}
