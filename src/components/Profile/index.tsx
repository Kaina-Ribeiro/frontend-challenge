import { Container, ProfilePhoto, Name } from './styles';
import profile from '../../assets/profile.svg';

type ProfileProps = {
  onClick: () => void;
};

const Profile = ({ onClick }: ProfileProps) => {
  return (
    <Container>
      <ProfilePhoto src={profile} alt="profile-photo" />
      <Name onClick={onClick}>Aulus</Name>
    </Container>
  );
};

export default Profile;
