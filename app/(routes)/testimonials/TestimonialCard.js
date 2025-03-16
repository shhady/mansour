import Image from 'next/image';
import { Quote } from 'lucide-react';
import { renderStars } from '@/app/data/testimonials';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4 border-2 border-primary">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm">{testimonial.location}</p>
            </div>
          </div>
          <div className="bg-primary/10 p-2 rounded-full">
            <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
        </div>
        
        <div className="flex mb-3" aria-label={`דירוג ${testimonial.rating} מתוך 5 כוכבים`}>
          {renderStars(testimonial.rating)}
        </div>
        
        <p className="text-gray-700 mb-4">{testimonial.content}</p>
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        <div className="flex flex-col">
          <span className="text-primary font-semibold">{testimonial.doctor}</span>
          <span className="text-sm text-gray-600">{testimonial.service}</span>
        </div>
      </div>
    </div>
  );
} 