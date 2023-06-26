import logoImg from '../../assets/logo.svg';

import Link from 'next/link';

import Image from 'next/image';
import { Button } from '../Button';
import {
  ButtonHeader,
  Container,
  LeftContentWrapper,
  RightContentWrapper,
  TitlesWrapper,
} from './styles';
import { useState } from 'react';
import Profile from '../Profile';
import ConfirmationModal from '../ConfirmationModal';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const Header = () => {
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
          <TitlesWrapper>
            <li>
              <label>
                BIT R$ 23,62 <span style={{ color: 'green' }}>+7,082</span>
              </label>
            </li>
            <li>
              <label>
                DOG R$ 23,62 <span style={{ color: 'red' }}>-5,230</span>
              </label>
            </li>
          </TitlesWrapper>

          <TitlesWrapper>
            <li>
              <Button
                title={'Sign In'}
                onClick={() => setSignInModal(!signInModal)}
                color="WHITE"
              />
            </li>
            <li>
              <ButtonHeader
                title={'Sign Up'}
                onClick={() => setSignUpModal(!signUpModal)}
                color="PRIMARY"
              />
            </li>
          </TitlesWrapper>
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

export default Header;
