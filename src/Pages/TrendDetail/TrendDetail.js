import React from 'react'
import Banner from '../../Components/Banner/Banner'
import CardCarousel from '../../Components/CardCarousel/CardCarousel'
import { Link } from 'react-router-dom'
import TrendLineChart from '../../Components/TrendLineChart/TrendLineChart'
import TrendCompare from '../../Components/TrendCompare/TrendCompare'
import TrendColumnChart from '../../Components/TrendColumnChart/TrendColumnChart'

export default function TrendDetail() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Banner></Banner>
      <TrendCompare></TrendCompare>
      <TrendColumnChart heading="Price Comparision for Trend Name" StoreDropDown="true"></TrendColumnChart>
      <CardCarousel heading="Social Images" subheading="Showing <XX> Products" StoreDropDown="true"></CardCarousel>
      <CardCarousel heading="Similar Products in <AJIO> for <TrendName1>"subheading="Showing <XX> Products" StoreDropDown="true"></CardCarousel>
    </div>
  )
}
