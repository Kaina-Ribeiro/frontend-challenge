import { ReactNode, useEffect, useState } from 'react';
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
  const [showboard, setShowBoard] = useState(true);

  useEffect(() => {
    if (!matchesTablet) {
      setShowBoard(false);
      return;
    }
    return;
  }, [matchesTablet]);

  return (
    <MainContainer>
      {!matchesTablet && !matchesMobile && <HeaderDesktop />}
      {!matchesMobile && matchesTablet && (
        <HeaderTablet handleOpenMenu={() => setShowBoard((prev) => !prev)} withScroll={false} />
      )}
      {matchesMobile && <HeaderMobile withScroll={false} />}
      <ContentWrapper>
        <SideNav showboard={showboard} />
        {children}
      </ContentWrapper>
      <FooterCopyright logo={matchesTablet} />
    </MainContainer>
  );
};

export default LayoutDashboard;
