import {
  ButtonStyled,
  ButtonText,
  Container,
  Description,
  Title,
  TitleDescription,
} from './styles';

const DescriptionText = () => {
  return (
    <Container>
      <TitleDescription>Lorem ipsum</TitleDescription>
      <Title>Lorem ipsum</Title>

      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
        venenatis, lectus magna fringilla urna, porttitor
      </Description>

      <ButtonStyled type="button">
        <ButtonText>Sign up now</ButtonText>
      </ButtonStyled>
    </Container>
  );
};

export default DescriptionText;
