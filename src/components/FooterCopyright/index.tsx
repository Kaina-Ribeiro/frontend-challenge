import { Container } from './styles';
import copyrightLogo from '../../assets/copyrightLogo.svg';
import Image from 'next/image';

const FooterCopyright = () => {
  return (
    <Container>
      <label>Copyright 2022 - All rights reserved</label>
      <Image src={copyrightLogo} alt="copy-logo" />
    </Container>
  );
};

export default FooterCopyright;
