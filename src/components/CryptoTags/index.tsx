import { Container, TagText } from './styles';

type CryptoTagsProps = {
  text: string;
};
const CryptoTags = ({ text }: CryptoTagsProps) => {
  return (
    <Container>
      <TagText>{text}</TagText>
    </Container>
  );
};

export default CryptoTags;
