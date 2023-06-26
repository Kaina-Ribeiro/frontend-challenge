import {
  Container,
  WaveImage,
  Description,
  TitleDescription,
  Title,
  NewsPapperWrapper,
  NewsPapperDescription,
} from './styles';

import logo1 from '../../assets/footerBackground.svg';
import Subscribe from '../Subscribe';

const NewsLetter = () => {
  return (
    <Container>
      <NewsPapperWrapper>
        <NewsPapperDescription>
          <TitleDescription>Lorem ipsum</TitleDescription>
          <Title>Lorem ipsum</Title>

          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
            luctus venenatis, lectus magna fringilla urna, porttitor
          </Description>
        </NewsPapperDescription>

        <Subscribe />
      </NewsPapperWrapper>
      <WaveImage src={logo1} alt="Wave" />
    </Container>
  );
};

export default NewsLetter;
