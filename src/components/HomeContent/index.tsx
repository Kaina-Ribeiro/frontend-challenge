import { Container } from './styles';

import FirstBlockContent from '../FirstBlockContent';
import SecondBlockContent from '../SecondBlockContent';
import ThirdBlockContent from '../ThirdBlockContent';
import NewsLetter from '../NewsLetter';

const HomeContent = () => {
  return (
    <Container>
      <FirstBlockContent />
      <SecondBlockContent />
      <ThirdBlockContent />
      <NewsLetter />
    </Container>
  );
};

export default HomeContent;
