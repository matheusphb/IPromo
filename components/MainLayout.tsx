
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { BottomNavigationBar } from './BottomNavigationBar';

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow pb-16"> {/* pb-16 to prevent content from being hidden by bottom nav */}
        <Outlet />
      </main>
      <BottomNavigationBar />
    </div>
  );
};