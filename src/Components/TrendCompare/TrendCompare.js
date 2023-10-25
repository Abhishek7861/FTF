import React, { useState } from 'react';
import TrendLineChart from '../TrendLineChart/TrendLineChart'
import Table from '../Table/Table'
import DropDown from '../DropDown/DropDown'
import './TrendCompare.css'

export default function TrendCompare() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrend, setselectedTrend] = useState("⨁ Compare Trend");

  const toggleDropdown = (value) => {
    setIsOpen(!isOpen);
    setselectedTrend(value);
  };

  

  return (
    <div>
      <div className='TrendCompare-header'>
        <div className='trendcompare-heading'>
        <h3>Selected Trend Name: XYZ</h3>
        </div>
        <div className='trendcompare-select-heading'>
          {!isOpen &&<h3 onClick={toggleDropdown}> {selectedTrend}</h3>}
          {isOpen &&<DropDown onChange={toggleDropdown} selectMessage="Select Trend" selectOptions={[{value:"trend 1", label:"trend 1"},{value:"trend 2", label:"trend 2"},{value:"trend 3", label:"trend 3"},{value:"trend 4", label:"trend 4"}]}/>}
        </div>
      </div>
      <TrendLineChart></TrendLineChart>
      <Table></Table>
    </div>
  )
}
