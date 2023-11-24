import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './SocialImageCardCarousel.css'
import get from '../../Apis/Apis';
import SocialImageCard from './SocialImageCard';

export default function SocialImageCardCarousel(props) {
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
  const [carouselDataLength, setCarouselDataLength] = React.useState(0);
  const ImageCount = 50;
  
  const params = { trend_name: props.trend, gender: "f" };
  useEffect(() => {
      get("/get_trend_data_by_name_and_gender", params)
        .then(response => {
          const data = response.data.data.images;
          const carouselData = [];
          for(let i=0;i<Math.min(data.length,ImageCount);i++){
            let obj = data[i];
            carouselData.push({
              name: obj.username,
              img:  obj.imageUrl,
              noOfComments: obj.noOfComments,
              noOfLikes: Math.max(obj.noOfLikes,0),
              postUrl: obj.postUrl
            });
          }
          setCarouselDataLength(data.length);
          setCarouselData(carouselData);
        })
        .catch(error => {
          console.error(error);
        });
  }, [props.trend]);


  return (
    <div className='carousel-container'>
      <h2 className='carousel-heading'>{"Social Media Design Inspirations for : " +props.trend}</h2>
      <h3>{"Showing "+ImageCount + " Images out of "+ carouselDataLength} </h3>
      <Carousel responsive={responsive} infinite={true} itemClass="carousel-item-padding-40-px">
        {carouselData.map(data => (
          <div>
            <SocialImageCard userName={data.name} src={data.img} noOfComments={data.noOfComments} noOfLikes={data.noOfLikes} postUrl={data.postUrl} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
