import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #f6f6f6;
  flex-shrink: 0;
`;

export const ProfilePhoto = styled(Image)`
  width: 32px;
  height: 32px;
`;

export const Name = styled.p``;
