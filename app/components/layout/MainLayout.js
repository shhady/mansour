"use client";

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <main className="flex-grow bg-white text-black">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout; 