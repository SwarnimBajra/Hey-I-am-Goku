
import React from 'react';
import NavBar from './NavBar';
import { Toaster } from '@/components/ui/sonner';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-torrex-light flex flex-col">
      <NavBar />
      <main className="flex-1 w-full max-w-screen">
        {children}
      </main>
      <Toaster />
    </div>
  );
};

export default AppLayout;
