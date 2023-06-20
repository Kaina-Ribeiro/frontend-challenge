import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  color: 'PRIMARY' | 'WHITE';
};

export const Button = ({ title, color = 'PRIMARY', ...rest }: ButtonProps) => {
  return (
    <Container color={color} {...rest}>
      <p>{title}</p>
    </Container>
  );
};
