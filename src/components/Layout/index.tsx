import { ReactNode } from 'react';
import Header from '../Header';
import { MainContainer } from './styled';
import FooterCopyright from '../FooterCopyright';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <Header />

      {children}
      <FooterCopyright logo={true} />
    </MainContainer>
  );
};

export default Layout;
