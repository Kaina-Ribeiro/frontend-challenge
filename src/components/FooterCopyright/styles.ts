import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 112px;
  box-shadow: 0px -4px 8px rgba(77, 77, 77, 0.1);
  background: ${({ theme }) => theme.COLORS.white};
`;
