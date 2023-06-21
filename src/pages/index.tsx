import Layout from '@/components/Layout';
import type { NextPageWithLayout } from './_app';

import { ReactElement } from 'react';

import FirstBlockContent from '@/components/FirstBlockContent';
import SecondBlockContent from '@/components/SecondBlockContent';

const Home: NextPageWithLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <FirstBlockContent />
      <SecondBlockContent />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
