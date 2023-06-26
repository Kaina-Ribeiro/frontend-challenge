import styled, { css } from 'styled-components';

type FooterProps = {
  logo?: boolean;
};

export const Container = styled.div<FooterProps>`
  display: flex;
  align-items: center;

  ${({ logo }) =>
    logo
      ? css`
          justify-content: space-between;
        `
      : css`
          justify-content: center;
        `}

  padding: 24px 112px;
  box-shadow: 0px -4px 8px rgba(77, 77, 77, 0.1);
  background: ${({ theme }) => theme.colors.white};
`;
