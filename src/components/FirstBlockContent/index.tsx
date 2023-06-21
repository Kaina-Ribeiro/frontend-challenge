import SignUpNow from '../SignUpNow';
import EmblaCarousel from '../EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import { CarouselContainer, Container, WavesImg } from './styles';
import { CaroulselSection } from '../Layout/styled';

import waves from '../../assets/test.svg';
const OPTIONS: EmblaOptionsType = { inViewThreshold: 1 };

const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const FirstBlockContent = () => {
  return (
    <Container>
      <CaroulselSection>
        <SignUpNow />

        <CarouselContainer>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </CarouselContainer>
      </CaroulselSection>

      <WavesImg src={waves} alt="waves" />
    </Container>
  );
};

export default FirstBlockContent;
