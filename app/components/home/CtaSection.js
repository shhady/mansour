"use client";

import Link from 'next/link';
import { CalendarClock, Phone } from 'lucide-react';

const CtaSection = () => {
  return (
    <section 
      className="relative py-20 bg-primary"
      aria-label="קביעת תור"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            קבעו תור עוד היום
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white opacity-90">
            אנו מזמינים אתכם לקבוע תור לייעוץ אישי עם ד״ר מוחמד או ד״ר אחמד מנסור.
            הצוות המקצועי שלנו מחכה לכם כדי להעניק לכם את הטיפול הטוב ביותר.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/appointment"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-white text-primary hover:bg-gray-100 py-3 px-6 text-lg"
              aria-label="קביעת תור לייעוץ רפואי"
            >
              <CalendarClock className="ml-2 h-5 w-5" aria-hidden="true" />
              קביעת תור
            </Link>
            
            <Link 
              href="tel:+972123456789"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-white text-white hover:bg-white/10 py-3 px-6 text-lg"
              aria-label="התקשרו אלינו במספר +972-12-345-6789"
            >
              <Phone className="ml-2 h-5 w-5" aria-hidden="true" />
              התקשרו עכשיו
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-white opacity-80">
            או התקשרו אלינו ישירות: <a href="tel:+972123456789" className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary font-bold">+972-12-345-6789</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 