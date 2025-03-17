import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ServiceNotFound() {
  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">השירות לא נמצא</h1>
            <p className="text-xl text-gray-700 mb-8">
              מצטערים, השירות שחיפשת אינו קיים או שהוסר מהאתר.
            </p>
            <Link 
              href="/services" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <ArrowLeft className="ml-2 h-4 w-4" />
              חזרה לכל השירותים
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 