import type { ReactNode } from 'react';
import { Header } from '../../widgets';

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
    </div>
  );
}
