import cryptoWallet from '../../assets/cardsIcons/cryptoWallet.svg';
import crypto from '../../assets/cardsIcons/cryptoIcon1.svg';
import crypto2 from '../../assets/cardsIcons/cryptoIcon2.svg';
import business from '../../assets/cardsIcons/business.svg';

import { SideNavContainer } from './styles';

import NavBar from './NavBar/NavBar';

const navButtons = [
  {
    label: 'Lorem Ipsum',
    path: '/#',
    icon: cryptoWallet,
  },
  {
    label: 'Lorem Ipsum',
    path: '/#',
    icon: crypto2,
  },
  {
    label: 'Lorem Ipsum',
    path: '/#',
    icon: crypto,
  },
  {
    label: 'Lorem Ipsum',
    path: '/#',
    icon: business,
  },
];

const SideNav = ({ showboard }: { showboard: boolean }) => {
  return (
    <SideNavContainer showboard={showboard}>
      <NavBar navButtons={navButtons} hide={showboard} />
    </SideNavContainer>
  );
};

export default SideNav;
