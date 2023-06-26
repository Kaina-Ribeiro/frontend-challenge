import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 112px;
  max-width: 280px;
  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    max-width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
    height: 142px;
    /* max-width: 128px; */
  }
`;

export const VariationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 100%;
    gap: 8px;
  }
`;

export const Title = styled.small`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.secondary.gray500};
`;

export const CryptoInfo = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CryptoAbrvName = styled.span`
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  color: ${({ theme }) => theme.colors.textBase};

  line-height: 16px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font_size.XXSM}px;
    line-height: 14px;
  }

  transition: all 0.2s;
`;

export const CryptoName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 16px;
  padding-bottom: 8px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 0;
  }

  transition: padding 0.2s;
`;

export const CryptoLogo = styled(Image)`
  width: 24px;
  height: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 16px;
    height: 16px;
  }

  transition: all 0.2s;
`;

export const GraphImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const VariationText = styled.p`
  color: ${({ theme }) => theme.colors.tertiary.green700};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 16px;
  }

  transition: all 0.2s;
`;
