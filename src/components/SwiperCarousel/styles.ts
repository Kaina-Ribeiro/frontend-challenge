import Image from 'next/image';
import styled from 'styled-components';

export const SlideImage = styled(Image)`
  width: 345px;
  height: 347px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 237px;
    height: 280px;
  }
`;

export const SlideContent = styled.div`
  margin: 70px;
`;
