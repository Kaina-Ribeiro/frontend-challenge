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

export const VariationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px;
`;

export const Title = styled.small`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.secondary.gray500};
`;

export const CryptoName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 16px;
  padding-bottom: 8px;
`;

export const GraphImage = styled(Image)`
  width: 100%;
`;

export const VariationText = styled.p`
  color: ${({ theme }) => theme.colors.tertiary.green700};
`;
