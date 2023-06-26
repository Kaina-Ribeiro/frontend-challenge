import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 280px;
  width: 100%;
  min-height: 268px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    min-height: 268px;
    max-width: 200px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 200px;
  }
`;

export const SvgImage = styled(Image)`
  width: 51px;
  height: 51px;
  margin-bottom: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 40px;
    height: 40px;
  }

  transition: all 0.2s;
`;

export const CryptoCardTitle = styled.h4`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font_size.MD}px;
    line-height: 32px;
  }
  transition: all 0.2s;
`;

export const ImageLabel = styled.p`
  color: ${({ theme }) => theme.colors.primary.orange500};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 4px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 16px;
  }

  transition: all 0.2s;
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.font_size.XSM}px;
`;
