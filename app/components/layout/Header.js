"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import AccessibilityMenu from '../accessibility/AccessibilityMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI that depends on client-side features
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-black backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Right side controls */}
          <div className="flex items-center space-x-2 space-x-reverse">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-black hover:text-primary transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            
            {/* Accessibility Menu */}
            <AccessibilityMenu />
            
            {/* Phone */}
            <a 
              href="tel:+972123456789" 
              className="p-2 text-black hover:text-primary transition-colors"
              aria-label="התקשר אלינו"
            >
              <Phone className="h-5 w-5" />
            </a>
            
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            <Link 
              href="/" 
              className="px-4 py-2 text-black hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              דף הבית
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-black hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              אודות
            </Link>
            <Link 
              href="/services" 
              className="px-4 py-2 text-black hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              שירותים
            </Link>
            <Link 
              href="/gallery" 
              className="px-4 py-2 text-black hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              גלריה
            </Link>
            <Link 
              href="/testimonials" 
              className="px-4 py-2 text-black hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              המלצות
            </Link>
            <Link 
              href="/blog" 
              className="px-4 py-2 text-black hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              בלוג
            </Link>
            <Link 
              href="/appointment" 
              className="mr-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              onClick={closeMenu}
            >
              קביעת תור
            </Link>
          </nav>
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-bold text-primary">ד״ר מנסור</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="px-4 py-2 text-black hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                דף הבית
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-2 text-black hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                אודות
              </Link>
              <Link 
                href="/services" 
                className="px-4 py-2 text-black hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                שירותים
              </Link>
              <Link 
                href="/gallery" 
                className="px-4 py-2 text-black hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                גלריה
              </Link>
              <Link 
                href="/testimonials" 
                className="px-4 py-2 text-black hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                המלצות
              </Link>
              <Link 
                href="/blog" 
                className="px-4 py-2 text-black hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                בלוג
              </Link>
              <Link 
                href="/appointment" 
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-center"
                onClick={closeMenu}
              >
                קביעת תור
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 