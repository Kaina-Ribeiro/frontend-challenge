import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1216px;
  width: 100%;
  height: 389px;
  background: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 5rem 0;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.secondary.gray200};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h5``;

export const AddCryptoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.COLORS.primary.orange500};
  border-radius: 32px;
  cursor: pointer;

  & > span {
    font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
    line-height: 16px;
    color: ${({ theme }) => theme.COLORS.white};
  }
`;

export const CardBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
