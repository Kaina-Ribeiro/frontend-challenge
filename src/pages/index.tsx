import Layout from '@/components/Layout';
import type { NextPageWithLayout } from './_app';

import { ReactElement } from 'react';

import Header from '@/components/Header';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Header />
      <h1>Hello World</h1>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
