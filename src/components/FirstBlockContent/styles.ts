import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WavesImg = styled(Image)`
  max-width: 100%;
  width: 100%;

  object-fit: cover;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: 180px;
  }
`;

export const CarouselSection = styled.section`
  display: flex;

  padding-top: 100px;
  padding-left: 48px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: 60px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    justify-content: center;
    padding-top: 56px;
    padding: 56px 24px 0 24px;
  }
  transition: padding 0.2s;
`;
