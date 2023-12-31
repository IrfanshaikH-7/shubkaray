'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import { images } from '@/public/CarouselImages';
import { EffectFade } from 'swiper/modules';
import Image from 'next/image';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      effect="fade"
      className='aspect-video h-96 rounded-md'
    >
      {
        images.map((img, i) => (
          <SwiperSlide key={i}
          className='p-2'
          >
            <Image
              src={img.image}
              fill
              alt='img'
              className='object-cover'
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};