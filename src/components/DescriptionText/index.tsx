import { ButtonStyled, ButtonText, Container, Description, TitleDescription } from './styles';

const DescriptionText = () => {
  return (
    <Container>
      <TitleDescription>Lorem ipsum</TitleDescription>
      <h2>Lorem ipsum</h2>

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
