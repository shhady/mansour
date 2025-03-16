"use client";

import { useState, useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../../lib/utils';

const ParallaxWrapper = ({ 
  children, 
  className = "", 
  speed = 0.1, 
  direction = "up", // "up", "down", "left", "right"
  ...props 
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [elementTop, setElementTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    setReducedMotion(prefersReducedMotion());
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }

    const updatePosition = () => {
      if (elementRef.current && typeof window !== 'undefined') {
        const rect = elementRef.current.getBoundingClientRect();
        setElementTop(rect.top + window.scrollY);
        setElementHeight(rect.height);
      }
    };

    const handleScroll = () => {
      if (reducedMotion) return;
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowHeight(window.innerHeight);
        updatePosition();
      }
    };

    // Only add event listeners on the client side
    if (typeof window !== 'undefined') {
      // Initial position
      updatePosition();

      // Add event listeners
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [reducedMotion]);

  // Calculate parallax effect
  const calculateParallax = () => {
    if (!isMounted || reducedMotion || typeof window === 'undefined') return {};
    
    // Calculate how far the element is from the viewport center
    const viewportCenter = windowHeight / 2;
    const elementCenter = elementTop + elementHeight / 2 - scrollY;
    const distanceFromCenter = elementCenter - viewportCenter;
    
    // Apply parallax effect based on direction
    const value = distanceFromCenter * speed;
    
    switch (direction) {
      case "up":
        return { transform: `translateY(${-value}px)` };
      case "down":
        return { transform: `translateY(${value}px)` };
      case "left":
        return { transform: `translateX(${-value}px)` };
      case "right":
        return { transform: `translateX(${value}px)` };
      default:
        return { transform: `translateY(${-value}px)` };
    }
  };

  return (
    <div 
      ref={elementRef}
      className={className}
      style={{
        ...(isMounted ? calculateParallax() : {}),
        transition: reducedMotion ? 'none' : 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ParallaxWrapper; 