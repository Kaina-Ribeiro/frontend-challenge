import React, { InputHTMLAttributes, forwardRef } from 'react';
import { Container } from './style';

const RadioButton = (
  { ...rest }: InputHTMLAttributes<HTMLInputElement>,
  ref: React.RefObject<HTMLInputElement>,
) => {
  return (
    <Container>
      I have read and accept the <strong>Privacy Policy</strong> and{' '}
      <strong>Terms of User Sign up</strong>.
      <input ref={ref} {...rest} type="checkbox" />
      <span className="checkmark"></span>
    </Container>
  );
};

export default forwardRef(RadioButton);
