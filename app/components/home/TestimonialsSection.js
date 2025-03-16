"use client";

import { useState, useEffect, useRef } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionDescription } from '../ui/Section';
import { prefersReducedMotion } from '../../lib/utils';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'יעל כהן',
    location: 'תל אביב',
    content: 'ד״ר מוחמד מנסור הוא רופא מדהים. הוא הקשיב לכל החששות שלי והסביר את כל ההליך בצורה ברורה. התוצאות עלו על כל הציפיות שלי!',
    rating: 5,
    doctor: 'ד״ר מוחמד מנסור',
    bgColor: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    name: 'דוד לוי',
    location: 'חיפה',
    content: 'הטיפול שקיבלתי מד״ר אחמד מנסור היה יוצא מן הכלל. הוא מקצועי, אכפתי ומסור. אני ממליץ עליו בחום לכל מי שזקוק לטיפול עיניים.',
    rating: 5,
    doctor: 'ד״ר אחמד מנסור',
    bgColor: 'from-teal-400 to-teal-600',
  },
  {
    id: 3,
    name: 'רחל גולדברג',
    location: 'ירושלים',
    content: 'הניתוח שעברתי אצל ד״ר מוחמד מנסור שינה את חיי. התוצאות מדהימות והצוות היה מקצועי ותומך לאורך כל התהליך.',
    rating: 5,
    doctor: 'ד״ר מוחמד מנסור',
    bgColor: 'from-purple-400 to-purple-600',
  },
  {
    id: 4,
    name: 'משה אברהם',
    location: 'באר שבע',
    content: 'ד״ר אחמד מנסור טיפל בבעיית העיניים שלי במקצועיות רבה. האבחון היה מדויק והטיפול יעיל. אני אסיר תודה על השירות המעולה.',
    rating: 5,
    doctor: 'ד״ר אחמד מנסור',
    bgColor: 'from-green-400 to-green-600',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 border border-gray-200 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.location}</p>
        </div>
        <Quote className="text-primary h-8 w-8 opacity-50" />
      </div>
      
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 flex-grow mb-4">{testimonial.content}</p>
      
      <div className="mt-auto">
        <p className="text-primary font-medium">{testimonial.doctor}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    setReducedMotion(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section className="relative py-24">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundAttachment: reducedMotion ? 'scroll' : 'fixed',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader centered>
          <SectionTitle>מה המטופלים שלנו אומרים</SectionTitle>
          <SectionDescription>
            אנו גאים בשירות שאנו מספקים ובמשוב החיובי שאנו מקבלים ממטופלינו
          </SectionDescription>
        </SectionHeader>

        <div 
          className="mt-12 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Desktop view - grid */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: reducedMotion ? 'none' : undefined
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Mobile view - carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 gap-2">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white text-primary border border-gray-200 hover:bg-gray-100"
                aria-label="הקודם"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white text-primary border border-gray-200 hover:bg-gray-100"
                aria-label="הבא"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 mx-1 rounded-full ${
                    currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`עבור לחוות דעת ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 