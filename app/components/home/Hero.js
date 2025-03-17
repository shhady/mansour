"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { prefersReducedMotion } from '../../lib/utils';
import { Calendar, Info, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    setReducedMotion(prefersReducedMotion());

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollOpacity = Math.max(0, 1 - scrollPosition / 500);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[100vh] flex items-start md:items-center"
      aria-label="מידע על המרכז הרפואי"
    >
      {/* Background with gradient effect */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-white"
        aria-hidden="true"
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Abstract shapes */}
        <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main content */}
      <div 
        className="container mx-auto px-4 relative z-10 py-20"
        style={{ opacity: scrollOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-right">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              המרכז הרפואי המוביל
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-black">
              ד״ר מוחמד ואחמד <span className="text-primary">מנסור</span>
            </h1>
            
            <div className="w-20 h-1 bg-primary mb-8 mx-auto lg:mr-0 lg:ml-auto animate-fade-in-delay-1"></div>
            
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mr-0 lg:ml-auto animate-fade-in-delay-1 text-black">
              הבריאות שלך, העדיפות שלנו
            </p>
            
            <p className="text-lg mb-10 max-w-3xl mx-auto lg:mr-0 lg:ml-auto animate-fade-in-delay-2 text-gray-700">
              מומחים בכירורגיה פלסטית ואופתלמולוגיה, מספקים טיפול רפואי מתקדם ואישי
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-4 animate-fade-in-delay-3">
              <Link
                href="/appointment" 
                className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary-dark text-white py-3 px-6 text-lg"
                aria-label="קביעת תור לייעוץ רפואי"
              >
                <Calendar className="ml-2 h-5 w-5" aria-hidden="true" />
                קביעת תור
              </Link>
              
              <Link
                href="/about" 
                className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-primary text-primary hover:bg-primary/10 py-3 px-6 text-lg"
                aria-label="מידע נוסף על הרופאים"
              >
                <Info className="ml-2 h-5 w-5" aria-hidden="true" />
                למידע נוסף
              </Link>
            </div>
          </div>
          
          {/* Right side - Decorative element or image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Decorative circle */}
              <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" aria-hidden="true"></div>
              
              {/* Doctor image placeholder - replace with actual image */}
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="absolute inset-0 text-center flex items-center justify-center text-primary text-6xl font-bold">
                Mansour Surgeon
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-5 right-0 bg-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-delay-2" aria-hidden="true">
                <span className="text-primary font-bold">20+</span>
                <span className="text-black"> שנות ניסיון</span>
              </div>
              
              <div className="absolute bottom-5 left-0 bg-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-delay-3" aria-hidden="true">
                <span className="text-primary font-bold">100%</span>
                <span className="text-black"> שביעות רצון</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        style={{ opacity: scrollOpacity }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-black mb-2">גלול למטה</span>
          <ChevronDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 