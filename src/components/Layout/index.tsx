import { ReactNode } from 'react';

import { MainContainer } from './styled';
import FooterCopyright from '../FooterCopyright';
import HeaderDesktop from '../HeaderDesktop';
import { useMediaQuery } from '../hooks/useMediaQuery';

import HeaderTablet from '../HeaderTablet';
import HeaderMobile from '../HeaderMobile';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const matchesTablet = useMediaQuery('768px');
  const matchesMobile = useMediaQuery('600px');

  return (
    <MainContainer>
      {!matchesTablet && !matchesMobile && <HeaderDesktop />}
      {!matchesMobile && matchesTablet && <HeaderTablet />}
      {matchesMobile && <HeaderMobile />}

      {children}
      <FooterCopyright logo={true} />
    </MainContainer>
  );
};

export default Layout;
