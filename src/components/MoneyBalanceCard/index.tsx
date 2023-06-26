import {
  BalanceImage,
  BalanceInfoWrapper,
  Container,
  ImageWrapper,
  MoneyDescription,
  MoneyInfo,
  SmallDescription,
  TotalValue,
} from './styles';
import balance from '../../assets/cardsIcons/balance.svg';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const MoneyBalanceCard = () => {
  const matches = useMediaQuery('600px');
  return (
    <Container>
      <BalanceInfoWrapper>
        <ImageWrapper>
          <BalanceImage src={balance} alt="Balance Logo" />
        </ImageWrapper>

        <div>
          <MoneyInfo>
            Balance <span>in US$</span>
          </MoneyInfo>
          <SmallDescription>{matches ? 'in US$' : '(approximately)'}</SmallDescription>
        </div>
      </BalanceInfoWrapper>

      <TotalValue>
        <MoneyDescription>$32,256.56</MoneyDescription>
      </TotalValue>
    </Container>
  );
};

export default MoneyBalanceCard;
