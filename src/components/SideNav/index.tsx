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

const SideNav = () => {
  return (
    <Container>
      <LeftContentWrapper>
        <Image src={logoImg} alt="logo" />

        <TitlesWrapper>
          <li>
            <Link href="/dashboard">About us</Link>
          </li>
          <li>
            <Link href="/dashboard">Top Cryptos</Link>
          </li>
        </TitlesWrapper>
      </LeftContentWrapper>

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
            <Button title={'Sign In'} color="WHITE" />
          </li>
          <li>
            <ButtonHeader title={'Sign Up'} color="PRIMARY" />
          </li>
        </TitlesWrapper>
      </RightContentWrapper>
    </Container>
  );
};

export default SideNav;
