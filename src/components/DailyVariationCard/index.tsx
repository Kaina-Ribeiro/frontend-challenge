import {
  Container,
  CryptoName,
  GraphImage,
  Title,
  VariationWrapper,
  VariationText,
  CryptoInfo,
  CryptoAbrvName,
  CryptoLogo,
} from './styles';
import ethereum from '../../assets/cryptosLogo/ethereum.svg';
import graph from '../../assets/cardsIcons/graph.svg';

const DailyVariationCard = () => {
  return (
    <Container>
      <VariationWrapper>
        <Title>Daily Variation</Title>

        <CryptoInfo>
          <CryptoName>
            <CryptoLogo src={ethereum} alt="Balance Logo" />
            <CryptoAbrvName>ETH</CryptoAbrvName>
          </CryptoName>

          <VariationText>+5,65%</VariationText>
        </CryptoInfo>
      </VariationWrapper>

      <GraphImage src={graph} alt="Balance Logo" />
    </Container>
  );
};

export default DailyVariationCard;
