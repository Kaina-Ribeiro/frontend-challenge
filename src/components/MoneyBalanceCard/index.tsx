import Image from 'next/image';
import {
  BalanceInfoWrapper,
  Container,
  ImageWrapper,
  MoneyDescription,
  MoneyInfo,
  MoneyInfoWrapper,
  TotalValue,
} from './styles';
import balance from '../../assets/cardsIcons/balance.svg';

const MoneyBalanceCard = () => {
  return (
    <Container>
      <BalanceInfoWrapper>
        <ImageWrapper>
          <Image src={balance} alt="Balance Logo"></Image>
        </ImageWrapper>
        <MoneyInfoWrapper>
          <MoneyInfo>Balance in US$</MoneyInfo>
          <span>
            <small>(approximately)</small>
          </span>
        </MoneyInfoWrapper>
      </BalanceInfoWrapper>
      <TotalValue>
        <MoneyDescription>$32,256.56</MoneyDescription>
      </TotalValue>
    </Container>
  );
};

export default MoneyBalanceCard;
