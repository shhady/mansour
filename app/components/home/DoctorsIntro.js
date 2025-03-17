"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Award, GraduationCap, Stethoscope, Heart } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from '../ui/Section';
import { Button } from '../ui/Button';
import { prefersReducedMotion } from '../../lib/utils';

const doctors = [
  {
    id: 'ahmad',
    name: 'ד״ר אחמד מנסור',
    title: 'אופתלמולוג ומנתח אוקולופלסטי',
    bio: 'ד״ר אחמד מנסור הוא אופתלמולוג בכיר ומנתח אוקולופלסטי (ניתוחי עפעפיים, ארובות עיניים ודרכי דמעות) במרכז הרפואי סורוקה, באר שבע. הוא גם מתאם טיפולי עיניים בשירותי בריאות כללית, מחוז שרון-שומרון. ד״ר מנסור התמחה באופתלמולוגיה במרכז הרפואי ברזילי, אשקלון, והשלים התמחות-על בכירורגיה אוקולופלסטית במרכז הרפואי סורוקה.',
    bgColor: 'white',
    image: '/dr-ahmad-bg.jpg',
    link: '/ahmad',
    highlights: [
      { icon: <GraduationCap className="h-4 w-4" />, text: 'התמחות במרכז הרפואי ברזילי' },
      { icon: <Award className="h-4 w-4" />, text: 'מומחה בכירורגיה אוקולופלסטית' },
      { icon: <Stethoscope className="h-4 w-4" />, text: 'ניסיון של 12+ שנים' },
    ]
  },
  {
    id: 'muhammad',
    name: 'ד״ר מוחמד מנסור',
    title: 'מומחה בכירורגיה פלסטית',
    bio: 'ד״ר מוחמד מנסור הוא מומחה בכירורגיה פלסטית, בוגר בית הספר לרפואה של האוניברסיטה העברית - הדסה עין כרם, ירושלים. הוא השלים את ההתמחות שלו במרכז הרפואי רבין (בילינסון) והצטרף לכללית במחוז הצפון (עפולה). תחומי המחקר שלו כוללים אנסטומוזה מיקרווסקולרית, ריפוי פצעים ושחזור שד.',
    bgColor: 'white',
    image: '/dr-mohamed.png',
    link: '/muhammad',
    highlights: [
      { icon: <GraduationCap className="h-4 w-4" />, text: 'בוגר האוניברסיטה העברית' },
      { icon: <Award className="h-4 w-4" />, text: 'מומחה בכירורגיה פלסטית' },
      { icon: <Stethoscope className="h-4 w-4" />, text: 'ניסיון של 15+ שנים' },
    ]
  },
 
];

