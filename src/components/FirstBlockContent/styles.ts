import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WavesImg = styled(Image)`
  max-width: 100%;
  width: 100%;
`;

export const CaroulselSection = styled.section`
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: space-between;
  padding-top: 100px;
  padding-left: 112px;
`;
