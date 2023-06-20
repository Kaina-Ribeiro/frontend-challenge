import logoImg from '../../assets/logo.svg';
import { Container, LeftContentWrapper, RightContentWrapper, TitlesWrapper } from './styles';
import Link from 'next/link';
import { Button } from '../Button';
import Image from 'next/image';

const Header = () => {
  return (
    <Container>
      <LeftContentWrapper>
        <Image src={logoImg} alt="logo"></Image>

        <TitlesWrapper>
          <li>
            <Link href="#">About us</Link>
          </li>
          <li>
            <Link href="#">Top Cryptos</Link>
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
            <Button title={'Sign Up'} color="PRIMARY" />
          </li>
        </TitlesWrapper>
      </RightContentWrapper>
    </Container>
  );
};

export default Header;
