import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  border-radius: 8px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 15px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary.gray300};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h5`
  line-height: 32px;
`;

export const AddCryptoButton = styled.button`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 6px;
  background: ${({ theme }) => theme.colors.primary.orange500};
  border-radius: 32px;
  cursor: pointer;
`;

export const CardBody = styled.div`
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export const CryptosWalletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;
