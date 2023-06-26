import { ReactNode } from 'react';
import HeaderDesktop from '../HeaderDesktop';
import { ContentWrapper, MainContainer } from './styled';
import FooterCopyright from '../FooterCopyright';
import SideNav from '../SideNav';
import { useMediaQuery } from '../hooks/useMediaQuery';
import HeaderTablet from '../HeaderTablet';
import HeaderMobile from '../HeaderMobile';

type LayoutDashboardProps = {
  children: ReactNode;
};

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
  const matchesTablet = useMediaQuery('768px');
  const matchesMobile = useMediaQuery('600px');

  return (
    <MainContainer>
      {!matchesTablet && !matchesMobile && <HeaderDesktop />}
      {!matchesMobile && matchesTablet && <HeaderTablet withScroll={false} />}
      {matchesMobile && <HeaderMobile withScroll={false} />}
      <ContentWrapper>
        {!matchesTablet && <SideNav />}

        {children}
      </ContentWrapper>
      <FooterCopyright logo={matchesTablet} />
    </MainContainer>
  );
};

export default LayoutDashboard;
