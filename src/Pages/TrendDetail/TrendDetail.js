import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner'
import CardCarousel from '../../Components/CardCarousel/CardCarousel'
import { Link } from 'react-router-dom'
import TrendCompare from '../../Components/TrendCompare/TrendCompare'
import PriceComparisionChart from '../../Components/PriceComparisionChart/PriceComparisionChart';
import SocialImageCardCarousel from '../../Components/SocialImageCardCarousel/SocialImageCardCarousel';
import SimilarProductCarousel from '../../Components/SimilarProductsCarousel/SimilarProductCarousel';
import AttributeCarousel from '../../Components/AttributeCarousel/AttributeCarousel'
import MainModal from '../../Components/Modal/MainModal';

export default function TrendDetail(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [trendCount, setTrendCount] = useState(0);
  const [trend, setTrend] = useState(queryParams.get("trend"));
  const [categotyUpdatedFlag, setCategotyUpdatedFlag] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    "name": "469460387_peach",
    "src": "https://storage.googleapis.com/sml-products-catalog/Ajio/469460387_peach.jpg",
    "attributes": []
});
  // console.log(trend);
  // console.log(props.selectedTrendCategory);
  if (trend == null) return <div>No trend Selected</div>
  return (
    <div>

      <Link to="/"><h1 className='title'>Vogue Verse</h1></Link>
      <Banner selectedPeriod={props.selectedPeriod} selectedGeography={props.selectedGeography} selectedTrendCategory={props.selectedTrendCategory}
        setSelectedPeriod={props.setSelectedPeriod} setSelectedGeography={props.setSelectedGeography} setSelectedTrendCategory={props.setSelectedTrendCategory}
        setCategotyUpdatedFlag={setCategotyUpdatedFlag} setTrendCount={setTrendCount} />
      <TrendCompare trend={trend} setTrend={setTrend} selectedTrendCategory={props.selectedTrendCategory} categotyUpdatedFlag={categotyUpdatedFlag}></TrendCompare>
      <PriceComparisionChart heading={"Price Comparision for "+trend} trend={trend}></PriceComparisionChart>
      <SocialImageCardCarousel trend={trend} />
      <SimilarProductCarousel trend={trend} />
      <AttributeCarousel setIsModalOpen={setIsModalOpen} setModalData={setModalData}></AttributeCarousel>
      <MainModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalData={modalData}></MainModal>
    </div>
  )
}
