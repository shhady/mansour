"use client";

import Header from './Header';
import Footer from './Footer';
import AccessibilityWidget from '../accessibility/AccessibilityMenu';
import { usePathname } from 'next/navigation';

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const isProfilePage = pathname === '/doctors/ahmad' || pathname === '/doctors/muhammad';

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <main className="flex-grow bg-white text-black">{children}</main>
      <AccessibilityWidget />
      {/* Mobile widgets - horizontal layout with semi-transparent background */}
      <div className={`${isProfilePage ? 'hidden' : 'md:hidden fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 bg-gray-300/50 rounded-full px-4 py-2 backdrop-blur-sm'}`}>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://waze.com/ul?ll=32.234938,34.963496&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
            aria-label="נווט אלינו בוויז"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </a>
          <a
            href="tel:+972123456789"
            className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
            aria-label="התקשר"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Desktop widgets - keep as is */}
      <div className="hidden md:flex fixed bottom-6 right-4 z-50 flex-col gap-3">
        <a
          href="https://waze.com/ul?ll=32.234938,34.963496&navigate=yes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
          aria-label="נווט אלינו בוויז"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </a>
        <a
          href="tel:+972123456789"
          className="flex md:hidden items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
          aria-label="התקשר"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout; 