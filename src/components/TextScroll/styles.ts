import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`;

export const TextBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 100%;
  overflow: hidden;
`;

export const Scroll = styled.div`
  position: absolute;
  display: flex;
  gap: 24px;
  width: 100%;
  animation: ${scroll} 30s linear infinite;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    p,
    span {
      font-size: ${({ theme }) => theme.font_size.XXSM}px;
    }
  }
`;

export const CoinInfo = styled.p`
  display: flex;
  gap: 8px;

  white-space: nowrap;
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  line-height: 14px;
`;

export const CoinName = styled.span`
  color: ${({ theme }) => theme.colors.secondary.gray800};
`;

export const CoinValue = styled.span`
  color: ${({ theme }) => theme.colors.textBase};
`;

export const TextGreen = styled.span`
  color: ${({ theme }) => theme.colors.tertiary.green700};
`;

export const TextRed = styled.span`
  color: ${({ theme }) => theme.colors.quartenary.red700};
`;
