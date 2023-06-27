import { Container, Title, ButtonWrapper, SignUpMessage, RadioErrorWrapper } from './styled';
import passwordIcon from '../../assets/input/passwordIcon.svg';
import emailIcon from '../../assets/input/emailIcon.svg';
import hidePassword from '../../assets/input/hidePassword.svg';
import userIcon from '../../assets/input/userIcon.svg';

import { useState } from 'react';
import { Button } from '../Button';
import RadioButton from '../RadioButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputIcon from '../Input/InputIcon';
import { TextError } from '../Input/InputIcon/styles';

type RegisterProps = {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
  privacyPolicy: boolean;
};

const schema = yup
  .object({
    username: yup.string().required('Name is required!'),
    email: yup.string().email('invalid E-mail').required('Email is required!'),
    password: yup.string().required('Password is required!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords are not the same'),
    privacyPolicy: yup.boolean().oneOf([true], 'You need to agree with the privacy policy!'),
  })
  .required();

const SignUp = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<RegisterProps>({ resolver: yupResolver(schema) });
  const [seePassword, setSeePassword] = useState(false);
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);

  const onSubmit = async (data: RegisterProps) => {
    try {
      clearErrors();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>
        Sign in to <span>Coin</span>
        <span>Synch</span>
      </Title>

      <InputIcon
        placeholder="Name"
        type="text"
        {...register('username')}
        errors={errors.username}
        inputIcon={userIcon}
      />

      <InputIcon
        placeholder="Email"
        type="email"
        {...register('email')}
        errors={errors.email}
        inputIcon={emailIcon}
      />

      <InputIcon
        placeholder="Password"
        type={!seePassword ? 'password' : 'text'}
        {...register('password')}
        handlePassword={() => setSeePassword((s) => !s)}
        hidePasswordIcon={hidePassword}
        errors={errors.password}
        inputIcon={passwordIcon}
      />

      <InputIcon
        placeholder="Confirm Password"
        type={!seePassword ? 'password' : 'text'}
        {...register('confirmPassword')}
        handlePassword={() => setSeePassword((s) => !s)}
        hidePasswordIcon={hidePassword}
        errors={errors.password}
        inputIcon={passwordIcon}
      />

      <RadioErrorWrapper>
        <RadioButton
          onClick={() => setAcceptPrivacyPolicy((s) => !s)}
          {...register('privacyPolicy')}
        />
        {errors.privacyPolicy && (
          <TextError>{errors && <span>You need to agree with the privacy policy!</span>}</TextError>
        )}
      </RadioErrorWrapper>

      <ButtonWrapper>
        <Button type="submit" disabled={!acceptPrivacyPolicy} title="Sign In" color="PRIMARY" />
      </ButtonWrapper>

      <SignUpMessage>
        Already have and account?
        <strong> Sign in to </strong>
        <span>Coin</span>
        <span>Synch</span>
      </SignUpMessage>
    </Container>
  );
};

export default SignUp;
