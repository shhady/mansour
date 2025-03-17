import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, Calendar } from 'lucide-react';
import { featuredServices } from '../../../data/services';

export async function generateMetadata({ params }) {
  const service = featuredServices.find(service => service.slug === params.slug);
  
  if (!service) {
    return {
      title: 'שירות לא נמצא',
      description: 'השירות המבוקש לא נמצא',
    };
  }
  
  return {
    title: `${service.title} - קליניקת מנסור`,
    description: service.description,
  };
}

export default function ServicePage({ params }) {
  const service = featuredServices.find(service => service.slug === params.slug);
  
  if (!service) {
    notFound();
  }
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link 
              href="/services" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <ArrowLeft className="ml-2 h-4 w-4" />
              חזרה לכל השירותים
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-700 mb-8">
              {service.description}
            </p>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-md mb-8">
              {service.doctor}
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">אודות השירות</h2>
                <p className="text-lg text-gray-700 mb-8">
                  {service.fullDescription}
                </p>
                
                <Link 
                  href="/appointment" 
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary-dark text-white py-3 px-6 text-lg"
                >
                  <Calendar className="ml-2 h-5 w-5" />
                  קביעת תור
                </Link>
              </div>
              
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">הטיפולים שלנו</h2>
                <ul className="space-y-3">
                  {service.procedures.map((procedure, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary ml-2 mt-1 flex-shrink-0" />
                      <span className="text-lg">{procedure}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">היתרונות</h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary ml-2 mt-1 flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-4 md:mb-0"
                >
                  <ArrowLeft className="ml-2 h-4 w-4" />
                  חזרה לכל השירותים
                </Link>
                
                <Link 
                  href="/appointment" 
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary-dark text-white py-3 px-6 text-lg"
                >
                  <Calendar className="ml-2 h-5 w-5" />
                  קביעת תור
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 