import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 112px;
  max-width: 280px;
  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.white};
`;

export const NewsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px;
  width: 100%;
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
`;

export const ReadMore = styled.small`
  color: ${({ theme }) => theme.colors.primary.orange400};
`;

export const GraphImage = styled(Image)``;
