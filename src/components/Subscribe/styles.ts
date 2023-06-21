import styled from 'styled-components';

export const Container = styled.div`
  max-width: 384px;
  width: 100%;
  z-index: 1;
`;

export const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const LabelSubscribe = styled.label`
  color: ${({ theme }) => theme.COLORS.white};
`;

export const InputSubscribe = styled.input`
  padding: 16px;
  width: 100%;
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.textBase};
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.secondary.gray400};
  }
`;

export const SubscribeButton = styled.button`
  margin-top: 21px;
  padding: 14px 24px;
  max-width: 384px;
  width: 100%;
  height: 48px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  background-color: ${({ theme }) => theme.COLORS.primary.orange500};
  cursor: pointer;
`;

export const SubscribeButtonText = styled.span`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.white};
  line-height: 24px;
`;
