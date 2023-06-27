import { useState } from 'react';
import Input from '../Input';
import InputSelect from '../InputSelect';
import { AddCryptoButton, AddCryptoContainer, ContentWrapper, Title } from './styles';
import { topCryptos } from '@/mocks/topCryptoArray';
type OptionProp = {
  logo: any;
  crypto: string;
};

const AddCrypto = () => {
  const [selected, setSelected] = useState<OptionProp>();

  return (
    <AddCryptoContainer>
      <Title>Add Crypto</Title>

      <ContentWrapper>
        <InputSelect options={topCryptos} selected={selected} setSelected={setSelected} />
        <Input type="number" placeholder="0,00" />
        <AddCryptoButton>Add Crypto</AddCryptoButton>
      </ContentWrapper>
    </AddCryptoContainer>
  );
};

export default AddCrypto;
