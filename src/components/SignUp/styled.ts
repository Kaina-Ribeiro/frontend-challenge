import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 12px 0;
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
`;

export const ButtonWrapper = styled.div`
  max-width: 272px;
  width: 100%;
`;

export const SignUpMessage = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXSM}px;
  line-height: 14px;

  span:nth-of-type(1) {
    color: ${({ theme }) => theme.COLORS.primary.orange500};
    font-weight: bold;
  }
  span:nth-of-type(2) {
    color: ${({ theme }) => theme.COLORS.secondary.gray500};
    font-weight: bold;
  }
`;

export const RadioErrorWrapper = styled.div`
  padding-top: 2px;
  color: red;

  span {
    font-weight: 500;
    font-size: 0.625rem;
  }
`;
