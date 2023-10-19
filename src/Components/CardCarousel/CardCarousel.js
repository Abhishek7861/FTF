import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardCarousel.css'
import Card from '../Card/Card';
import DropDown from '../DropDown/DropDown';

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
  var Button = null;
  var StoreDropDown = null;
  var headingDropDown = null;
  if (props.viewall) {
    Button = <button class="block_button">View All</button>
  }
  if (props.StoreDropDown) {
    StoreDropDown = <DropDown selectMessage="Select Store" selectOptions={[{ value: "AJIO", label: "AJIO" }, { value: "Myntra", label: "Myntra" }, { value: "H&M", label: "H&M" }, { value: "Shein", label: "Shein" }]}></DropDown>
    headingDropDown = (<div className='heading-dropdown'>
      <h2 className='carousel-heading'>{props.heading}</h2>
      {StoreDropDown}
    </div>)
  }
  else{
    headingDropDown = <h2 className='carousel-heading'>{props.heading}</h2>

  }
  return (
    <div className='carousel-container'>
      {headingDropDown}
      <h3>{props.subheading} </h3>
      <Carousel responsive={responsive} infinite={true} itemClass="carousel-item-padding-40-px">
        <div >
          <Card name="Trend Name 1" src="https://cars.tatamotors.com/images/harrier/harrier-banner-m.jpg" />
        </div>
        <div>
          <Card name="Trend Name 2" src="https://cars.tatamotors.com/images/harrier/harrier-banner-m.jpg" />
        </div>
        <div>
          <Card name="Trend Name 3" src="https://cars.tatamotors.com/images/harrier/harrier-banner-m.jpg" />
        </div>
        <div>
          <Card name="Trend Name 4" src="https://cars.tatamotors.com/images/harrier/harrier-banner-m.jpg" />
        </div>
      </Carousel>
      {Button}
    </div>
  )
}
