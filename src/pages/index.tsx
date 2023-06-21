import Layout from '@/components/Layout';
import type { NextPageWithLayout } from './_app';

import { ReactElement } from 'react';

import FirstBlockContent from '@/components/FirstBlockContent';
import SecondBlockContent from '@/components/SecondBlockContent';
import ThirdBlockContent from '@/components/ThirdBlockContent';

import NewsLetter from '@/components/NewsLetter';

const Home: NextPageWithLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <FirstBlockContent />
      <SecondBlockContent />
      <ThirdBlockContent />
      <NewsLetter />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
