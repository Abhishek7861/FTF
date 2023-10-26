import React from 'react'
import Banner from '../../Components/Banner/Banner'
import TrendColumnChart from '../../Components/TrendColumnChart/TrendColumnChart'
import CardCarousel from '../../Components/CardCarousel/CardCarousel'

export default function Home(props) {

  const title = "Trend Detail";
  const heading = " Category Selected: "+props.selectedTrendCategory;
  return (
    <div>

      <Banner selectedPeriod={props.selectedPeriod} selectedGeography={props.selectedGeography} selectedTrendCategory={props.selectedTrendCategory}
        setSelectedPeriod={props.setSelectedPeriod} setSelectedGeography={props.setSelectedGeography} setSelectedTrendCategory={props.setSelectedTrendCategory}></Banner>

      <TrendColumnChart heading={heading} selectedPeriod={props.selectedPeriod} selectedTrendCategory={props.selectedTrendCategory}
        selectedGeography={props.selectedGeography}></TrendColumnChart>

      <CardCarousel heading="Trend radar - Top trends" subheading={props.selectedTrendCategory} selectedPeriod={props.selectedPeriod} 
      selectedTrendCategory={props.selectedTrendCategory} selectedGeography={props.selectedGeography}></CardCarousel>
    </div>
  )
}
