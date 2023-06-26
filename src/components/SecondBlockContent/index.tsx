import CryptoCard from '../CryptoCard';
import { CardGroup1, CardGroup2, CardsWrapper, Container, CryptoSwiper } from './styles';
import cryptoIcon1 from '../../assets/cardsIcons/cryptoIcon1.svg';
import cryptoIcon2 from '../../assets/cardsIcons/cryptoIcon2.svg';
import business from '../../assets/cardsIcons/business.svg';
import computer from '../../assets/cardsIcons/computer.svg';
import DescriptionText from '../DescriptionText';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper';

const SecondBlockContent = () => {
  const cardsLogo = [cryptoIcon1, cryptoIcon2, business, computer];
  const matches = useMediaQuery('320px');

  return (
    <Container>
      {matches ? (
        <CryptoSwiper
          modules={[Virtual]}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          virtual
        >
          {cardsLogo.map((logo, index) => {
            return (
              <SwiperSlide key={index}>
                <CryptoCard
                  imageLogo={logo}
                  label={'For your company'}
                  title={'Crypto Solutions'}
                  description={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,'
                  }
                />
              </SwiperSlide>
            );
          })}
        </CryptoSwiper>
      ) : (
        <CardsWrapper>
          <CardGroup1>
            <CryptoCard
              imageLogo={cardsLogo[0]}
              label={'For your company'}
              title={'Crypto Solutions'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,'}
            />
            <CryptoCard
              imageLogo={cardsLogo[1]}
              label={'For your company'}
              title={'Crypto Solutions'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,'}
            />
          </CardGroup1>

          <CardGroup2>
            <CryptoCard
              imageLogo={cardsLogo[2]}
              label={'For your company'}
              title={'Crypto Solutions'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,'}
            />
            <CryptoCard
              imageLogo={cardsLogo[3]}
              label={'For your company'}
              title={'Crypto Solutions'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,'}
            />
          </CardGroup2>
        </CardsWrapper>
      )}

      <DescriptionText />
    </Container>
  );
};

export default SecondBlockContent;
