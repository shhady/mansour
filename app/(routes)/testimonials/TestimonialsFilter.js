'use client';

import { useState } from 'react';
import { testimonials } from '@/app/data/testimonials';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsFilter() {
  const [activeDoctor, setActiveDoctor] = useState('all');
  
  const filteredTestimonials = activeDoctor === 'all'
    ? testimonials
    : testimonials.filter(testimonial => testimonial.doctor === activeDoctor);
  
  return (
    <>
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveDoctor('all')}
            className={`px-4 py-2 rounded-md transition-all ${
              activeDoctor === 'all'
                ? 'bg-primary text-white shadow-md'
                : 'hover:bg-gray-200'
            }`}
            aria-pressed={activeDoctor === 'all'}
          >
            כל הרופאים
          </button>
          <button
            onClick={() => setActiveDoctor('ד״ר מוחמד מנסור')}
            className={`px-4 py-2 rounded-md transition-all ${
              activeDoctor === 'ד״ר מוחמד מנסור'
                ? 'bg-primary text-white shadow-md'
                : 'hover:bg-gray-200'
            }`}
            aria-pressed={activeDoctor === 'ד״ר מוחמד מנסור'}
          >
            ד״ר מוחמד מנסור
          </button>
          <button
            onClick={() => setActiveDoctor('ד״ר אחמד מנסור')}
            className={`px-4 py-2 rounded-md transition-all ${
              activeDoctor === 'ד״ר אחמד מנסור'
                ? 'bg-primary text-white shadow-md'
                : 'hover:bg-gray-200'
            }`}
            aria-pressed={activeDoctor === 'ד״ר אחמד מנסור'}
          >
            ד״ר אחמד מנסור
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </>
  );
} 