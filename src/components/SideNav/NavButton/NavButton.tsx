import React from 'react';

import { ButtonContainer, IconImage, Label, NavButtonContainer } from './styles';
import { Tooltip } from 'react-tooltip';

type NavButtonProps = {
  hide: boolean;
  path: string;
  label: string;
  icon: string;
};
const NavButton = ({ hide, path, label, icon }: NavButtonProps) => {
  return (
    <NavButtonContainer href={path} passHref>
      <ButtonContainer hide={hide} data-tooltip-id="Lorem Ipsum" data-tooltip-content="Lorem Ipsum">
        <IconImage src={icon} alt="tst" />
        {hide && <Label hide={hide}>{label}</Label>}
      </ButtonContainer>
      <Tooltip className="tooltip-background" id={`Lorem Ipsum`} place="right" />
    </NavButtonContainer>
  );
};

export default NavButton;
