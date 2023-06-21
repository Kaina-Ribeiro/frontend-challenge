import {
  ButtonIcon,
  ButtonIconText,
  ButtonText,
  BuyButton,
  Container,
  CryptoLogoName,
  ImageIcon,
  Table,
} from './styles';
import Plus from '../../assets/plus.svg';

import logo1 from '../../assets/cryptosLogo/bitcoin.svg';
import logo2 from '../../assets/cryptosLogo/ethereum.svg';
import logo3 from '../../assets/cryptosLogo/cardano.svg';
import logo4 from '../../assets/cryptosLogo/solana.svg';
import Image from 'next/image';

const ThirdBlockContent = () => {
  const topCryptos = [
    { logo: logo1, crypto: 'Bitcoin BTC', price: 'US$ 25.499,52', change: '+5,65%' },
    { logo: logo2, crypto: 'Ethereum ETH', price: 'US$ 15.499,52', change: '-5,65%' },
    { logo: logo3, crypto: 'Cardano ADA', price: 'US$ 5.499,52', change: '-5,65%' },
    { logo: logo4, crypto: 'Solana SOL', price: 'US$ 2.499,52', change: '+5,65%' },
  ];
  return (
    <Container>
      <h3>Top Cryptos</h3>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Crypto</th>
            <th>Price</th>
            <th>Change</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {topCryptos.length > 0 &&
            topCryptos.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>
                    <CryptoLogoName>
                      <Image src={item.logo} alt={`${item.crypto} Logo`} />
                      {item.crypto}
                    </CryptoLogoName>
                  </td>

                  <td>{item.price}</td>

                  <td>{item.change}</td>

                  <td>
                    <BuyButton>
                      <ButtonText> Buy</ButtonText>
                    </BuyButton>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <ButtonIcon type="button">
        <ButtonIconText>View More</ButtonIconText>
        <ImageIcon src={Plus} alt="plus" />
      </ButtonIcon>
    </Container>
  );
};

export default ThirdBlockContent;
