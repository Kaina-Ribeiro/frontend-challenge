import Image from 'next/image';
import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    padding: 0 24px;
    text-align: left;
  }

  th {
    color: ${({ theme }) => theme.colors.secondary.gray500};
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    font-weight: 400;
    line-height: 16px;
    padding-bottom: 8px;

    &:last-child {
      text-align: right;
    }
  }

  td {
    padding-top: 16px;
    padding-bottom: 16px;

    color: ${({ theme }) => theme.colors.secondary.gray500};
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    font-weight: 400;
    line-height: 16px;
    &:last-child {
      text-align: right;
    }
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.secondary.gray100};
  }
`;

export const CryptoLogoName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HoldingPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CryptoPrice = styled.span`
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  color: ${({ theme }) => theme.colors.textBase};
  line-height: 16px;
`;

export const CryptoHolding = styled.span`
  font-size: ${({ theme }) => theme.font_size.XXSM}px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.primary.orange500};
`;

export const ButtonTable = styled.button`
  background: none;
  cursor: pointer;
`;

export const TradeImage = styled(Image)`
  width: 16px;
  height: 16px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 24px;
    height: 24px;
  }

  transition: all 0.2s;
`;
