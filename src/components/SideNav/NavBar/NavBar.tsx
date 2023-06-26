import NavButton from '../NavButton/NavButton';

import { NavContainer } from './styles';
interface NavBarProps {
  hide: boolean;
  navButtons: { path: string; label: string; icon: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ hide, navButtons }: NavBarProps) => {
  return (
    <NavContainer className="NavBar">
      {navButtons.length &&
        navButtons.map((button, index) => (
          <NavButton
            key={index}
            hide={hide}
            path={button.path}
            label={button.label}
            icon={button.icon}
          />
        ))}
    </NavContainer>
  );
};

export default NavBar;
