import React from 'react'
import Banner from '../../Components/Banner/Banner'
import TrendColumnChart from '../../Components/TrendColumnChart/TrendColumnChart'
import CardCarousel from '../../Components/CardCarousel/CardCarousel'
import { Link } from "react-router-dom";

export default function Home() {
  const [selectedPeriod, setSelectedPeriod] = React.useState(null);
  const [selectedTrendCategory, setSelectedTrendCategory] = React.useState(null);
  const [selectedGeography, setSelectedGeography] = React.useState(null);

  const title = "Trend Detail";
  const heading = " Selected Category : "+selectedTrendCategory;
  return (
    <div>
      <Link to="/trend-detail">{title}</Link>

      <Banner selectedPeriod={selectedPeriod} selectedGeography={selectedGeography} selectedTrendCategory={selectedTrendCategory}
        setSelectedPeriod={setSelectedPeriod} setSelectedGeography={setSelectedGeography} setSelectedTrendCategory={setSelectedTrendCategory}></Banner>

      <TrendColumnChart heading={heading} selectedPeriod={selectedPeriod} selectedTrendCategory={selectedTrendCategory}
        selectedGeography={selectedGeography}></TrendColumnChart>

      <CardCarousel heading="Trend radar - Top trends" subheading="Category Selected: XX" viewall="true"></CardCarousel>
    </div>
  )
}
