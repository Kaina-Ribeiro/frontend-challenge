import 'styled-components';
import { defaultTheme } from '@/styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    COLORS: {
      primary: {
        orange100: string;
        orange200: string;
        orange300: string;
        orange400: string;
        orange500: string;
        orange600: string;
        orange700: string;
        orange800: string;
        orange900: string;
      };
      secondary: {
        gray100: string;
        gray200: string;
        gray300: string;
        gray400: string;
        gray500: string;
        gray600: string;
        gray700: string;
        gray800: string;
        gray900: string;
      };
      tertiary: {
        green100: string;
        green200: string;
        green300: string;
        green400: string;
        green500: string;
        green600: string;
        green700: string;
        green800: string;
        green900: string;
      };
      quartenary: {
        red100: string;
        red200: string;
        red300: string;
        red400: string;
        red500: string;
        red600: string;
        red700: string;
        red800: string;
        red900: string;
      };
      white: string;
      black: string;
      textBase: string;
    };

    FONT_SIZE: {
      XXSM: number;
      XSM: number;
      SM: number;
      MD: number;
      L: number;
      XL: number;
      XXL: number;
      XXXL: number;
    };
  }
}
