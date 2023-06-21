import { Container, InfoCards } from './styles';

import MoneyBalanceCard from '../MoneyBalanceCard';
import DailyVariationCard from '../DailyVariationCard';
import NewsCard from '../NewsCard';
import MyWallet from '../MyWallet';

const DashboardContent = () => {
  return (
    <Container>
      <InfoCards>
        <MoneyBalanceCard />
        <DailyVariationCard />
        <NewsCard />
      </InfoCards>
      <MyWallet />
    </Container>
  );
};

export default DashboardContent;
