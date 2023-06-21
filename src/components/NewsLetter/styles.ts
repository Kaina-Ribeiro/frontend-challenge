import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 120px 216px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  background-image: linear-gradient(
    97.85deg,
    rgba(251, 171, 52, 1) -5.87%,
    rgba(173, 114, 26, 1) 118.06%
  );
`;

export const WaveImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;

export const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 385px;
  width: 100%;
  z-index: 1;
`;

export const TitleDescription = styled.h4`
  color: ${({ theme }) => theme.COLORS.primary.orange200};
  margin-bottom: 4px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.COLORS.white};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.COLORS.white};

  max-width: 405px;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 40px;
  line-height: 24px;
  font-weight: normal;
`;
