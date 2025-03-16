"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionDescription } from '../ui/Section';
import { ServiceCard } from '../services/ServiceCard';
import { featuredServices } from '../../data/services';
import { prefersReducedMotion } from '../../lib/utils';

const FeaturedServices = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <Section 
      className="bg-white text-black relative py-24"
      aria-label="השירותים הרפואיים שלנו"
    >
      {/* Background pattern for subtle effect */}
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundAttachment: reducedMotion ? 'scroll' : 'fixed',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader centered>
          <SectionTitle>השירותים שלנו</SectionTitle>
          <SectionDescription>
            אנו מציעים מגוון רחב של שירותים רפואיים מתקדמים בתחום רפואת העיניים
          </SectionDescription>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`transition-all duration-500 ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: reducedMotion ? 'none' : undefined
              }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary-dark text-white py-3 px-6 text-lg group"
            aria-label="צפייה בכל השירותים הרפואיים שלנו"
          >
            לכל השירותים
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedServices; 