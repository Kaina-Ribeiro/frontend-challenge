import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 590px;
  width: 100%;

  flex-shrink: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    max-width: 320px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-width: 400px;
    align-items: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 270px;
  }
  transition: all 0.2s;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.orange500};
  font-weight: bold;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.font_size.XXL}px;
    line-height: 40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.font_size.XL}px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font_size.L}px;
    line-height: 32px;
    text-align: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font_size.MD}px;
  }
  transition: all 0.2s;
`;

export const Description = styled.h5`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 32px;
  line-height: 32px;
  font-weight: normal;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: 16px;
    margin-bottom: 24px;

    font-size: ${({ theme }) => theme.font_size.SM}px;
    line-height: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-top: 8px;
    margin-bottom: 24px;

    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 24px;
    text-align: center;
  }
`;

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 278px;
  height: 48px;
  padding: 14px 24px;
  border-radius: 32px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.primary.orange500};

  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 232px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 180px;
    padding: 8px 16px;
    margin-bottom: 24px;
  }
  transition: all 0.2s;
`;

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  line-height: 24px;
  font-weight: bold;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 16px;
  }
  transition: all 0.2s;
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    gap: 16px;
  }

  transition: all 0.2s;
`;
