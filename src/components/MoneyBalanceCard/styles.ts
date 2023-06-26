import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 112px;
  max-width: 592px;

  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  gap: 8px;
  background: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    max-width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 64px;
  }
  transition: height 0.2s;
`;

export const BalanceInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  padding: 24px 0 24px 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 8px 0 8px 16px;
  }
  transition: padding 0.2s;
`;

export const ImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  padding: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.orange100};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 48px;
    height: 48px;
    padding: 9px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 32px;
    height: 32px;
    padding: 6px;
  }

  transition: all 0.2s;
`;

export const BalanceImage = styled(Image)`
  width: 40px;
  height: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 20px;
    height: 20px;
  }

  transition: all 0.2s;
`;

export const MoneyInfo = styled.h4`
  font-size: ${({ theme }) => theme.font_size.L}px;
  font-weight: normal;
  line-height: 32px;

  color: ${({ theme }) => theme.colors.textBase};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.font_size.MD}px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 16px;

    span {
      display: none;
    }
  }

  transition: all 0.2s;
`;

export const SmallDescription = styled.span`
  font-size: ${({ theme }) => theme.font_size.SM}px;
  color: ${({ theme }) => theme.colors.secondary.gray500};
  line-height: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 16px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font_size.XXSM}px;
    line-height: 14px;
  }
`;

export const TotalValue = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.orange100};
  padding: 36px 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 16px 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 12px 0;
  }

  transition: padding 0.2s;
`;

export const MoneyDescription = styled.h3`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.font_size.L}px;
    line-height: 32px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
    line-height: 24px;
  }
  transition: all 0.2s;
`;
