import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 590px;

  flex-shrink: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 320px;
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
    line-height: 40px;
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
  transition: width 0.2s;
`;

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  line-height: 24px;
  font-weight: bold;
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 24px;
  }
  transition: all 0.2s;
`;
