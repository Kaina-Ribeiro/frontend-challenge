import styled from 'styled-components';

export const AddCryptoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.font_size.SM}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textBase};
  line-height: 24px;
  margin-bottom: 24px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AddCryptoButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 14px 24px;
  border-radius: 32px;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary.orange500};
  cursor: pointer;
`;
