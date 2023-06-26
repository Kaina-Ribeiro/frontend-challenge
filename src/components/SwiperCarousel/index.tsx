import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper';

import 'swiper/css/virtual';
import image1 from '../../assets/carouselImgs/carousel.png';
import image2 from '../../assets/carouselImgs/carousel2.png';
import image3 from '../../assets/carouselImgs/carousel3.png';
import { SlideImage } from './styles';

const SwiperCarousel = () => {
  const images = [image1, image2, image3];

  return (
    <Swiper
      modules={[Virtual]}
      slidesPerView={2}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      virtual
    >
      {images.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <SlideImage src={img} alt={`slide image ${index}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCarousel;
