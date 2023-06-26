import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 16px 112px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 8px rgba(77, 77, 77, 0.1);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 16px 16px;
  }

  transition: all 0.2s;
`;

export const LeftContentWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    gap: 8px;
  }

  transition: all 0.2s;
`;

export const TitlesWrapper = styled.ul`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.textBase};
  gap: 24px;

  @media screen and (max-width: 1120px) {
    gap: 8px;
  }

  span {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 16px;
  }

  transition: all 0.2s;
`;

export const RightContentWrapper = styled.div`
  display: flex;
  gap: 80px;
  height: 16px;

  @media screen and (max-width: 1120px) {
    gap: 40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    gap: 8px;
  }

  transition: all 0.2s;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    gap: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 100px;
  height: 32px;
`;
