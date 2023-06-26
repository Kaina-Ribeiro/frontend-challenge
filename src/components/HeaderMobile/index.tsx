import logoImg from '../../assets/logo.svg';

import Image from 'next/image';

import { Container, HeaderFooter, HeaderTitle, LoggedHeader } from './styles';
import { useState } from 'react';

import ConfirmationModal from '../ConfirmationModal';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import TextScroll from '../TextScroll';
import { useAppSelector } from '@/hooks/reduxHooks';
import { userState } from '@/store/slices/userSlice';
import DropdownMenu from '../DropdownMenu';
import HamburguerMenu from '../HamburguerMenu';

const HeaderMobile = ({ withScroll = true }: { withScroll?: boolean }) => {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const { user } = useAppSelector(userState);

  return (
    <Container>
      {!user.email ? (
        <HeaderTitle>
          <Image src={logoImg} alt="logo" />
          <HamburguerMenu />
        </HeaderTitle>
      ) : (
        <LoggedHeader>
          <HamburguerMenu />
          <Image src={logoImg} alt="logo" />
          <DropdownMenu />
        </LoggedHeader>
      )}

      {!user.email && withScroll && (
        <HeaderFooter>
          <TextScroll />
        </HeaderFooter>
      )}

      {signInModal && (
        <ConfirmationModal
          modalwidth={320}
          modalheight={343}
          isOpen={signInModal}
          handleClose={() => setSignInModal(!signInModal)}
        >
          <SignIn />
        </ConfirmationModal>
      )}

      {signUpModal && (
        <ConfirmationModal
          modalwidth={320}
          modalheight={552}
          isOpen={signUpModal}
          handleClose={() => setSignUpModal(!signUpModal)}
        >
          <SignUp />
        </ConfirmationModal>
      )}
    </Container>
  );
};

export default HeaderMobile;
