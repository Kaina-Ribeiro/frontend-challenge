import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 40px;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary.orange100};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 88px;
    height: 32px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 60px;
    height: 22px;
  }

  transition: all 0.2s;
`;

export const TagText = styled.h5`
  color: ${({ theme }) => theme.colors.primary.orange500};
  text-align: center;
  font-weight: 400;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
    line-height: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font_size.XXSM}px;
    line-height: 14px;
  }

  transition: all 0.2s;
`;
