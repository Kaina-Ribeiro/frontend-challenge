import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 56px 60px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 40px 48px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 24px;
  }

  transition: padding 0.2s;
`;

export const InfoCards = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-wrap: wrap;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
`;
