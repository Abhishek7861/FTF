import React from 'react'
import Banner from '../../Components/Banner/Banner'
import TrendColumnChart from '../../Components/TrendColumnChart/TrendColumnChart'
import CardCarousel from '../../Components/CardCarousel/CardCarousel'
import { Link } from "react-router-dom"; 

export default function Home() {
  return (
    <div>
        <Link to="/trend-detail">Trend Detail</Link> 
        <Banner></Banner>
        <TrendColumnChart heading="Trend Name XX"></TrendColumnChart>
        <CardCarousel heading="Trend radar - Top trends" subheading="Category Selected: XX" viewall="true"></CardCarousel>
    </div>
  )
}
