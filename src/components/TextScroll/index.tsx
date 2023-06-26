import { CoinInfo, CoinName, CoinValue, Scroll, TextBox, TextGreen, TextRed } from './styles';

const TextScroll = () => {
  return (
    <TextBox>
      <Scroll>
        <CoinInfo>
          <CoinName>BIT</CoinName> <CoinValue>R$ 23,62</CoinValue> <TextGreen>+7,082</TextGreen>
        </CoinInfo>
        <CoinInfo>
          <CoinName>DOG</CoinName> <CoinValue>R$ 23,62</CoinValue> <TextRed>-5,230</TextRed>{' '}
        </CoinInfo>
        <CoinInfo>
          <CoinName>ETH</CoinName> <CoinValue>R$ 23,62</CoinValue> <TextGreen>+1,023</TextGreen>
        </CoinInfo>

        <CoinInfo>
          <CoinName>BIT</CoinName> <CoinValue>R$ 23,62</CoinValue> <TextGreen>+7,082</TextGreen>
        </CoinInfo>
        <CoinInfo>
          <CoinName>DOG</CoinName> <CoinValue>R$ 23,62</CoinValue> <TextRed>-5,230</TextRed>{' '}
        </CoinInfo>
        <CoinInfo>
          <CoinName>ETH</CoinName> <CoinValue>R$ 23,62</CoinValue> <TextGreen>+1,023</TextGreen>
        </CoinInfo>
      </Scroll>
    </TextBox>
  );
};

export default TextScroll;
