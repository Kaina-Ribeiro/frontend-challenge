import {
  Container,
  Title,
  ButtonWrapper,
  ActionWrapper,
  PasswordWrapper,
  SignUpMessage,
} from './styled';
import passwordIcon from '../../assets/input/passwordIcon.svg';
import emailIcon from '../../assets/input/emailIcon.svg';
import hidePassword from '../../assets/input/hidePassword.svg';
import { useState } from 'react';
import { Button } from '../Button';
import InputIcon from '../InputIcon';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type SignInProps = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email('invalid E-mail').required('Email is required!'),
    password: yup.string().required('Password is required!'),
  })
  .required();

const SignIn = () => {
  const [seePassword, setSeePassword] = useState(false);
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<SignInProps>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: SignInProps) => {
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
        placeholder="Email"
        type="email"
        {...register('email')}
        errors={errors.email}
        inputIcon={emailIcon}
      />

      <PasswordWrapper>
        <InputIcon
          placeholder="Password"
          type={!seePassword ? 'password' : 'text'}
          {...register('password')}
          handlePassword={() => setSeePassword((s) => !s)}
          hidePasswordIcon={hidePassword}
          errors={errors.password}
          inputIcon={passwordIcon}
        />

        <p>Forgot password?</p>
      </PasswordWrapper>

      <ActionWrapper>
        <ButtonWrapper>
          <Button title="Sign In" color="PRIMARY" />
        </ButtonWrapper>

        <SignUpMessage>
          Don’t have an account?
          <span> Sign up to </span>
          <span>Coin</span>
          <span>Synch</span>
        </SignUpMessage>
      </ActionWrapper>
    </Container>
  );
};

export default SignIn;
