import GlobalStyle from '@/styles/globalstyle';
import { defaultTheme } from '@/styles/themes/default';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { persistor, store } from '../store/store';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-tooltip/dist/react-tooltip.css';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
