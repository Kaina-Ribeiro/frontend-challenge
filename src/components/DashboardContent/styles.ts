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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    gap: 16px;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    gap: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    gap: 16px;
  }
`;
