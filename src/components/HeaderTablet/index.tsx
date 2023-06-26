import logoImg from '../../assets/logo.svg';
import hamburgerMenu from '../../assets/hamburgerMenu.svg';

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
  HeaderFooter,
  HeaderTitle,
  LoggedHeader,
} from './styles';
import { useState } from 'react';
import Profile from '../Profile';
import ConfirmationModal from '../ConfirmationModal';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import TextScroll from '../TextScroll';

const HeaderTablet = () => {
  const [logged, setLogged] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <Container>
      {!logged ? (
        <HeaderTitle>
          <LeftContentWrapper>
            <Image src={logoImg} alt="logo" />

            {!logged && (
              <TitlesWrapper>
                <li>
                  <Link href="/#" passHref>
                    <span>About us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" passHref>
                    <span>Top Cryptos</span>
                  </Link>
                </li>
              </TitlesWrapper>
            )}
          </LeftContentWrapper>

          <RightContentWrapper>
            <HeaderButtons>
              <Button
                title={'Sign In'}
                onClick={() => setSignInModal(!signInModal)}
                color="WHITE"
              />

              <ButtonWrapper>
                <Button
                  title={'Sign Up'}
                  onClick={() => setSignUpModal(!signUpModal)}
                  color="PRIMARY"
                />
              </ButtonWrapper>
            </HeaderButtons>
          </RightContentWrapper>
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

export default HeaderTablet;
