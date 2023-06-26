import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 120px 112px 130px 112px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f7f7f7 100%);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 80px 48px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 40px;
    flex-direction: column-reverse;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 56px 24px;

    gap: 24px;
  }
  transition: all 0.2s;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 24px;
  }
  transition: all 0.2s;
`;

export const CardGroup1 = styled.div`
  display: flex;
  gap: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 24px;
  }
  transition: all 0.2s;
`;

export const CardGroup2 = styled.div`
  display: flex;
  gap: 32px;
  padding-left: 104px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 24px;
    padding-left: 80px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    gap: 24px;
    padding-left: 0;
  }
  transition: all 0.2s;
`;

export const CryptoSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;
