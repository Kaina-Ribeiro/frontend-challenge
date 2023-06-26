import logoImg from '../../assets/logo.svg';

import Link from 'next/link';

import Image from 'next/image';
import { Button } from '../Button';
import {
  Container,
  LeftContentWrapper,
  RightContentWrapper,
  TitlesWrapper,
  HeaderButtons,
  ButtonWrapper,
} from './styles';
import { useState } from 'react';
import Profile from '../Profile';
import ConfirmationModal from '../ConfirmationModal';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import TextScroll from '../TextScroll';

const HeaderDesktop = () => {
  const [logged, setLogged] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <Container>
      <LeftContentWrapper>
        <Image src={logoImg} alt="logo" />

        {!logged && (
          <TitlesWrapper>
            <li>
              <Link href="/dashboard">About us</Link>
            </li>
            <li>
              <Link href="/dashboard">Top Cryptos</Link>
            </li>
          </TitlesWrapper>
        )}
      </LeftContentWrapper>

      {!logged && (
        <RightContentWrapper>
          <TextScroll />

          <HeaderButtons>
            <Button title={'Sign In'} onClick={() => setSignInModal(!signInModal)} color="WHITE" />

            <ButtonWrapper>
              <Button
                title={'Sign Up'}
                onClick={() => setSignUpModal(!signUpModal)}
                color="PRIMARY"
              />
            </ButtonWrapper>
          </HeaderButtons>
        </RightContentWrapper>
      )}
      {logged && <Profile onClick={() => setLogged((l) => !l)} />}

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

export default HeaderDesktop;
