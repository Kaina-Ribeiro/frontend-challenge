import { CardsWrapper, Container, InfoCards } from './styles';

import MoneyBalanceCard from '../MoneyBalanceCard';
import DailyVariationCard from '../DailyVariationCard';
import NewsCard from '../NewsCard';
import MyWallet from '../MyWallet';
import MyWalletMobile from '../MyWalletMobile';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const DashboardContent = () => {
  const matches = useMediaQuery('600px');
  return (
    <Container>
      <InfoCards>
        <MoneyBalanceCard />
        <CardsWrapper>
          <DailyVariationCard />
          <NewsCard />
        </CardsWrapper>
      </InfoCards>

      {matches ? <MyWalletMobile /> : <MyWallet />}
    </Container>
  );
};

export default DashboardContent;
