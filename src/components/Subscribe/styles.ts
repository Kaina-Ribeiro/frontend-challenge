import styled from 'styled-components';

export const Container = styled.div`
  max-width: 384px;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 320px;
  }
`;

export const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const LabelSubscribe = styled.label`
  color: ${({ theme }) => theme.colors.white};
`;

export const InputSubscribe = styled.input`
  padding: 16px;
  width: 100%;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.textBase};
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary.gray400};
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
  background-color: ${({ theme }) => theme.colors.primary.orange500};
  cursor: pointer;
`;

export const SubscribeButtonText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 24px;
`;
