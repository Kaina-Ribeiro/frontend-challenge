import { Container, Title } from './styles';

import emptyWallet from '../../assets/cardsIcons/emptyWallet.svg';

import Image from 'next/image';

const NothingHereYet = () => {
  return (
    <Container>
      <Image src={emptyWallet} alt="news image" />
      <Title>Nothing here yet...</Title>
      <label>Add a crypto and start earning</label>
    </Container>
  );
};

export default NothingHereYet;
