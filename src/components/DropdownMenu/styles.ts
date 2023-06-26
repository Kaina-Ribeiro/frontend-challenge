import Image from 'next/image';
import styled, { css } from 'styled-components';

export const DropdownMenuContainer = styled.div`
  position: relative;
  height: 100%;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const MenuTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ProfilePhoto = styled(Image)`
  width: 32px;
  height: 32px;
`;

type ArrowDropdownProps = {
  open: boolean;
};

export const ArrowDropdown = styled(Image)<ArrowDropdownProps>`
  width: 8px;
  height: 8px;
  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}

  transition: transform 0.2s;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  line-height: 16px;
`;

export const DropdownMenuWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 0;

  width: 124px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 20px;
    height: 20px;
    width: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: rotate(45deg);
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 0.2s ease;
  }

  &.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 0.2s ease;
  }

  & ul li:hover button {
    color: ${({ theme }) => theme.colors.primary.orange500};
    cursor: pointer;
  }
`;

export const DropdownItem = styled.li`
  & img {
    transition: 0.2s;
  }

  & button {
    transition: 0.2s;
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.secondary.gray500};

  background: none;
`;
