import {
  ButtonTable,
  CryptoHolding,
  CryptoLogoName,
  CryptoPrice,
  HoldingPrice,
  TableContainer,
  TradeImage,
} from './styles';

import finance from '../../assets/cardsIcons/finance.svg';
import Image from 'next/image';
import { topCryptos } from '@/mocks/topCryptoArray';
import { Tooltip } from 'react-tooltip';

const CryptoTable = () => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>#</th>
          <th>Crypto</th>
          <th>Holdings</th>
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

                <td>
                  <HoldingPrice>
                    <CryptoPrice>{item.price}</CryptoPrice>
                    <CryptoHolding>{item.holding}</CryptoHolding>
                  </HoldingPrice>
                </td>

                <td>{item.change}</td>

                <td>
                  <ButtonTable
                    data-tooltip-id={`transfer-crypto-${index}`}
                    data-tooltip-content="Transfer Crypto"
                    type="button"
                  >
                    <TradeImage src={finance} alt={`${index} finance`} />
                  </ButtonTable>

                  <Tooltip
                    className="tooltip-background"
                    id={`transfer-crypto-${index}`}
                    place="bottom"
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </TableContainer>
  );
};

export default CryptoTable;
