import SignUpNow from '../SignUpNow';
import EmblaCarousel from '../EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import { Container, WavesImg, CaroulselSection } from './styles';

import waves from '../../assets/test.svg';
const OPTIONS: EmblaOptionsType = { inViewThreshold: 1 };

const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const FirstBlockContent = () => {
  return (
    <Container>
      <CaroulselSection>
        <SignUpNow />

        <div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </CaroulselSection>

      <WavesImg src={waves} alt="waves" />
    </Container>
  );
};

export default FirstBlockContent;
