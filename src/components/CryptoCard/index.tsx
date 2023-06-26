import { Container, CryptoCardTitle, Description, ImageLabel, SvgImage } from './styles';

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
      <CryptoCardTitle>{title}</CryptoCardTitle>
      <Description>{description}</Description>
    </Container>
  );
};

export default CryptoCard;
