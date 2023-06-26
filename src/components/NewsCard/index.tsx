import { Container, Title, NewsWrapper, ReadMore, Description, ElephantImage } from './styles';

const NewsCard = () => {
  return (
    <Container>
      <NewsWrapper>
        <Title>NFT’s NEWS</Title>

        <Description>New ElephantX NFT to be lauched!</Description>
        <ReadMore>Read more +</ReadMore>
      </NewsWrapper>

      <ElephantImage />
    </Container>
  );
};

export default NewsCard;
