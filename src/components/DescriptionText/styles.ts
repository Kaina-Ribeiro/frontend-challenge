import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleDescription = styled.h5`
  color: ${({ theme }) => theme.COLORS.primary.orange500};
  line-height: 32px;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  max-width: 405px;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 40px;
  line-height: 32px;
  font-weight: normal;
`;

export const ButtonStyled = styled.button`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 176px;
      height: 48px;
      padding: 14px 24px;
      border-radius: 32px;
      background-color: ${theme.COLORS.primary.orange500};
      cursor: pointer;
    `};
`;

export const ButtonText = styled.span`
  ${({ theme }) =>
    css`
      color: ${theme.COLORS.white};
      font-size: ${theme.FONT_SIZE.SM};
      line-height: 24px;
    `};
`;
