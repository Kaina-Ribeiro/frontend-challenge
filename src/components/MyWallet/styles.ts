import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 389px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.gray200};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h4``;

export const AddCryptoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.primary.orange500};
  border-radius: 32px;
  cursor: pointer;

  & > span {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const CardBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  padding-top: 24px;
`;
