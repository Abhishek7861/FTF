import React, { useEffect } from 'react'
import AttributeCarouselCard from './AttributeCarouselCard';
import Carousel from 'react-multi-carousel';

export default function AttributeCarousel() {
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
    var imageCount = 0;
    const [carouselData, setCarouselData] = React.useState([{ name: "name 1", img: "logo192.png", imageCount: 10 }, { name: "name 2", img: "logo192.png", imageCount: 10 }, { name: "name 3", img: "logo192.png", imageCount: 10 }, { name: "name 4", img: "logo192.png", imageCount: 10 }]);
    return (
        <div className='carousel-container'>
            <h2 className='carousel-heading'>{"Heading"}</h2>
            <h3>{"Category Selected : " + "sub heading"} </h3>
            {/* <h4>{"Total Trends : "+props.trendCount} </h4> */}
            <Carousel responsive={responsive} infinite={true} itemClass="carousel-item-padding-40-px">
                {carouselData.map(data => (
                    <div>
                        <AttributeCarouselCard name={data.name} src={data.img} imageCount={imageCount++} />
                    </div>
                ))
                }
            </Carousel>
        </div>
    )
}
