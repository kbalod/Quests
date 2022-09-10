import { Header, Footer } from '../common';

interface TabbedViewProps { children?: JSX.Element | string }

function MainLayout ({ children } : TabbedViewProps) : JSX.Element { 
  return(
  <>
    <Header />
    {children}
    <Footer />
  </>
  );
}
export default MainLayout;
