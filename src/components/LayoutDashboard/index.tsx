import { ReactNode } from 'react';
import HeaderDesktop from '../HeaderDesktop';
import { ContentWrapper, MainContainer } from './styled';
import FooterCopyright from '../FooterCopyright';
import SideNav from '../SideNav';

type LayoutDashboardProps = {
  children: ReactNode;
};

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
  return (
    <MainContainer>
      <HeaderDesktop />
      <ContentWrapper>
        <SideNav />
        {children}
      </ContentWrapper>
      <FooterCopyright />
    </MainContainer>
  );
};

export default LayoutDashboard;
