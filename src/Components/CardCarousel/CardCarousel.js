import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardCarousel.css'
import Card from '../Card/Card';
import get from '../../Apis/Apis';

export default function CardCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [carouselData, setCarouselData] = React.useState([]);

  const params = { category: props.selectedTrendCategory, period: props.selectedPeriod, geography: props.selectedGeography, top_n: 500 };
  useEffect(() => {
    if (props.selectedTrendCategory != null) {
      get("/get_top_trends_and_distribution_by_category", params)
        .then(response => {
          const carouselData = response.data.map(obj => ({
            name: obj._id,
            img:  obj.firstImage.imageUrl,
            imageCount: obj.imageCount
          }));
          setCarouselData(carouselData);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [props.selectedTrendCategory, props.selectedPeriod, props.selectedGeography]);


  return (
    <div className='carousel-container'>
      <h2 className='carousel-heading'>{props.heading}</h2>
      <h3>{"Category Selected : "+props.subheading} </h3>
      <Carousel responsive={responsive} infinite={true} itemClass="carousel-item-padding-40-px">
        {carouselData.map(data => (
          <div>
            <Card name={data.name} src={data.img} imageCount = {data.imageCount} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
