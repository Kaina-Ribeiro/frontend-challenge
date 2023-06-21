import { Container, GraphImage, Title, NewsWrapper, ReadMore, Description } from './styles';

import elephant from '../../assets/cardsIcons/elephant.svg';

const NewsCard = () => {
  return (
    <Container>
      <NewsWrapper>
        <Title>NFT’s NEWS</Title>

        <Description>New ElephantX NFT to be lauched!</Description>
        <ReadMore>Read more +</ReadMore>
      </NewsWrapper>

      <GraphImage src={elephant} alt="news image" />
    </Container>
  );
};

export default NewsCard;
