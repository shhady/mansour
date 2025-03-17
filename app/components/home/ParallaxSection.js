"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { prefersReducedMotion } from '../../lib/utils';
import { ArrowRight, Sparkles, Leaf, Heart, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const ParallaxSection = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  // Feature cards data
  const featureCards = [
    {
      icon: <Sparkles className="text-primary h-7 w-7" aria-hidden="true" />,
      iconBg: "bg-primary/10",
      title: "טכנולוגיה מתקדמת",
      description: "הציוד הרפואי המתקדם ביותר לאבחון וטיפול",
      bgColor: "bg-white/90",
      mdMt: ""
    },
    {
      icon: <Leaf className="text-secondary h-7 w-7" aria-hidden="true" />,
      iconBg: "bg-secondary/10",
      title: "סביבה מרגיעה",
      description: "הקליניקה מעוצבת להעניק תחושת רוגע ונינוחות",
      bgColor: "bg-white/90",
      mdMt: "md:mt-10"
    },
    {
      icon: <Heart className="text-primary h-7 w-7" aria-hidden="true" />,
      title: "טיפול אישי",
      iconBg: "bg-primary/10",
      description: "אנו מתאימים את הטיפול באופן אישי לכל מטופל",
      bgColor: "bg-white/90",
      mdMt: ""
    },
    {
      title: "+5,000",
      subtitle: "מטופלים מרוצים",
      description: "הצטרפו למשפחת המטופלים שלנו",
      bgColor: "bg-primary text-white",
      isStatsCard: true,
      mdMt: "md:mt-10"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === featureCards.length - 1 ? 0 : prev + 1));
    // Reset autoplay timer when manually navigating
    resetAutoplayTimer();
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? featureCards.length - 1 : prev - 1));
    // Reset autoplay timer when manually navigating
    resetAutoplayTimer();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset autoplay timer when manually navigating
    resetAutoplayTimer();
  };

  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    
    if (autoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === featureCards.length - 1 ? 0 : prev + 1));
      }, 4000);
    }
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
    resetAutoplayTimer();
  };

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

    // Initialize autoplay timer
    resetAutoplayTimer();

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
      // Clear autoplay timer on unmount
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay]);

  // Render a feature card
  const renderFeatureCard = (card, index) => {
    if (card.isStatsCard) {
      return (
        <div className={`${card.bgColor} p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${card.mdMt}`}>
          <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
          <p className="text-lg">{card.subtitle}</p>
          <div className="w-full h-1 bg-white/30 mt-4 mb-2"></div>
          <p className="text-sm opacity-80">{card.description}</p>
        </div>
      );
    }

    return (
      <div className={`${card.bgColor} backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${card.mdMt}`}>
        <div className={`${card.iconBg} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
          {card.icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-black">{card.title}</h3>
        <p className="text-gray-700">{card.description}</p>
      </div>
    );
  };

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
                  <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
              {/* Desktop grid - only visible on md and up */}
              <div className="hidden md:grid md:grid-cols-2 gap-6">
                {featureCards.map((card, index) => (
                  <div key={index}>
                    {renderFeatureCard(card, index)}
                  </div>
                ))}
              </div>
              
              {/* Mobile slider - only visible on screens smaller than md */}
              <div 
                ref={sliderRef} 
                className="md:hidden w-full" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
              >
                <div className="relative w-full">
                  {/* Card slider container */}
                  <div className="overflow-hidden w-full">
                    <div 
                      className="flex flex-row flex-nowrap transition-transform duration-300 ease-in-out w-full"
                      dir="ltr" // Force LTR direction for the slider to work correctly
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {featureCards.map((card, index) => (
                          <div key={index} className="min-w-full w-full flex-none " dir="rtl">
                          <div className="px-2 w-full">
                            {renderFeatureCard(card, index)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Slider controls */}
                  <div className="flex justify-center items-center mt-6 gap-2 -translate-y-1/2 left-0 right-0 px-2 z-10">
                    <button 
                      onClick={prevSlide}
                      className="bg-white/80 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-md hover:bg-white"
                      aria-label="הכרטיס הקודם"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="bg-white/80 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-md hover:bg-white"
                      aria-label="הכרטיס הבא"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Slider indicators */}
                <div className="flex justify-center mt-4 gap-2 ">
                  
                  {featureCards.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-colors ${
                        currentSlide === index ? 'w-2 bg-primary' : 'w-2 bg-gray-300'
                      }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`עבור לכרטיס ${index + 1}`}
                      aria-current={currentSlide === index ? 'true' : 'false'}
                    />
                  ))}
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