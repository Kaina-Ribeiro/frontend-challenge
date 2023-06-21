import Image from 'next/image';
import {
  Container,
  CryptoName,
  GraphImage,
  Title,
  VariationWrapper,
  VariationText,
} from './styles';
import ethereum from '../../assets/cryptosLogo/ethereum.svg';
import graph from '../../assets/cardsIcons/graph.svg';

const DailyVariationCard = () => {
  return (
    <Container>
      <VariationWrapper>
        <Title>Daily Variation</Title>

        <CryptoName>
          <Image src={ethereum} alt="Balance Logo" />

          <label>ETH</label>
        </CryptoName>
        <VariationText>+5,65%</VariationText>
      </VariationWrapper>

      <GraphImage src={graph} alt="Balance Logo" />
    </Container>
  );
};

export default DailyVariationCard;
