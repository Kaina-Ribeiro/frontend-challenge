import { Container, Description, ImageLabel, SvgImage } from './styles';

type CryptoCardProps = {
  imageLogo: string;
  label: string;
  title: string;
  description: string;
};

const CryptoCard = ({ imageLogo, label, title, description }: CryptoCardProps) => {
  return (
    <Container>
      <SvgImage src={imageLogo} alt="logo" />

      <ImageLabel>{label}</ImageLabel>
      <h4>{title}</h4>
      <Description>{description}</Description>
    </Container>
  );
};

export default CryptoCard;
