import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 112px;
  max-width: 592px;
  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  padding: 24px 0 24px 24px;
  background: ${({ theme }) => theme.colors.white};
`;

export const BalanceInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  padding: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.orange100};
`;

export const MoneyInfoWrapper = styled.div``;

export const MoneyInfo = styled.h4`
  font-weight: normal;
`;

export const TotalValue = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.orange100};
  padding: 36px 0 36px 0;
`;

export const MoneyDescription = styled.h3``;
