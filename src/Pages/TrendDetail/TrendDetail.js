import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner'
import CardCarousel from '../../Components/CardCarousel/CardCarousel'
import { Link } from 'react-router-dom'
import TrendCompare from '../../Components/TrendCompare/TrendCompare'
import TrendColumnChart from '../../Components/TrendColumnChart/TrendColumnChart'

export default function TrendDetail(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const trend = queryParams.get("trend");
  console.log(trend);
  if(trend==null) return <div>No trend Selected</div>
  return (
    <div>
      <Link to="/">Home</Link>
      <Banner selectedPeriod={props.selectedPeriod} selectedGeography={props.selectedGeography} selectedTrendCategory={props.selectedTrendCategory}
        setSelectedPeriod={props.setSelectedPeriod} setSelectedGeography={props.setSelectedGeography} setSelectedTrendCategory={props.setSelectedTrendCategory}></Banner>
      <TrendCompare trend = {trend}></TrendCompare>
      <TrendColumnChart heading="Price Comparision for Trend Name" StoreDropDown="true"></TrendColumnChart>
      <CardCarousel heading="Social Images in <AJIO> for <TrendName1>" subheading="Showing <XX> Products" StoreDropDown="true"></CardCarousel>
      <CardCarousel heading="Similar Products in <AJIO> for <TrendName1>" subheading="Showing <XX> Products" StoreDropDown="true"></CardCarousel>
    </div>
  )
}
