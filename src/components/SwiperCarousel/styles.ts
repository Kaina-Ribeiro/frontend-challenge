import Image from 'next/image';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const MySwiper = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper {
    gap: 60px;
  }

  .swiper-slide {
    width: 60%;
  }

  .swiper-slide:nth-child(2n) {
    width: 40%;
  }

  .swiper-slide:nth-child(3n) {
    width: 20%;
  }
`;

export const SlideImage = styled(Image)`
  width: 345px;
  height: 347px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 237px;
    height: 280px;
  }
`;

export const SlideContent = styled.div`
  margin: 70px;
`;
