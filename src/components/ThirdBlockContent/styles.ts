import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  padding: 120px 112px;
`;

export const Table = styled.table`
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
  }

  td {
    padding-top: 16px;
    padding-bottom: 16px;

    color: ${({ theme }) => theme.colors.secondary.gray500};
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    font-weight: 400;
    line-height: 16px;
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

export const BuyButton = styled.button`
  width: 80px;
  height: 32px;
  padding: 8px 16px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.tertiary.green700};
`;

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  font-weight: 400;
  line-height: 16px;
`;

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  gap: 9px;

  background: none;
  color: ${({ theme }) => theme.colors.primary.orange500};
  cursor: pointer;
`;

export const ButtonIconText = styled.span`
  color: ${({ theme }) => theme.colors.primary.orange500};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  font-weight: 400;
  line-height: 16px;
`;

export const ImageIcon = styled(Image)`
  width: 12px;
  height: 12px;
`;
