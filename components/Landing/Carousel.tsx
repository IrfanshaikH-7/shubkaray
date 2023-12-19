'use client'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from '@/public/CarouselImages';
import Image from 'next/image';


const Carousel = () => {
    
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
      };
    
    return (

        <div>
      <Slider {...settings} className='w-96 aspect-video  relative border-8'>
        {/* <div>
          <h3>FIRST SLIDE</h3>
        </div>
        <div>
          <h3>SECOND SLIDE</h3>
        </div>
        <div>
          <h3>THIRD SLIDE</h3>
        </div>
        <div>
          <h3>FORTH SLIDE</h3>
        </div> */}
        {
          images.map((image,i) => (
            <div className='w-96 aspect-video bg-slate-600'>

<Image 
            key={i}
            src={image.image}
            fill
            alt='img'
            className='object-contain'
            />
            </div>
            
          ))
        }
      </Slider>
    </div>
    )
}

export default Carousel
