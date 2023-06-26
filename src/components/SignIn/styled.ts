import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h4`
  font-weight: normal;

  span:first-child {
    color: ${({ theme }) => theme.COLORS.primary.orange500};
    font-weight: bold;
  }
  span:last-child {
    color: ${({ theme }) => theme.COLORS.secondary.gray500};
    font-weight: bold;
  }
  margin-bottom: 24px;
`;

export const HidePasswordIcon = styled(Image)`
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  max-width: 272px;
  width: 100%;
`;

export const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const PasswordWrapper = styled.div`
  width: 100%;
  margin-top: 24px;

  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  & > p {
    margin-top: 9px;
    align-self: flex-end;
    color: ${({ theme }) => theme.COLORS.secondary.gray500};
    font-size: 12px;
    line-height: 14px;
    cursor: pointer;
  }
`;

export const SignUpMessage = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXSM}px;
  line-height: 14px;

  span:nth-child(1) {
    font-weight: bold;
  }
  span:nth-child(2) {
    color: ${({ theme }) => theme.COLORS.primary.orange500};
    font-weight: bold;
  }
  span:nth-child(3) {
    color: ${({ theme }) => theme.COLORS.secondary.gray500};
    font-weight: bold;
  }
`;
