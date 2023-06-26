import Layout from '@/components/Layout';
import type { NextPageWithLayout } from './_app';

import { ReactElement } from 'react';

import Head from 'next/head';
import HomeContent from '@/components/HomeContent';

const Home: NextPageWithLayout = () => {
  return <HomeContent />;
};

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Home;
