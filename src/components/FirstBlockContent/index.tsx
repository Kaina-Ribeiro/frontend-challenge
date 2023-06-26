import SignUpNow from '../SignUpNow';
import SwiperCarousel from '../SwiperCarousel';

import { Container, WavesImg, CarouselSection } from './styles';

import waves from '../../assets/test.svg';

const FirstBlockContent = () => {
  return (
    <Container>
      <CarouselSection>
        <SignUpNow />
        <SwiperCarousel />
      </CarouselSection>
      <WavesImg src={waves} alt="waves" />
    </Container>
  );
};

export default FirstBlockContent;
