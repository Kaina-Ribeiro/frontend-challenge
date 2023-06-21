import type { NextPageWithLayout } from './_app';

import { ReactElement } from 'react';

import LayoutDashboard from '@/components/LayoutDashboard';

import Head from 'next/head';
import DashboardContent from '@/components/DashboardContent';

const dashboard: NextPageWithLayout = () => {
  return (
    <>
      <DashboardContent />
    </>
  );
};

dashboard.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <LayoutDashboard>{page}</LayoutDashboard>
    </>
  );
};

export default dashboard;
