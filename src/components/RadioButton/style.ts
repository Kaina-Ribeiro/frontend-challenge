import styled from 'styled-components';

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 32px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default checkbox */
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;

    border: 1px solid ${({ theme }) => theme.colors.primary.orange500};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 4px;

    &::after {
      content: '';
      position: absolute;
      display: none;
    }
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* Add a background when is checked */
  & input:checked ~ .checkmark {
    background-color: ${({ theme }) => theme.colors.secondary.gray500};
  }

  /* Show the checkmark when checked */
  & input:checked ~ .checkmark:after {
    display: block;
  }
`;
