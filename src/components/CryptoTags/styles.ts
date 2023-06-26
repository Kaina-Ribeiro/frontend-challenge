import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 95px;
  height: 40px;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary.orange100};
`;

export const TagText = styled.h5`
  color: ${({ theme }) => theme.colors.primary.orange500};
  text-align: center;
  font-weight: 400;
`;
