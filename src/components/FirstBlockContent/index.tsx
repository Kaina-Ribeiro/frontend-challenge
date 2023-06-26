import SignUpNow from '../SignUpNow';
import SwiperCarousel from '../SwiperCarousel';

import { Container, WavesImg, CarouselSection } from './styles';

import waves from '../../assets/test.svg';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const FirstBlockContent = () => {
  const matchesMobile = useMediaQuery('600px');

  return (
    <Container>
      <CarouselSection>
        <SignUpNow />
        {!matchesMobile && <SwiperCarousel />}
      </CarouselSection>
      <WavesImg src={waves} alt="waves" />
    </Container>
  );
};

export default FirstBlockContent;
