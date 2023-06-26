import logoImg from '../../assets/logo.svg';
import hamburgerMenu from '../../assets/hamburgerMenu.svg';

import Image from 'next/image';

import { Container, HeaderFooter, HeaderTitle, LoggedHeader } from './styles';
import { useState } from 'react';
import Profile from '../Profile';
import ConfirmationModal from '../ConfirmationModal';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import TextScroll from '../TextScroll';

const HeaderMobile = () => {
  const [logged, setLogged] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <Container>
      {!logged ? (
        <HeaderTitle>
          <Image src={logoImg} alt="logo" />
          <Image src={hamburgerMenu} alt="hamburguer menu" />
        </HeaderTitle>
      ) : (
        <LoggedHeader>
          <Image src={hamburgerMenu} alt="hamburguer menu" />
          <Image src={logoImg} alt="logo" />
          <Profile onClick={() => setLogged((l) => !l)} />
        </LoggedHeader>
      )}

      {!logged && (
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
