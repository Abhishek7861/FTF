import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './SimilarProductCarousel.css'
import get from '../../Apis/Apis';
import DropDown from '../DropDown/DropDown';
import SimilarCardProduct from './SimilarProductCard';

export default function SimilarProductCarousel(props) {
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
    const [store, setStore] = React.useState("Ajio");
    const countToShow = 100;

    const period_list = [{ value: "Ajio", label: "Ajio" }, { value: "Myntra", label: "Myntra" }];


    const storeSelected = (value) => {
        setStore(value);
    };

    const params = { trendName:props.trend , ecommerce: store, count: countToShow };
    useEffect(() => {
      if (props.trend != null) {
        get("/get_products_by_filters", params)
          .then(response => {
            const carouselData = response.data.products.map(obj => ({
              title: obj.title,
              img:  obj.image_url,
              price: obj.price,
              description: obj.description,
              product_url: obj.product_url      
            }));
            // console.log(carouselData);
            setCarouselData(carouselData);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }, [store,props.trend]);


    return (
        <div>
            <div className='carousel-container'>
                <div className='heading-dropdown'>
                    <h2 className='carousel-heading'>{"Selected Trend : " + props.trend}</h2>
                    <div className='drop'>
                        <label>Select Store</label>
                        <DropDown onChange={storeSelected} selectMessage="Select Period" selectOptions={period_list} selectedOption={store} />
                    </div>
                </div>
                <h3>{"Showing Top " + countToShow + " Products"}</h3>
                <Carousel responsive={responsive} infinite={true} itemClass="carousel-item-padding-40-px">
                    {carouselData.map(data => (
                        <div>
                            <SimilarCardProduct title={data.title} src={data.img} price={data.price} description={data.description} product_url={data.product_url}/>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
