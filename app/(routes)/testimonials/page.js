import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import TestimonialsFilter from './TestimonialsFilter';

export const metadata = {
  title: 'חוות דעת מטופלים | ד״ר מוחמד ואחמד מנסור',
  description: 'קראו חוות דעת אמיתיות ממטופלים של ד״ר מוחמד מנסור וד״ר אחמד מנסור, המספרים על החוויה והתוצאות שלהם.',
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-primary/10 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">חוות דעת מטופלים</h1>
            <p className="text-xl text-gray-700">
              קראו מה מטופלים אומרים על החוויה שלהם עם ד״ר מוחמד מנסור וד״ר אחמד מנסור
            </p>
          </div>
          
          <TestimonialsFilter />
        </div>
      </section>
      
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">מוכנים לקבוע תור?</h2>
            <p className="text-xl mb-8 opacity-90">
              צוות הרופאים המומחים שלנו מחכה לכם כדי להעניק לכם את הטיפול הטוב ביותר
            </p>
            <Link 
              href="/appointment" 
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-white text-primary hover:bg-gray-100 py-3 px-8 text-lg"
              aria-label="קביעת תור לייעוץ רפואי"
            >
              קביעת תור
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 