import { Container } from './styles';
import copyrightLogo from '../../assets/copyrightLogo.svg';
import Image from 'next/image';

const FooterCopyright = ({ logo = false }) => {
  return (
    <Container logo={logo}>
      <label>Copyright 2022 - All rights reserved</label>
      {logo && <Image src={copyrightLogo} alt="copy-logo" />}
    </Container>
  );
};

export default FooterCopyright;
