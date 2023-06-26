import { ReactNode } from 'react';

import { MainContainer } from './styled';
import FooterCopyright from '../FooterCopyright';
import HeaderDesktop from '../HeaderDesktop';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <HeaderDesktop />

      {children}
      <FooterCopyright logo={true} />
    </MainContainer>
  );
};

export default Layout;
