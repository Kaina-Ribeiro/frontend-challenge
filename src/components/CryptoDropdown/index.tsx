import Image from 'next/image';
import arrowDropdown from '../../assets/arrowDropdown.svg';
import {
  Container,
  TitleWrapper,
  Title,
  DropdownWrapper,
  CryptoLogoName,
  DropdownBtn,
  DropdownItem,
  TextCrypto,
  TextValue,
  TextChange,
  CryptoInfo,
  ArrowImage,
} from './styles';
import logo1 from '../../assets/cryptosLogo/bitcoin.svg';
import logo2 from '../../assets/cryptosLogo/ethereum.svg';
import logo3 from '../../assets/cryptosLogo/cardano.svg';
import logo4 from '../../assets/cryptosLogo/solana.svg';
import { useState } from 'react';

const topCryptos = [
  { logo: logo1, cryptoName: 'Bitcoin BTC', price: 'US$ 25.499,52', change: '+5,65%' },
  { logo: logo2, cryptoName: 'Ethereum ETH', price: 'US$ 15.499,52', change: '-5,65%' },
  { logo: logo3, cryptoName: 'Cardano ADA', price: 'US$ 5.499,52', change: '-5,65%' },
  { logo: logo4, cryptoName: 'Solana SOL', price: 'US$ 2.499,52', change: '+5,65%' },
];

const CryptoDropdown = () => {
  const [clicked, setClicked] = useState(-1);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(-1);
    }
    setClicked(index);
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>Crypto</Title>
        <Title>Trade</Title>
      </TitleWrapper>

      {topCryptos.length > 0 &&
        topCryptos.map((item, index) => {
          return (
            <DropdownWrapper key={index}>
              <DropdownBtn onClick={() => handleToggle(index)}>
                <CryptoLogoName>
                  <Image src={item.logo} alt={`${item.cryptoName} Logo`} />
                  {item.cryptoName}
                </CryptoLogoName>

                <ArrowImage
                  active={clicked === index}
                  src={arrowDropdown}
                  alt={`${item.cryptoName} Arrow`}
                />
              </DropdownBtn>

              <DropdownItem active={clicked === index}>
                <CryptoInfo>
                  <TextCrypto>Price</TextCrypto>
                  <TextValue>US$ 25.499,52</TextValue>
                </CryptoInfo>
                <CryptoInfo>
                  <TextCrypto>Change</TextCrypto>
                  <TextChange>+5,65%</TextChange>
                </CryptoInfo>
              </DropdownItem>
            </DropdownWrapper>
          );
        })}
    </Container>
  );
};

export default CryptoDropdown;
