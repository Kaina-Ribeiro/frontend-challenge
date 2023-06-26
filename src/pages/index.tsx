import Layout from '@/components/Layout';
import type { NextPageWithLayout } from './_app';

import { ReactElement } from 'react';

import Head from 'next/head';
import HomeContent from '@/components/HomeContent';
import { GetServerSideProps } from 'next';

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = ctx.req.cookies[process.env.USER_TOKEN as string];

  if (user) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
