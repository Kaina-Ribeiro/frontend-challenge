import { Container, EmptyMessage, Title, EmptyWalletIcon } from './styles';

import emptyWallet from '../../assets/cardsIcons/emptyWallet.svg';

const NothingHereYet = () => {
  return (
    <Container>
      <EmptyWalletIcon src={emptyWallet} alt="news image" />
      <Title>Nothing here yet...</Title>
      <EmptyMessage>Add a crypto and start earning</EmptyMessage>
    </Container>
  );
};

export default NothingHereYet;
