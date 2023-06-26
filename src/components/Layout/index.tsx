import { ReactNode } from 'react';

import { MainContainer } from './styled';
import FooterCopyright from '../FooterCopyright';
import HeaderDesktop from '../HeaderDesktop';
import { useMediaQuery } from '../hooks/useMediaQuery';

import HeaderTablet from '../HeaderTablet';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const matches = useMediaQuery('768px');

  return (
    <MainContainer>
      {matches ? <HeaderTablet /> : <HeaderDesktop />}

      {children}
      <FooterCopyright logo={true} />
    </MainContainer>
  );
};

export default Layout;
