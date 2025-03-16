import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Award, Phone, Mail, Clock, ArrowRight, CheckCircle, Heart, Sparkles, ArrowLeft } from 'lucide-react';
import { doctors } from '../../data/doctors';
import { Section, SectionHeader, SectionTitle, SectionDescription } from '../../components/ui/Section';

export const metadata = {
  title: 'אודות - קליניקת מנסור',
  description: 'הכירו את ד״ר מוחמד מנסור וד״ר אחמד מנסור, מומחים מובילים בתחומי הכירורגיה הפלסטית ורפואת העיניים',
};

const DoctorProfile = ({ doctor }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-contain  object-center transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold">{doctor.name}</h3>
          <p className="text-white/90">{doctor.title}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            השכלה
          </h4>
          <ul className="space-y-2">
            {doctor.education.map((edu, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <div>
                  <span className="font-medium">{edu.degree}</span>
                  <p className="text-sm text-gray-600">{edu.institution}, {edu.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
              <CheckCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            הסמכות
          </h4>
          <ul className="space-y-1">
            {doctor.certifications.map((cert, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
              <Award className="h-5 w-5" aria-hidden="true" />
            </span>
            הישגים
          </h4>
          <ul className="space-y-1">
            {doctor.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <h4 className="text-lg font-semibold mb-3">יצירת קשר</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-primary ml-2" aria-hidden="true" />
              <a href={`mailto:${doctor.contact.email}`} className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                {doctor.contact.email}
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-primary ml-2" aria-hidden="true" />
              <a href={`tel:${doctor.contact.phone}`} className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                {doctor.contact.phone}
              </a>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-primary ml-2" aria-hidden="true" />
              <span>{doctor.contact.hours}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Link 
            href="/appointment" 
            className="inline-flex items-center justify-center w-full rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary-dark text-white py-3 px-6 text-lg group"
            aria-label={`קביעת תור עם ${doctor.name}`}
          >
            קביעת תור
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">הכירו את הרופאים שלנו</h1>
            <p className="text-xl text-gray-700 mb-8">
              צוות הרופאים המומחים שלנו מחויב להעניק לכם את הטיפול הרפואי הטוב ביותר
              בסביבה מקצועית, נעימה ומתקדמת.
            </p>
          </div>
        </div>
      </section>
      
      {/* Doctors Profiles */}
      <Section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <SectionHeader centered>
            <SectionTitle>הצוות הרפואי שלנו</SectionTitle>
            <SectionDescription>
              הכירו את הרופאים המומחים שיטפלו בכם במסירות ובמקצועיות
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            {doctors.map((doctor) => (
              <DoctorProfile key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </Section>
      
      {/* About Clinic */}
      <Section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">אודות הקליניקה</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg mb-6">
                קליניקת מנסור הוקמה בשנת 2010 על ידי ד״ר מוחמד מנסור וד״ר אחמד מנסור, 
                במטרה להעניק שירותי רפואה מתקדמים בתחומי הכירורגיה הפלסטית ורפואת העיניים.
              </p>
              <p className="text-lg mb-6">
                הקליניקה ממוקמת במרכז העיר ומצוידת בטכנולוגיות הרפואיות המתקדמות ביותר, 
                המאפשרות לנו להעניק טיפול מקיף ומקצועי לכל מטופל.
              </p>
              <p className="text-lg mb-6">
                אנו מאמינים בגישה אישית ומותאמת לכל מטופל, תוך הקפדה על סטנדרטים גבוהים 
                של מקצועיות, בטיחות ושירות.
              </p>
              
              <div className="mt-8">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary-dark text-white py-3 px-6 text-lg group"
                  aria-label="צור קשר עם הקליניקה"
                >
                  צור קשר
                  <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/clinic-interior.jpg"
                alt="פנים הקליניקה"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Values */}
      <Section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <SectionHeader centered>
            <SectionTitle>הערכים שלנו</SectionTitle>
            <SectionDescription>
              העקרונות המנחים אותנו בעבודתנו היומיומית
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'מקצועיות',
                description: 'אנו מחויבים לסטנדרטים הגבוהים ביותר של מקצועיות רפואית ומתעדכנים באופן שוטף בחידושים בתחום',
                icon: <GraduationCap className="h-8 w-8" aria-hidden="true" />
              },
              {
                title: 'אמפתיה',
                description: 'אנו מאמינים בגישה אנושית ואמפתית, המתחשבת בצרכים הייחודיים של כל מטופל',
                icon: <Heart className="h-8 w-8" aria-hidden="true" />
              },
              {
                title: 'חדשנות',
                description: 'אנו משלבים טכנולוגיות מתקדמות וגישות חדשניות כדי להעניק את הטיפול הטוב ביותר',
                icon: <Sparkles className="h-8 w-8" aria-hidden="true" />
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <div className="text-primary">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* CTA */}
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