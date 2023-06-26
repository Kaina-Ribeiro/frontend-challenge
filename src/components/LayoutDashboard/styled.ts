import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  display: flex;

  flex-direction: column;

  background: #f5f5f5;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background: ${({ theme }) => theme.colors.white};
  }
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
`;
