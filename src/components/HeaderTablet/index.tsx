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
  ButtonMenu,
} from './styles';
import { useState } from 'react';
import Profile from '../Profile';
import ConfirmationModal from '../ConfirmationModal';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import TextScroll from '../TextScroll';

type HeaderTabletProps = {
  withScroll?: boolean;
  handleOpenMenu: () => void;
};

const HeaderTablet = ({ withScroll = true, handleOpenMenu }: HeaderTabletProps) => {
  const [logged, setLogged] = useState(true);
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <Container>
      {!logged ? (
        <HeaderTitle>
          <LeftContentWrapper>
            <Image src={logoImg} alt="logo" />

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
          <ButtonMenu onClick={handleOpenMenu}>
            <Image src={hamburgerMenu} alt="hamburguer menu" />
          </ButtonMenu>
          <Image src={logoImg} alt="logo" />
          <Profile onClick={() => setLogged((l) => !l)} />
        </LoggedHeader>
      )}

      {!logged && withScroll && (
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
