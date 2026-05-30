import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ isDark }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Navbar isDark={isDark} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
};

export default Layout;
