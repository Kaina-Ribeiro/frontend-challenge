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
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 8px 0px rgba(77, 77, 77, 0.1);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 20px 48px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 16px 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    label {
      display: none;
    }

    justify-content: center;
  }

  transition: padding 0.2s;
`;
