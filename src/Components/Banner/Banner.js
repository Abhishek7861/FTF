import React, {useState, useEffect} from 'react'
import './Banner.css'
import DropDown from '../DropDown/DropDown'
import get from '../../Apis/Apis';

export default function Banner({selectedPeriod,selectedGeography,selectedTrendCategory,
  setSelectedPeriod,setSelectedGeography,setSelectedTrendCategory}) {

  const [period_list, setPeriodList] = React.useState([]);
  const [trend_category_list, setTrendCategoryList] = React.useState([]);
  const [geography_list, setGeographyList] = React.useState([]);

  const periodSelected = (value) => {
    setSelectedPeriod(value)
  };
  const trendCategorySelected = (value) => {
    setSelectedTrendCategory(value)
  };
  const geographySelected = (value) => {
    setSelectedGeography(value)
  };

  useEffect(() => {
    get("/get_unique_categories_with_trends")
      .then(response => {
        const categoryList = response.data.map(obj => ({
          value: obj._id,
          label: obj._id
        }));
        const periodList = [{value:"1", label:"1 Month"},{value:"2", label:"2 Month"},{value:"3", label:"3 Month"}];
        const geographyList = [{value:"india", label:"India"}];

        setTrendCategoryList(categoryList);
        setSelectedTrendCategory(categoryList[0].value);

        setPeriodList(periodList);
        setSelectedPeriod(periodList[0].value);

        setGeographyList(geographyList);
        setSelectedGeography(geographyList[0].value);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='horizontal-container'>
        <div className='component'>
        <DropDown onChange = {periodSelected} selectMessage="Select Period" selectOptions={period_list} selectedOption={selectedPeriod}/>
      </div>
      <div className='component'>
      <DropDown onChange = {trendCategorySelected} selectMessage="Select Trend Category" selectOptions={trend_category_list} selectedOption={selectedTrendCategory}/>
      </div>
      <div className='component'>
      <DropDown onChange = {geographySelected} selectMessage="Select Geography" selectOptions={geography_list} selectedOption={selectedGeography}/>
        </div>
    </div>
  )
}
