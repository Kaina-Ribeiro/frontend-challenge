import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.orange500};
  font-weight: bold;
`;

export const Description = styled.h5`
  max-width: 590px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 32px;
  line-height: 32px;
  font-weight: normal;
`;

export const ButtonIcon = styled.button`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 278px;
      height: 48px;
      padding: 14px 24px;
      border-radius: 32px;
      margin-bottom: 80px;
      background-color: ${theme.colors.primary.orange500};
      cursor: pointer;
    `};
`;

export const ButtonText = styled.span`
  ${({ theme }) =>
    css`
      color: ${theme.colors.white};
      font-size: ${theme.font_size.SM};
      line-height: 24px;
      font-weight: bold;
    `};
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 32px;
`;
