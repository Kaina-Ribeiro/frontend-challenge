import styled, { css } from 'styled-components';

type ButtonProps = {
  color: 'PRIMARY' | 'WHITE';
};

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 14px 24px;

  ${({ theme, color }) =>
    color === 'PRIMARY'
      ? css`
          display: flex;
          align-items: center;

          border-radius: 32px;
          background-color: ${theme.colors.primary.orange500};
        `
      : css`
          padding: 0;
          background-color: ${theme.colors.white};
          border-radius: 0px;
        `};

  cursor: pointer;

  p {
    color: ${({ theme, color }) =>
      color === 'PRIMARY' ? theme.colors.white : theme.colors.textBase};
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 16px;
    white-space: nowrap;
  }
`;
