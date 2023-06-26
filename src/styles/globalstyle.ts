import { Roboto } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  font-family: ${roboto.style.fontFamily}, sans-serif;
}

  :focus {
    outline: 0;
  }

  html,
  body,
  #next {
    height: 100%;
  }

  html,
  body {
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  h1, h2, h3, h4, h5, p, label, small {
    color: ${({ theme }) => theme.colors.textBase};
  }

  h1 {
    font-size: ${({ theme }) => theme.font_size.XXXL}px;
    line-height: 56px;
    letter-spacing: -1px;
  }

  h2 {
    font-size: ${({ theme }) => theme.font_size.XXL}px;
    line-height: 48px;
    letter-spacing: -1px;
  }

  h3 {
    font-size: ${({ theme }) => theme.font_size.XL}px;
    line-height: 40px;
    letter-spacing: 0;
  }

  h4 {
    font-size: ${({ theme }) => theme.font_size.L}px;
    line-height: 32px;
    letter-spacing: 0;
  }
  h5 {
    font-size: ${({ theme }) => theme.font_size.MD}px;
    line-height: 24px;
    letter-spacing: 0;
  }

  p {
    font-size: ${({ theme }) => theme.font_size.SM}px;
    line-height: 24px;
    letter-spacing: 0;
  }

  label {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 16px;
    letter-spacing: 0;
  }

  small {
    font-size: ${({ theme }) => theme.font_size.XXSM}px;
    line-height: 14px;
    letter-spacing: 0;
  }


  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper {
    gap: 60px;
  }

  .swiper-slide {
    width: 60%;
  }

  .swiper-slide:nth-child(2n) {
    width: 40%;
  }

  .swiper-slide:nth-child(3n) {
    width: 20%;
  }

`;

export default GlobalStyle;
