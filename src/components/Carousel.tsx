'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = ({images} :{images: any}) => {

    const [visibleSlides, setVisibleSlides] = useState(3);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1100) {
          setVisibleSlides(3);
        } else if (window.innerWidth >= 768) {
          setVisibleSlides(2);
        } else {
          setVisibleSlides(1);
        }
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
             <Swiper
             modules={[Pagination]}
             spaceBetween={10} slidesPerView={visibleSlides}
             pagination={{ clickable: true }}
  >
      {images?.map((item: any, index: any) => (
        <SwiperSlide key={index} onClick={()=>  window.location.href=item}>
         <img src={item} className='h-64'/>
        </SwiperSlide>
      ))}
    </Swiper>

    )
}

export { Carousel }
