import {
  CardContent,
  CardHeader,
  ChangeDescription,
  Container,
  ContentTitle,
  ContentWrapper,
  CryptoLogo,
  CryptoName,
  HoldingDescription,
  PriceDescription,
  CryptoFullName,
  CryptoAbrvName,
  TradeButton,
} from './styles';

type CryptoWalletardProps = {
  logo: any;
  crypto: string;
  price: string;
  holding: string;
  change: string;
};

const CryptoWalletCard = ({ logo, crypto, price, holding, change }: CryptoWalletardProps) => {
  const handleCryptoName = (cryptoName: string) => {
    const name = cryptoName.split(' ');

    return (
      <>
        <CryptoFullName>
          {name[0]} <CryptoAbrvName>{name[1]}</CryptoAbrvName>
        </CryptoFullName>
      </>
    );
  };
  return (
    <Container>
      <CardHeader>
        <CryptoLogo src={logo} alt="logo" />
        <CryptoName>{handleCryptoName(crypto)}</CryptoName>
      </CardHeader>

      <CardContent>
        <ContentWrapper>
          <ContentTitle>Holdings</ContentTitle>
          <PriceDescription>{price}</PriceDescription>
          <HoldingDescription>{holding}</HoldingDescription>
        </ContentWrapper>

        <ContentWrapper>
          <ContentTitle>Change</ContentTitle>
          <ChangeDescription>{change}</ChangeDescription>
        </ContentWrapper>
        <TradeButton>Trade</TradeButton>
      </CardContent>
    </Container>
  );
};

export default CryptoWalletCard;
