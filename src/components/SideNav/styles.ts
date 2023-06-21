import styled from 'styled-components';

export const Container = styled.div`
  width: 86px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding-top: 48px;

  background: ${({ theme }) => theme.COLORS.white};
  border-width: 1px 0px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.secondary.gray300};
  box-shadow: 0px 4px 8px rgba(77, 77, 77, 0.1);
`;
