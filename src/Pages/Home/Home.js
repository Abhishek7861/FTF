import React, {useState} from 'react'
import Banner from '../../Components/Banner/Banner'
import TrendColumnChart from '../../Components/TrendColumnChart/TrendColumnChart'
import CardCarousel from '../../Components/CardCarousel/CardCarousel'
import { Link } from 'react-router-dom'

export default function Home(props) {
  const [categotyUpdatedFlag, setCategotyUpdatedFlag] = useState(false);
  const [trendCount, setTrendCount] = useState(0);
  const title = "Trend Detail";
  const heading = "Top 10 Style for : "+props.selectedTrendCategory;
  return (
    <div>
      <Link to="/"><h1 className='title'>Vogue Verse</h1></Link>
      <Banner selectedPeriod={props.selectedPeriod} selectedGeography={props.selectedGeography} selectedTrendCategory={props.selectedTrendCategory}
        setSelectedPeriod={props.setSelectedPeriod} setSelectedGeography={props.setSelectedGeography} setSelectedTrendCategory={props.setSelectedTrendCategory}
        setCategotyUpdatedFlag = {setCategotyUpdatedFlag} setTrendCount={setTrendCount}></Banner>

      <TrendColumnChart heading={heading} selectedPeriod={props.selectedPeriod} selectedTrendCategory={props.selectedTrendCategory}
        selectedGeography={props.selectedGeography}></TrendColumnChart>

      <CardCarousel heading="Trend radar - Top trends" subheading={props.selectedTrendCategory} trendCount={trendCount} selectedPeriod={props.selectedPeriod} 
      selectedTrendCategory={props.selectedTrendCategory} selectedGeography={props.selectedGeography}></CardCarousel>
    </div>
  )
}
