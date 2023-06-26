import ArrowSvg from '../../assets/arrow.svg';
import Image from 'next/image';
import CryptoTags from '../CryptoTags';
import { ButtonIcon, ButtonText, Container, Description, TagsWrapper, Title } from './styles';

const SignUpNow = () => {
  return (
    <Container>
      <Title>Lorem ipsum dolor sit amet, consectetur</Title>

      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
        venenatis, lectus magna fringilla urna, porttitor
      </Description>

      <ButtonIcon type="button">
        <ButtonText>SIGN UP NOW</ButtonText>
        <Image src={ArrowSvg} alt="arrow" />
      </ButtonIcon>

      <TagsWrapper>
        <CryptoTags text="Cryptos" />
        <CryptoTags text="NFTs" />
        <CryptoTags text="Games" />
      </TagsWrapper>
    </Container>
  );
};

export default SignUpNow;
