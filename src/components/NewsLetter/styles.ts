import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.section`
  height: 412px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 80px 48px;
  background-image: linear-gradient(
    97.85deg,
    rgba(251, 171, 52, 1) -5.87%,
    rgba(173, 114, 26, 1) 118.06%
  );

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 56px 24px;
  }

  transition: padding 0.2s;
`;

export const WaveImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
`;

export const NewsPapperWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  justify-content: center;
  z-index: 1;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const NewsPapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 385px;
  width: 100%;
  z-index: 1;
`;

export const TitleDescription = styled.h4`
  color: ${({ theme }) => theme.colors.primary.orange200};
  margin-bottom: 4px;
  font-weight: 700;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
    line-height: 24px;
    margin-bottom: 0;
  }

  transition: all 0.2s;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.font_size.XL}px;
    line-height: 40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font_size.L}px;
    line-height: 32px;
  }
  transition: all 0.2s;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};

  max-width: 405px;
  width: 100%;
  margin-top: 16px;

  line-height: 24px;
  font-weight: normal;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
  }

  transition: all 0.2s;
`;
