import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(77, 77, 77, 0.1);
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px;
  height: 56px;
  background: ${({ theme }) => theme.colors.white};
`;

export const HeaderFooter = styled.div`
  display: flex;
  justify-content: center;
  height: 23px;
  width: 100%;
  padding: 0 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary.gray200};
`;

export const LoggedHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 40px;
`;
