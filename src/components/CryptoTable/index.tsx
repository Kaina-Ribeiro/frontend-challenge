import { ButtonTable, CryptoLogoName, TableContainer } from './styles';

import logo1 from '../../assets/cryptosLogo/bitcoin.svg';
import logo2 from '../../assets/cryptosLogo/ethereum.svg';
import logo3 from '../../assets/cryptosLogo/cardano.svg';
import logo4 from '../../assets/cryptosLogo/solana.svg';
import finance from '../../assets/cardsIcons/finance.svg';
import Image from 'next/image';

const CryptoTable = () => {
  const topCryptos = [
    { logo: logo1, crypto: 'Bitcoin BTC', price: 'US$ 25.499,52', change: '+5,65%' },
    { logo: logo2, crypto: 'Ethereum ETH', price: 'US$ 15.499,52', change: '-5,65%' },
    { logo: logo3, crypto: 'Cardano ADA', price: 'US$ 5.499,52', change: '-5,65%' },
    { logo: logo4, crypto: 'Solana SOL', price: 'US$ 2.499,52', change: '+5,65%' },
  ];
  return (
    <TableContainer>
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
                  <ButtonTable type="button">
                    <Image src={finance} alt={`${index} finance`} />
                  </ButtonTable>
                </td>
              </tr>
            );
          })}
      </tbody>
    </TableContainer>
  );
};

export default CryptoTable;
