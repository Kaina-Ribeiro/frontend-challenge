import { Container, CardHeader, Title, TitleWrapper, AddCryptoButton, CardBody } from './styles';

import cryptoWallet from '../../assets/cardsIcons/cryptoWallet.svg';
import plus from '../../assets/plus.svg';

import Image from 'next/image';
// import NothingHereYet from '../NothingHereYet';
import CryptoTable from '../CryptoTable';
import AddCrypto from '../AddCrypto';
import ConfirmationModal from '../ConfirmationModal';
import { useState } from 'react';

const MyWallet = () => {
  const [addCryptoModal, setAddCryptoModal] = useState(false);
  return (
    <Container>
      <CardHeader>
        <TitleWrapper>
          <Image src={cryptoWallet} alt="news image" />
          <Title>My Wallet</Title>
        </TitleWrapper>

        <AddCryptoButton onClick={() => setAddCryptoModal((a) => !a)}>
          <Image src={plus} alt="button plus" />
          <span>Add crypto</span>
        </AddCryptoButton>
      </CardHeader>

      <CardBody>
        {/* <NothingHereYet /> */}

        <CryptoTable />
      </CardBody>

      {addCryptoModal && (
        <ConfirmationModal
          modalwidth={272}
          modalheight={256}
          isOpen={addCryptoModal}
          handleClose={() => setAddCryptoModal((a) => !a)}
        >
          <AddCrypto />
        </ConfirmationModal>
      )}
    </Container>
  );
};

export default MyWallet;
