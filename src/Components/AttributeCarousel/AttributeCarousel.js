import React, { useEffect } from 'react'
import AttributeCarouselCard from './AttributeCarouselCard';
import Carousel from 'react-multi-carousel';
import get from '../../Apis/Apis';
export default function AttributeCarousel(props) {
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
    useEffect(() => {
        get("/get_tags_data")
            .then(response => {
                const carouselData = response.data.result.map(obj => ({
                    name: obj.detected_product_id,
                    img: obj.primary_image,
                    attributes: obj.attributes
                }));
                setCarouselData(carouselData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div className='carousel-container'>
            <h2 className='carousel-heading'>Dress Attributes</h2>
            {/* <h4>{"Total Trends : "+props.trendCount} </h4> */}
            <Carousel responsive={responsive} infinite={true} itemClass="carousel-item-padding-40-px">
                {carouselData.map(data => (
                    <div>
                        <AttributeCarouselCard name={data.name} src={data.img} attributes = {data.attributes} setIsModalOpen={props.setIsModalOpen}
                        setModalData = {props.setModalData} />
                    </div>
                ))
                }
            </Carousel>
        </div>
    )
}