const DoctorCard = ({ doctor, reverse = false, isVisible }) => {
  const cardRef = useRef(null);
  
  const animationClasses = isVisible 
    ? reverse 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-100 translate-x-0' 
    : reverse 
      ? 'opacity-0 translate-x-10' 
      : 'opacity-0 -translate-x-10';

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-24 last:mb-0 transition-all duration-1000 ${animationClasses}`}
      style={{ transitionDelay: '300ms' }}
    >
      {/* Image Container with animation effect */}
      <div className="md:w-1/3 relative overflow-hidden rounded-xl group transform transition-all duration-500 hover:shadow-2xl">
        <div className="aspect-[3/4] relative bg-gradient-to-br shadow-lg">
          {/* Background gradient */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${doctor.bgColor} transition-all duration-500 ${isVisible ? 'opacity-80' : 'opacity-100'}`}
          ></div>
          
          {/* Doctor image */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={doctor.image} 
              alt={doctor.name} 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className={`object-contain object-center transition-all duration-700 ${isVisible ? 'scale-105' : 'scale-100'}`}
              priority
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className={`absolute top-[20%] left-[20%] w-32 h-32 rounded-full bg-white/30 blur-xl transition-all duration-700 ${isVisible ? 'scale-125 translate-x-5' : ''}`}
            ></div>
            <div 
              className={`absolute bottom-[20%] right-[20%] w-40 h-40 rounded-full bg-white/20 blur-xl transition-all duration-700 ${isVisible ? 'scale-125 -translate-x-5' : ''}`}
            ></div>
          </div>
          
          {/* Animated pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1.5\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'1.5\'/%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '20px 20px',
              transform: isVisible ? 'translateY(-10px)' : 'translateY(0)',
              transition: 'transform 0.5s ease-out'
            }}
          ></div>
        </div>
        
        {/* Overlay with button - visible on scroll */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="p-6 w-full">
           <Link href={`/doctors/${doctor.link}`}> <Button 
              variant="primary" 
              fullWidth
              className="transform transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              פרופיל מלא
            </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="md:w-2/3 flex flex-col justify-center">
        {/* Name with animated underline */}
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black relative inline-block">
          {doctor.name}
          <span 
            className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-700 ${isVisible ? 'w-full' : 'w-0'}`}
          ></span>
        </h3>
        
        {/* Title with fade-in effect */}
        <p className={`text-primary text-lg mb-6 transition-all duration-500 ${isVisible ? 'text-primary-dark' : 'text-primary'}`}>
          {doctor.title}
        </p>
        
        {/* Bio with line height animation */}
        <p 
          className="text-gray-600 mb-8 leading-relaxed transition-all duration-500"
          style={{ 
            lineHeight: isVisible ? '1.8' : '1.6',
          }}
        >
          {doctor.bio}
        </p>
        
        {/* Highlights with staggered animation */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {doctor.highlights.map((highlight, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-2 text-sm text-gray-700 transition-all duration-500`}
              style={{ 
                transitionDelay: `${(index * 100) + 400}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="bg-primary/10 p-2 rounded-full text-primary">
                {highlight.icon}
              </div>
              <span>{highlight.text}</span>
            </div>
          ))}
        </div>
        
        {/* Read more link with animated arrow */}
        <Link
          href={`/doctors/${doctor.link}`}
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group w-fit"
        >
          <span className="ml-1 relative">
            קרא עוד
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </span>
          <ArrowLeft className="h-4 w-4 transform transition-transform group-hover:-translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const DoctorsIntro = () => {
  const [visibleDoctors, setVisibleDoctors] = useState([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef(null);
  const doctorRefs = useRef([]);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    
    // Observer for the section
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // When section is visible, start observing individual doctor cards
          doctorRefs.current.forEach((ref, index) => {
            if (ref) {
              doctorObserver.observe(ref);
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    // Observer for individual doctor cards
    const doctorObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const doctorId = entry.target.getAttribute('data-doctor-id');
            setVisibleDoctors(prev => [...prev, doctorId]);
            doctorObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      doctorObserver.disconnect();
    };
  }, []);

  return (
    <Section ref={sectionRef} className="bg-white text-black relative overflow-hidden py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader centered>
          <div 
            className={`transition-all duration-1000 ${visibleDoctors.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              הצוות הרפואי המוביל
            </div>
            
            <SectionTitle>הכירו את הרופאים שלנו</SectionTitle>
            
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            
            <SectionDescription>
              צוות הרופאים המומחים שלנו מחויב לספק את הטיפול הרפואי הטוב ביותר עם גישה אישית לכל מטופל
            </SectionDescription>
          </div>
        </SectionHeader>
        
        <SectionContent>
          {doctors.map((doctor, index) => (
            <div 
              key={doctor.id}
              ref={el => doctorRefs.current[index] = el}
              data-doctor-id={doctor.id}
            >
              <DoctorCard 
                doctor={doctor} 
                reverse={index % 2 !== 0} 
                isVisible={visibleDoctors.includes(doctor.id) && !reducedMotion}
              />
            </div>
          ))}
          
          <div 
            className={`text-center mt-16 transition-all duration-1000 delay-700 ${visibleDoctors.length === doctors.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Button 
              href="/doctors"
              variant="outline" 
              size="lg"
              className="group"
            >
              <Heart className="ml-2 h-5 w-5 text-primary group-hover:text-primary-dark transition-colors" />
              למידע נוסף על הרופאים שלנו
            </Button>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
};

export default DoctorsIntro; 