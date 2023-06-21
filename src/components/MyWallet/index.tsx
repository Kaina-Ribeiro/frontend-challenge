import { Container, CardHeader, Title, TitleWrapper, AddCryptoButton, CardBody } from './styles';

import cryptoWallet from '../../assets/cardsIcons/cryptoWallet.svg';
import plus from '../../assets/plus.svg';

import Image from 'next/image';
// import NothingHereYet from '../NothingHereYet';
import CryptoTable from '../CryptoTable';

const MyWallet = () => {
  return (
    <Container>
      <CardHeader>
        <TitleWrapper>
          <Image src={cryptoWallet} alt="news image" />
          <Title>My Wallet</Title>
        </TitleWrapper>

        <AddCryptoButton>
          <Image src={plus} alt="button plus" />
          <span>Add crypto</span>
        </AddCryptoButton>
      </CardHeader>

      <CardBody>
        {/* <NothingHereYet /> */}

        <CryptoTable />
      </CardBody>
    </Container>
  );
};

export default MyWallet;
