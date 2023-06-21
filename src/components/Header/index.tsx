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

const Header = () => {
  const [logged, setLogged] = useState(true);

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
              <Button title={'Sign In'} onClick={() => setLogged((l) => !l)} color="WHITE" />
            </li>
            <li>
              <ButtonHeader
                title={'Sign Up'}
                onClick={() => setLogged((l) => !l)}
                color="PRIMARY"
              />
            </li>
          </TitlesWrapper>
        </RightContentWrapper>
      )}
      {logged && <Profile onClick={() => setLogged((l) => !l)} />}
    </Container>
  );
};

export default Header;
