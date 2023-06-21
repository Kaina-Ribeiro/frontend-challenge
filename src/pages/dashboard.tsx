import type { NextPageWithLayout } from './_app';

import { ReactElement } from 'react';

import LayoutDashboard from '@/components/LayoutDashboard';
import MoneyBalanceCard from '@/components/MoneyBalanceCard';
import DailyVariationCard from '@/components/DailyVariationCard';
import NewsCard from '@/components/NewsCard';

const dashboard: NextPageWithLayout = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <MoneyBalanceCard />
      <DailyVariationCard />
      <NewsCard />
    </div>
  );
};

dashboard.getLayout = (page: ReactElement) => {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default dashboard;
