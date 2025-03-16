"use client";

import { useState, useEffect, useRef } from 'react';
import { Accessibility, Type, Contrast, MousePointerClick } from 'lucide-react';
import { cn } from '../../lib/utils';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState('normal');
  const [contrast, setContrast] = useState('default');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // After mounting, we can safely show the UI that depends on client-side features
  useEffect(() => {
    setMounted(true);
    
    // Check for saved preferences
    const savedTextSize = localStorage.getItem('textSize') || 'normal';
    const savedContrast = localStorage.getItem('contrast') || 'default';
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    
    setTextSize(savedTextSize);
    setContrast(savedContrast);
    setReducedMotion(savedReducedMotion);
    
    // Apply saved preferences
    applyTextSize(savedTextSize);
    applyContrast(savedContrast);
    applyReducedMotion(savedReducedMotion);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Handle escape key to close menu
    const handleEscapeKey = (event) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const applyTextSize = (size) => {
    if (!mounted) return;
    
    document.body.classList.remove(
      'text-size-normal',
      'text-size-large',
      'text-size-larger',
      'text-size-largest'
    );
    
    document.body.classList.add(`text-size-${size}`);
    localStorage.setItem('textSize', size);
  };

  const applyContrast = (mode) => {
    if (!mounted) return;
    
    document.body.classList.remove(
      'high-contrast',
      'yellow-on-black'
    );
    
    if (mode !== 'default') {
      document.body.classList.add(mode);
    }
    
    localStorage.setItem('contrast', mode);
  };

  const applyReducedMotion = (enabled) => {
    if (!mounted) return;
    
    if (enabled) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
    
    localStorage.setItem('reducedMotion', enabled);
  };

  const handleTextSizeChange = (size) => {
    setTextSize(size);
    applyTextSize(size);
  };

  const handleContrastChange = (mode) => {
    setContrast(mode);
    applyContrast(mode);
  };

  const handleReducedMotionChange = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    applyReducedMotion(newValue);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className={cn(
          "p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          isOpen 
            ? "bg-primary/10 text-primary" 
            : "text-black hover:text-primary hover:bg-primary/5"
        )}
        aria-label="אפשרויות נגישות"
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
      >
        <Accessibility className="h-5 w-5" />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          id="accessibility-menu"
          className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-black dark:text-white">אפשרויות נגישות</h3>
          </div>

          {/* Text Size */}
          <div className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <Type className="h-4 w-4 ml-2" />
              <span className="text-black dark:text-white font-medium">גודל טקסט</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleTextSizeChange('normal')}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                  textSize === 'normal'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-primary/10'
                )}
              >
                רגיל
              </button>
              <button
                onClick={() => handleTextSizeChange('large')}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                  textSize === 'large'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-primary/10'
                )}
              >
                גדול
              </button>
              <button
                onClick={() => handleTextSizeChange('larger')}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                  textSize === 'larger'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-primary/10'
                )}
              >
                גדול יותר
              </button>
              <button
                onClick={() => handleTextSizeChange('largest')}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                  textSize === 'largest'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-primary/10'
                )}
              >
                גדול מאוד
              </button>
            </div>
          </div>

          {/* Contrast */}
          <div className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <Contrast className="h-4 w-4 ml-2" />
              <span className="text-black dark:text-white font-medium">ניגודיות</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => handleContrastChange('default')}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                  contrast === 'default'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-primary/10'
                )}
              >
                רגיל
              </button>
              <button
                onClick={() => handleContrastChange('high-contrast')}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                  contrast === 'high-contrast'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-primary/10'
                )}
              >
                ניגודיות גבוהה (שחור/לבן)
              </button>
              <button
                onClick={() => handleContrastChange('yellow-on-black')}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                  contrast === 'yellow-on-black'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-primary/10'
                )}
              >
                צהוב על שחור
              </button>
            </div>
          </div>

          {/* Reduced Motion */}
          <div className="py-3 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MousePointerClick className="h-4 w-4 ml-2" />
                <span className="text-black dark:text-white font-medium">הפחתת אנימציות</span>
              </div>
              <button
                onClick={handleReducedMotionChange}
                className={cn(
                  'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                  reducedMotion ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                )}
                role="switch"
                aria-checked={reducedMotion}
              >
                <span className="sr-only">
                  {reducedMotion ? 'כבה הפחתת אנימציות' : 'הפעל הפחתת אנימציות'}
                </span>
                <span
                  className={cn(
                    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                    reducedMotion ? 'translate-x-1' : 'translate-x-6'
                  )}
                />
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              אפשרות זו מפחיתה או מבטלת אנימציות ואפקטים ויזואליים באתר
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu; 