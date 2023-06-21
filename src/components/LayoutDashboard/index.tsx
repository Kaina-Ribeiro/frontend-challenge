import { ReactNode } from 'react';
import Header from '../Header';
import { MainContainer } from './styled';
import FooterCopyright from '../FooterCopyright';

type LayoutDashboardProps = {
  children: ReactNode;
};

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
  return (
    <MainContainer>
      <Header />

      {children}
      <FooterCopyright />
    </MainContainer>
  );
};

export default LayoutDashboard;
