import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner'
import CardCarousel from '../../Components/CardCarousel/CardCarousel'
import { Link } from 'react-router-dom'
import TrendCompare from '../../Components/TrendCompare/TrendCompare'
import PriceComparisionChart from '../../Components/PriceComparisionChart/PriceComparisionChart';
import SocialImageCardCarousel from '../../Components/SocialImageCardCarousel/SocialImageCardCarousel';
import SimilarProductCarousel from '../../Components/SimilarProductsCarousel/SimilarProductCarousel';

export default function TrendDetail(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [trend, setTrend] = useState(queryParams.get("trend"));
  const [categotyUpdatedFlag, setCategotyUpdatedFlag] = useState(false);
  // console.log(trend);
  // console.log(props.selectedTrendCategory);
  if(trend==null) return <div>No trend Selected</div>
  return (
    <div>
      <Link to="/">Home</Link>
      <Banner selectedPeriod={props.selectedPeriod} selectedGeography={props.selectedGeography} selectedTrendCategory={props.selectedTrendCategory}
        setSelectedPeriod={props.setSelectedPeriod} setSelectedGeography={props.setSelectedGeography} setSelectedTrendCategory={props.setSelectedTrendCategory}
        setCategotyUpdatedFlag = {setCategotyUpdatedFlag}/>
      <TrendCompare trend = {trend} setTrend = {setTrend} selectedTrendCategory = {props.selectedTrendCategory} categotyUpdatedFlag={categotyUpdatedFlag}></TrendCompare>
      <PriceComparisionChart heading="Price Comparision for Trend Name" trend = {trend}></PriceComparisionChart>
      <SocialImageCardCarousel trend={trend} subheading="Showing 10 Images"/>
      <SimilarProductCarousel trend={trend}/>
    </div>
  )
}
