import { ReactNode } from 'react';
import Header from '../Header';
import { ContentWrapper, MainContainer } from './styled';
import FooterCopyright from '../FooterCopyright';
import SideNav from '../SideNav';

type LayoutDashboardProps = {
  children: ReactNode;
};

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        <SideNav />
        {children}
      </ContentWrapper>
      <FooterCopyright />
    </MainContainer>
  );
};

export default LayoutDashboard;
