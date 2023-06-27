import React, { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import Image from 'next/image';
import { CustomInput, TextError, Wrapper, WrapperIcon } from './styles';
import { HidePasswordIcon } from '../../SignIn/styled';

interface InputIconProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldError;
  inputIcon: any;
  hidePasswordIcon?: any;
  handlePassword?: () => void;
}

const InputIcon = (
  { errors, inputIcon, handlePassword, hidePasswordIcon, ...rest }: InputIconProps,
  ref: React.RefObject<HTMLInputElement>,
) => {
  return (
    <Wrapper>
      <WrapperIcon>
        <Image src={inputIcon} alt="input icon" />
        <CustomInput ref={ref} {...rest} id={rest.name} />
        {hidePasswordIcon && (
          <HidePasswordIcon onClick={handlePassword} src={hidePasswordIcon} alt="hide password" />
        )}
      </WrapperIcon>
      {errors && <TextError>{errors && <span>{errors?.message}</span>}</TextError>}
    </Wrapper>
  );
};

export default forwardRef(InputIcon);
