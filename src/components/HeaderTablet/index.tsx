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
  HeaderFooter,
  HeaderTitle,
  LoggedHeader,
} from './styles';
import { useState } from 'react';

import ConfirmationModal from '../ConfirmationModal';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import TextScroll from '../TextScroll';
import { useAppSelector } from '@/hooks/reduxHooks';

import DropdownMenu from '../DropdownMenu';
import { userState } from '@/store/slices/userSlice';
import HamburguerMenu from '../HamburguerMenu';

type HeaderTabletProps = {
  withScroll?: boolean;
};

const HeaderTablet = ({ withScroll = true }: HeaderTabletProps) => {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const { user } = useAppSelector(userState);

  return (
    <Container>
      {!user.email ? (
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

export default HeaderTablet;
