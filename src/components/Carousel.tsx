'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ImagesModal } from './ImagesModal';
const Carousel = ({images} :{images: any}) => {

    const [visibleSlides, setVisibleSlides] = useState(3);
    const [imgPopup, setImgPopup]=useState({state: false, img: ''})
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
      <>
             <Swiper
             key={images}
             modules={[Navigation,Pagination]}
             spaceBetween={10} slidesPerView={visibleSlides}
             pagination={{ clickable: true }}
             navigation
  >
      {images?.map((item: any, index: any) => (
        <SwiperSlide key={index} onClick={()=>  setImgPopup({state: true, img: item})}>
         <img src={item} className='h-64 cursor-pointer'/>
        </SwiperSlide>
      ))}
    </Swiper>
    {imgPopup.state && <ImagesModal setImgPopup={setImgPopup} imgPopup={imgPopup}/>}
</>
    )
}

export { Carousel }
