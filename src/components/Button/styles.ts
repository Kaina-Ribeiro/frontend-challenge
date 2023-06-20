import styled, { css } from 'styled-components';

type ButtonProps = {
  color: 'PRIMARY' | 'WHITE';
};

export const Container = styled.button<ButtonProps>`
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({ theme, color }) =>
    color === 'PRIMARY'
      ? css`
          display: flex;
          align-items: center;
          width: 100px;
          height: 32px;
          padding: 8px 16px;
          border-radius: 32px;
          background-color: ${theme.COLORS.primary.orange500};
        `
      : css`
          background-color: ${theme.COLORS.white};
          border-radius: 0px;
        `};

  cursor: pointer;
  p {
    color: ${({ theme, color }) =>
      color === 'PRIMARY' ? theme.COLORS.white : theme.COLORS.textBase};
    font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
    white-space: nowrap;
  }
`;
