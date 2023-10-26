import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardCarousel.css'
import Card from '../Card/Card';
import DropDown from '../DropDown/DropDown';
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
  var StoreDropDown = null;
  var headingDropDown = null;
  const [carouselData, setCarouselData] = React.useState([]);


  if (props.StoreDropDown) {
    StoreDropDown = <DropDown selectMessage="Select Store" selectOptions={[{ value: "AJIO", label: "AJIO" }, { value: "Myntra", label: "Myntra" }, { value: "H&M", label: "H&M" }, { value: "Shein", label: "Shein" }]}></DropDown>
    headingDropDown = (<div className='heading-dropdown'>
      <h2 className='carousel-heading'>{props.heading}</h2>
      {StoreDropDown}
    </div>)
  }
  else {
    headingDropDown = <h2 className='carousel-heading'>{props.heading}</h2>
  }

  const params = { category: props.selectedTrendCategory, period: props.selectedPeriod, geography: props.selectedGeography, top_n: 10 };
  useEffect(() => {
    if (props.selectedTrendCategory != null) {
      get("/get_top_trends_and_distribution_by_category", params)
        .then(response => {
          const carouselData = response.data.map(obj => ({
            name: obj._id,
            img:  obj.firstImage.imageUrl
          }));
          // console.log(carouselData);
          setCarouselData(carouselData);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [props.selectedTrendCategory, props.selectedPeriod, props.selectedGeography]);


  return (
    <div className='carousel-container'>
      {headingDropDown}
      <h3>{"Category Selected : "+props.subheading} </h3>
      <Carousel responsive={responsive} infinite={true} itemClass="carousel-item-padding-40-px">
        {carouselData.map(data => (
          <div>
            <Card name={data.name} src={data.img} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
