import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 280px;
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.05);
`;

export const SvgImage = styled(Image)`
  width: 51px;
  height: 51px;
  margin-bottom: 1rem;
`;

export const ImageLabel = styled.p`
  color: ${({ theme }) => theme.colors.primary.orange500};
  font-size: ${({ theme }) => theme.font_size.SM};
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.font_size.XSM};
`;
