import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleDescription = styled.h5`
  color: ${({ theme }) => theme.colors.primary.orange500};
  line-height: 32px;
  margin-bottom: 4px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
    line-height: 24px;
  }
`;

export const Title = styled.h2`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.font_size.XL}px;
    line-height: 40px;
  }
`;

export const Description = styled.p`
  max-width: 405px;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 40px;
  line-height: 32px;
  font-weight: normal;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
    line-height: 24px;
    max-width: 494px;
    margin-bottom: 40px;
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 176px;
  height: 48px;
  padding: 14px 24px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.primary.orange500};
  cursor: pointer;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const ButtonText = styled.span`
  ${({ theme }) =>
    css`
      color: ${theme.colors.white};
      font-size: ${theme.font_size.SM};
      line-height: 24px;
    `};
`;
