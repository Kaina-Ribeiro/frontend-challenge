import CryptoCard from '../CryptoCard';
import { CardGroup1, CardGroup2, CardsWrapper, Container } from './styles';
import cryptoIcon1 from '../../assets/cardsIcons/cryptoIcon1.svg';
import cryptoIcon2 from '../../assets/cardsIcons/cryptoIcon2.svg';
import business from '../../assets/cardsIcons/business.svg';
import computer from '../../assets/cardsIcons/computer.svg';
import DescriptionText from '../DescriptionText';

const SecondBlockContent = () => {
  return (
    <Container>
      <CardsWrapper>
        <CardGroup1>
          <CryptoCard
            imageLogo={cryptoIcon1}
            label={'For your company'}
            title={'Crypto Solutions'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,'}
          />
          <CryptoCard
            imageLogo={cryptoIcon2}
            label={'For your company'}
            title={'Crypto Solutions'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,'}
          />
        </CardGroup1>

        <CardGroup2>
          <CryptoCard
            imageLogo={business}
            label={'For your company'}
            title={'Crypto Solutions'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,'}
          />
          <CryptoCard
            imageLogo={computer}
            label={'For your company'}
            title={'Crypto Solutions'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,'}
          />
        </CardGroup2>
      </CardsWrapper>

      <DescriptionText />
    </Container>
  );
};

export default SecondBlockContent;
