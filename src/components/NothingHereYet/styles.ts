import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 84px;
  padding-bottom: 80px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 40px 55px;
  }
`;

export const EmptyWalletIcon = styled(Image)`
  width: 82px;
  height: 68px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 58px;
    height: 48px;
  }

  transition: all 0.2s;
`;

export const Title = styled.h5`
  padding-top: 24px;
  padding-bottom: 8px;
  line-height: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: 16px;

    font-size: ${({ theme }) => theme.font_size.SM}px;
    line-height: 24px;
  }
`;

export const EmptyMessage = styled.label`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font_size.XXSM}px;
    line-height: 14px;
  }
`;
