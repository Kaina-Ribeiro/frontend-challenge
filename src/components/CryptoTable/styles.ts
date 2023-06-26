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

export const ButtonTable = styled.button`
  background: none;
  cursor: pointer;
`;
