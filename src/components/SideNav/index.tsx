import cryptoWallet from '../../assets/cardsIcons/cryptoWallet.svg';
import crypto from '../../assets/cardsIcons/cryptoIcon1.svg';
import crypto2 from '../../assets/cardsIcons/cryptoIcon2.svg';
import business from '../../assets/cardsIcons/business.svg';

import { SideNavContainer } from './styles';

import NavBar from './NavBar/NavBar';
import { useAppSelector } from '@/hooks/reduxHooks';

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

const SideNav = () => {
  const menuState = useAppSelector((state) => state.menu.open);

  return (
    <SideNavContainer showboard={menuState}>
      <NavBar navButtons={navButtons} hide={menuState} />
    </SideNavContainer>
  );
};

export default SideNav;
