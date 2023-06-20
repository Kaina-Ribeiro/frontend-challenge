import Layout from '@/components/Layout';
import type { NextPageWithLayout } from './_app';

import { ReactElement } from 'react';

import FirstBlockContent from '@/components/FirstBlockContent';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <FirstBlockContent />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
