import React, { useState, useEffect } from 'react';
import TrendLineChart from '../TrendLineChart/TrendLineChart'
import Table from '../Table/Table'
import DropDown from '../DropDown/DropDown'
import './TrendCompare.css'
import get from '../../Apis/Apis';

export default function TrendCompare(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrend, setselectedTrend] = useState("⨁ Compare Trend");
  const [trendsList, setTrendsList] = useState([]);

  const toggleDropdown = (value) => {
    setIsOpen(true);
    setselectedTrend(value);
  };
  
  useEffect(() => {
    get("/get_unique_trends")
      .then(response => {
        const trendList = response.data.map(obj => ({
          value: obj,
          label: obj
        }));
        setTrendsList(trendList)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <div className='TrendCompare-header'>
        <div className='trendcompare-heading'>
        <h3>Selected Trend Name: {props.trend}</h3>
        </div>
        <div className='trendcompare-select-heading'>
          {!isOpen &&<h3 onClick={toggleDropdown}> {selectedTrend}</h3>}
          {isOpen &&<DropDown onChange={toggleDropdown} selectMessage="Select Trend" selectOptions={trendsList}/>}
        </div>
      </div>
      <TrendLineChart trend = {props.trend} selectedTrend={selectedTrend}></TrendLineChart>
      <Table></Table>
    </div>
  )
}
