import styled from 'styled-components';

export const CustomInput = styled.input`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 16px 16px 16px 8px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textBase};
    opacity: 0.55;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.secondary.gray300};
  border-radius: 6px;
  padding-left: 16px;
`;

export const TextError = styled.div`
  height: 1rem;
  padding-top: 2px;
  color: ${({ theme }) => theme.colors.quartenary.red500};

  span {
    font-weight: 500;
    font-size: 0.625rem;
  }
`;
