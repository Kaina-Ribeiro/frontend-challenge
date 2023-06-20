import styled from 'styled-components';

export const Container = styled.div`
  .embla {
    --slide-spacing: 1rem;
    --slide-size: 50%;
    --slide-height: 19rem;
    padding: 1.6rem;
  }
  .embla__viewport {
    overflow: hidden;
  }
  .embla__container {
    backface-visibility: hidden;
    display: flex;
    touch-action: pan-y;
    flex-direction: row;
    height: auto;
    margin-left: calc(var(--slide-spacing) * -1);
  }
  .embla__slide {
    flex: 0 0 var(--slide-size);
    min-width: 0;
    padding-left: var(--slide-spacing);
    position: relative;
  }
  .embla__slide__img {
    display: block;
    height: 499px;
    width: 384px;
    object-fit: scale-down;
  }

  .embla__class-names {
    transition: opacity 0.2s ease-in-out;
  }
  .embla__class-names:not(.is-selected) {
    opacity: 0.16;
  }
`;
