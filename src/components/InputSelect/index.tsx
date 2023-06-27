import {
  ArrowImage,
  ArrowRight,
  CryptoAbrvName,
  CryptoFullName,
  CryptoLogo,
  InputSelectButton,
  InputSelectContainer,
  InputSelectContent,
  ItemOption,
  OptionCoinWrapper,
} from './styles';
import arrowDownLight from '../../assets/arrowDownLight.svg';
import arrowRight from '../../assets/arrowRight.svg';
import { useState } from 'react';

type OptionProp = {
  logo: any;
  crypto: string;
};

type InputSelectProps = {
  selected: OptionProp;
  options: OptionProp[];
  setSelected?: () => void;
};

const InputSelect = ({ options, selected, setSelected }: InputSelectProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (item: OptionProp) => {
    console.log(item, 'aosaisoaisaoiso');
    const aux = { crypto: item.crypto, logo: item.logo };

    setSelected(aux);
    setIsActive(false);
  };

  const handleCryptoName = (cryptoName: string) => {
    const name = cryptoName.split(' ');

    return (
      <>
        <CryptoFullName>
          {name[0]} <CryptoAbrvName>{name[1]}</CryptoAbrvName>
        </CryptoFullName>
      </>
    );
  };

  return (
    <InputSelectContainer>
      <InputSelectButton onClick={() => setIsActive((i) => !i)}>
        {selected && selected.crypto ? (
          <OptionCoinWrapper>
            <CryptoLogo src={selected.logo} alt={selected.crypto} />

            {handleCryptoName(selected.crypto)}
          </OptionCoinWrapper>
        ) : (
          'Choose'
        )}
        <ArrowImage src={arrowDownLight} alt="input select arrow" />
      </InputSelectButton>

      {isActive && (
        <InputSelectContent>
          {options?.map((item) => {
            return (
              <ItemOption key={item.crypto} onClick={() => handleChange(item)}>
                <OptionCoinWrapper>
                  <CryptoLogo src={item.logo} alt={item.crypto} />

                  {handleCryptoName(item.crypto)}
                </OptionCoinWrapper>

                <ArrowRight src={arrowRight} alt="arrowRight icon" />
              </ItemOption>
            );
          })}
        </InputSelectContent>
      )}
    </InputSelectContainer>
  );
};

export default InputSelect;
