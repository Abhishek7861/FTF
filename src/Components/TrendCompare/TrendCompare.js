import React, { useState, useEffect } from 'react';
import TrendLineChart from '../TrendLineChart/TrendLineChart'
import Table from '../Table/Table'
import DropDown from '../DropDown/DropDown'
import './TrendCompare.css'
import get from '../../Apis/Apis';

export default function TrendCompare(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrend, setselectedTrend] = useState("compare trend");
  const [trendsList, setTrendsList] = useState([]);


  const toggleDropdown = (value) => {
    setIsOpen(true);
    setselectedTrend(value);
  };

  useEffect(() => {
    // if(props.selectedTrendCategory!=null){
    get("/get_unique_categories_with_trends")
      .then(response => {
        const trendList = [];
        const list = response.data
          .filter(obj => obj._id == props.selectedTrendCategory)[0];

        for (let i = 0; i < list.trends.length; i++) {
          if (list.trends[i] == null) continue;
          trendList.push({
            value: list.trends[i],
            label: list.trends[i]
          });
        }
        if (props.categotyUpdatedFlag) {
          props.setTrend(trendList[0].value);
        }
        // Figure out how to update trends when category is changed.
        setTrendsList(trendList)
      })
      .catch(error => {
        console.error(error);
      });
    // }
  }, [props.selectedTrendCategory]);



  return (
    <div>
      <div className='TrendCompare-header'>
        <div className='trendcompare-heading'>
          <h3>Selected Trend Name: {props.trend}</h3>
        </div>
        <div className='trendcompare-select-heading'>
          {!isOpen && <h3 onClick={toggleDropdown}> {selectedTrend}</h3>}
          {isOpen && <DropDown onChange={toggleDropdown} selectMessage="Select Trend" selectOptions={trendsList} />}
        </div>
      </div>
      <TrendLineChart trend={props.trend} selectedTrend={selectedTrend} selectedTrendCategory={props.selectedTrendCategory}></TrendLineChart>
      <Table trend={props.trend} selectedTrend={selectedTrend} selectedTrendCategory={props.selectedTrendCategory}></Table>
    </div>
  )
}
