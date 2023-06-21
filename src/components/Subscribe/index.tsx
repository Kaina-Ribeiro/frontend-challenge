import {
  Container,
  InputSubscribe,
  LabelInput,
  LabelSubscribe,
  SubscribeButton,
  SubscribeButtonText,
} from './styles';

const Subscribe = () => {
  return (
    <Container>
      <LabelInput>
        <LabelSubscribe htmlFor="email">Email:</LabelSubscribe>
        <InputSubscribe id="email" type="email" name="email" placeholder="Email" />
      </LabelInput>
      <SubscribeButton>
        <SubscribeButtonText>Subscribe</SubscribeButtonText>
      </SubscribeButton>
    </Container>
  );
};

export default Subscribe;
