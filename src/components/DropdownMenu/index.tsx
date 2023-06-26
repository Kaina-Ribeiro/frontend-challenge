import {
  ArrowDropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenuContainer,
  DropdownMenuWrapper,
  MenuTrigger,
  Name,
  ProfilePhoto,
} from './styles';
import profileIcon from '../../assets/profile.svg';
import logout from '../../assets/logout.svg';
import arrowMenu from '../../assets/arrowMenu.svg';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { userLogout } from '@/store/slices/userSlice';

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return (
    <DropdownMenuContainer ref={menuRef}>
      <MenuTrigger
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ProfilePhoto src={profileIcon} alt="profile-photo" />
        <Name>Aulus</Name>
        <ArrowDropdown open={open} src={arrowMenu} alt="arrow dropdown icon" />
      </MenuTrigger>

      <DropdownMenuWrapper className={`${open ? 'active' : 'inactive'}`}>
        <ul>
          <DropdownItem className="dropdownItem">
            <DropdownButton onClick={() => dispatch(userLogout())}>
              <Image src={logout} alt="logout icon" />
              <span>Logout</span>
            </DropdownButton>
          </DropdownItem>
        </ul>
      </DropdownMenuWrapper>
    </DropdownMenuContainer>
  );
};

export default DropdownMenu;
