import type { ReactNode } from 'react';
import { Footer, Header } from '../../widgets';
import MobileFooter from '../../widgets/MobileFooter';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white">
      <Header />
      <main className="">
        {children}
      </main>
      <Footer />
      <MobileFooter />
    </div>
  );
}
