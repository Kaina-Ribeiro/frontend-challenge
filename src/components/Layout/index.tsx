import { ReactNode } from 'react';
import Header from '../Header';
import { MainContainer } from './styled';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <Header />

      {children}
    </MainContainer>
  );
};

export default Layout;
