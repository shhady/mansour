"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { prefersReducedMotion } from '../../lib/utils';
import { ArrowRight, Sparkles, Leaf, Heart } from 'lucide-react';

const ParallaxSection = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    setReducedMotion(prefersReducedMotion());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden"
      aria-label="רפואה מתקדמת בסביבה מרגיעה"
    >
      {/* Parallax background with gradient overlay */}
      <div 
        className="parallax-section min-h-[100vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 86, 179, 0.1), rgba(0, 168, 150, 0.2))`,
          backgroundColor: '#f8fafc',
          backgroundAttachment: reducedMotion ? 'scroll' : 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className={`absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-70' : 'opacity-0'}`} 
               style={{ transform: isVisible ? 'scale(1)' : 'scale(0.5)' }}></div>
          <div className={`absolute bottom-[20%] right-[5%] w-80 h-80 rounded-full bg-secondary/10 blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-70' : 'opacity-0'}`}
               style={{ transform: isVisible ? 'scale(1)' : 'scale(0.5)' }}></div>
          <div className={`absolute top-[60%] left-[20%] w-72 h-72 rounded-full bg-primary/5 blur-3xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-70' : 'opacity-0'}`}
               style={{ transform: isVisible ? 'scale(1)' : 'scale(0.5)' }}></div>
        </div>

        {/* Content container */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                רפואה מתקדמת <br />
                <span className="text-primary">בסביבה מרגיעה</span>
              </h2>
              
              <div className="w-20 h-1 bg-primary mb-8"></div>
              
              <p className="text-xl mb-6 text-black">
                אנו מאמינים שהסביבה היא חלק חשוב מתהליך הריפוי
              </p>
              
              <p className="text-lg mb-10 text-gray-700">
                הקליניקה שלנו מעוצבת כדי להעניק לכם חוויה מרגיעה ונעימה, תוך שימוש בטכנולוגיות הרפואיות המתקדמות ביותר
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary-dark text-white py-3 px-6 text-lg group"
                  aria-label="למידע נוסף על הקליניקה והרופאים"
                >
                  למידע נוסף
                  <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                
                <Link 
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-primary text-primary hover:bg-primary/10 py-3 px-6 text-lg"
                  aria-label="לרשימת השירותים הרפואיים שלנו"
                >
                  השירותים שלנו
                </Link>
              </div>
            </div>
            
            {/* Right side - Feature cards */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature Card 1 */}
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Sparkles className="text-primary h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">טכנולוגיה מתקדמת</h3>
                  <p className="text-gray-700">אנו משתמשים בציוד הרפואי המתקדם ביותר לאבחון וטיפול</p>
                </div>
                
                {/* Feature Card 2 */}
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:mt-10">
                  <div className="bg-secondary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Leaf className="text-secondary h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">סביבה מרגיעה</h3>
                  <p className="text-gray-700">הקליניקה מעוצבת להעניק תחושת רוגע ונינוחות</p>
                </div>
                
                {/* Feature Card 3 */}
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Heart className="text-primary h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">טיפול אישי</h3>
                  <p className="text-gray-700">אנו מתאימים את הטיפול באופן אישי לכל מטופל</p>
                </div>
                
                {/* Stats Card */}
                <div className="bg-primary text-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:mt-10">
                  <h3 className="text-2xl font-bold mb-4">+5,000</h3>
                  <p className="text-lg">מטופלים מרוצים</p>
                  <div className="w-full h-1 bg-white/30 mt-4 mb-2"></div>
                  <p className="text-sm opacity-80">הצטרפו למשפחת המטופלים שלנו</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection; 