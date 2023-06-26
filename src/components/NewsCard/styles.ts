import styled from 'styled-components';
import elephant from '../../assets/cardsIcons/elephant.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 112px;

  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: 142px;
    flex-direction: column;
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 16px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 8px;
  }
`;

export const Title = styled.label`
  white-space: nowrap;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const Description = styled.small`
  max-width: 107px;
  width: 100%;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.colors.secondary.gray500};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-bottom: 8px;
  }
`;

export const ReadMore = styled.small`
  color: ${({ theme }) => theme.colors.primary.orange400};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

export const ElephantImage = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${elephant.src});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
