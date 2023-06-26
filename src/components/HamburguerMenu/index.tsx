import Image from 'next/image';
import { ButtonMenu } from './styles';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { controlMenuState } from '@/store/slices/menuSlice';
import hamburgerMenu from '../../assets/hamburgerMenu.svg';

const HamburguerMenu = () => {
  const dispatch = useAppDispatch();

  return (
    <ButtonMenu onClick={() => dispatch(controlMenuState())}>
      <Image src={hamburgerMenu} alt="hamburguer menu" />
    </ButtonMenu>
  );
};

export default HamburguerMenu;
