import cryptoWallet from '../../assets/cardsIcons/cryptoWallet.svg';
import crypto from '../../assets/cardsIcons/cryptoIcon1.svg';
import crypto2 from '../../assets/cardsIcons/cryptoIcon2.svg';
import business from '../../assets/cardsIcons/business.svg';

import Image from 'next/image';

import { Container } from './styles';

const SideNav = () => {
  return (
    <Container>
      <Image src={cryptoWallet} width={32} height={32} alt="cryptoWallet" />
      <Image src={crypto2} width={32} height={32} alt="crypto2 logo" />
      <Image src={crypto} width={32} height={32} alt="crypto logo" />
      <Image src={business} width={32} height={32} alt="business logo" />
    </Container>
  );
};

export default SideNav;
