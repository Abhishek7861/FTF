import React, { useState, useEffect } from 'react'
import './Banner.css'
import DropDown from '../DropDown/DropDown'
import get from '../../Apis/Apis';

export default function Banner(props) {

  const [period_list, setPeriodList] = React.useState([]);
  const [trend_category_list, setTrendCategoryList] = React.useState([]);
  const [geography_list, setGeographyList] = React.useState([]);

  const periodSelected = (value) => {
    props.setSelectedPeriod(value)
  };
  const trendCategorySelected = (value) => {
    props.setSelectedTrendCategory(value)
    props.setCategotyUpdatedFlag(true);
  };
  const geographySelected = (value) => {
    props.setSelectedGeography(value)
  };

  // console.log(props);

  useEffect(() => {
    get("/get_unique_categories_with_trends")
      .then(response => {
        const categoryList = response.data
          .filter(obj => obj._id != "All Trends")
          .map(obj => ({
            value: obj._id,
            label: obj._id
          }));
        const periodList = [{ value: "30", label: "1 Month" }, { value: "60", label: "2 Month" }, { value: "90", label: "3 Month" },{ value: "180", label: "6 Month" },{ value: "360", label: "12 Month" }];
        const geographyList = [{ value: "indian", label: "Indian" }, { value: "western", label: "Western" }];
        props.setTrendCount(10);

        setTrendCategoryList(categoryList);
        // if (props.selectedTrendCategory == null) {
        //   props.setSelectedTrendCategory("Dress Trends");
        // }

        setPeriodList(periodList);
        // if (props.selectedPeriod == null) {
        //   props.setSelectedPeriod(90);
        // }

        setGeographyList(geographyList);
        // if (props.selectedGeography == null) {
        //   props.setSelectedGeography("western");
        // }

        const trendList = response.data
          .filter(obj => obj._id == props.selectedTrendCategory)
          .map(obj => ({
            trends: obj.trends,
          }));
        console.log(trendList[0]);
        props.setTrendCount(trendList[0].trends.length);

      })
      .catch(error => {
        console.error(error);
      });
  }, [props.selectedTrendCategory,props.selectedPeriod,props.selectedGeography]);

  return (
    <div className='horizontal-container'>
      <div className='component'>
        <h5>Select Period</h5>
        <DropDown onChange={periodSelected} selectMessage="Select Period" selectOptions={period_list} selectedOption={props.selectedPeriod} />
      </div>
      <div className='component'>
        <h5>Select Trend Category</h5>
        <DropDown onChange={trendCategorySelected} selectMessage="Select Trend Category" selectOptions={trend_category_list} selectedOption={props.selectedTrendCategory} />
      </div>
      <div className='component'>
        <h5>Select Influencer Location</h5>
        <DropDown onChange={geographySelected} selectMessage="Select Geography" selectOptions={geography_list} selectedOption={props.selectedGeography} />
      </div>
    </div>
  )
}
