import {
  Container,
  CardHeader,
  Title,
  TitleWrapper,
  AddCryptoButton,
  CryptosWalletWrapper,
} from './styles';

import cryptoWallet from '../../assets/cardsIcons/cryptoWallet.svg';
import plus from '../../assets/plus.svg';

import Image from 'next/image';
// import NothingHereYet from '../NothingHereYet';
import CryptoWalletCard from '../CryptoWalletCard';
import { topCryptos } from '../../mocks/topCryptoArray';

const MyWalletMobile = () => {
  return (
    <Container>
      <CardHeader>
        <TitleWrapper>
          <Image src={cryptoWallet} width={24} height={24} alt="news image" />
          <Title>My Wallet</Title>
        </TitleWrapper>

        <AddCryptoButton>
          <Image src={plus} width={12} height={12} alt="button plus" />
        </AddCryptoButton>
      </CardHeader>

      {/* <CardBody>
        <NothingHereYet />
      </CardBody> */}
      <CryptosWalletWrapper>
        {topCryptos.map((item, index) => {
          return (
            <CryptoWalletCard
              key={index}
              logo={item.logo}
              crypto={item.crypto}
              price={item.price}
              holding={item.holding}
              change={item.change}
            />
          );
        })}
      </CryptosWalletWrapper>
    </Container>
  );
};

export default MyWalletMobile;
