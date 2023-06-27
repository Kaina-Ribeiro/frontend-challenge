import React, { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import { CustomInput, TextError, Wrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldError;
}

const InputIcon = ({ errors, ...rest }: InputProps, ref: React.RefObject<HTMLInputElement>) => {
  return (
    <Wrapper>
      <CustomInput ref={ref} {...rest} id={rest.name} />
      {errors && <TextError>{errors && <span>{errors?.message}</span>}</TextError>}
    </Wrapper>
  );
};

export default forwardRef(InputIcon);
