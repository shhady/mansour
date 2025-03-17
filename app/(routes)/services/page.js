import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { featuredServices } from '../../data/services';
import { Section, SectionHeader, SectionTitle, SectionDescription } from '../../components/ui/Section';
import { ServiceCard } from '../../components/services/ServiceCard';

export const metadata = {
  title: 'שירותים - קליניקת מנסור',
  description: 'שירותי רפואה מתקדמים בתחומי הכירורגיה הפלסטית ורפואת העיניים',
};

// Extended service details for the detailed view
const serviceDetails = [
  {
    id: 1,
    title: 'כירורגיה פלסטית',
    description: 'אנו מציעים מגוון רחב של ניתוחים פלסטיים לפנים ולגוף, המבוצעים בטכניקות המתקדמות ביותר',
    image: '/services/plastic-surgery.jpg',
    doctor: 'ד״ר מוחמד מנסור',
    procedures: [
      'ניתוחי אף (רינופלסטיקה)',
      'ניתוחי עפעפיים (בלפרופלסטיקה)',
      'מתיחת פנים וצוואר',
      'ניתוחי חזה (הגדלה, הרמה, הקטנה)',
      'ניתוחי בטן (אבדומינופלסטיקה)',
      'שאיבת שומן וחיטוב הגוף',
    ],
    benefits: [
      'שיפור המראה האסתטי',
      'חיזוק הביטחון העצמי',
      'תוצאות טבעיות ומותאמות אישית',
      'זמן החלמה מינימלי',
      'טכניקות מתקדמות להפחתת צלקות',
    ]
  },
  {
    id: 2,
    title: 'אופתלמולוגיה',
    description: 'שירותי רפואת עיניים מקיפים, הכוללים אבחון וטיפול במגוון רחב של בעיות ומחלות עיניים',
    image: '/services/ophthalmology.jpg',
    doctor: 'ד״ר אחמד מנסור',
    procedures: [
      'בדיקות ראייה מקיפות',
      'אבחון וטיפול בגלאוקומה',
      'אבחון וטיפול במחלות רשתית',
      'טיפול ביובש בעיניים',
      'אבחון וטיפול בדלקות עיניים',
      'התאמת משקפיים ועדשות מגע',
    ],
    benefits: [
      'אבחון מדויק באמצעות ציוד מתקדם',
      'טיפול מקיף בבעיות עיניים',
      'מעקב רציף אחר מצב העיניים',
      'גישה אישית ומותאמת לכל מטופל',
      'שימוש בטכנולוגיות חדשניות',
    ]
  },
  {
    id: 3,
    title: 'טיפולים אסתטיים',
    description: 'מגוון טיפולים אסתטיים לא פולשניים או מינימליים, המעניקים תוצאות מרשימות ללא ניתוח',
    image: '/services/aesthetic-treatments.jpg',
    doctor: 'ד״ר מוחמד מנסור',
    procedures: [
      'הזרקות בוטוקס',
      'מילויים (פילרים) על בסיס חומצה היאלורונית',
      'טיפולי חידוש עור',
      'טיפולי לייזר',
      'מזותרפיה',
      'טיפולי אנטי-אייג׳ינג',
    ],
    benefits: [
      'תוצאות מיידיות וטבעיות',
      'זמן החלמה מינימלי או ללא זמן החלמה',
      'טיפולים מותאמים אישית',
      'שיפור מראה העור והפנים',
      'הצערת מראה הפנים',
    ]
  },
  {
    id: 4,
    title: 'כירורגיה אוקולופלסטית',
    description: 'ניתוחים מתקדמים בתחום הכירורגיה האוקולופלסטית, המתמקדים בעפעפיים, ארובות העיניים ודרכי הדמעות',
    image: '/services/oculoplastic-surgery.jpg',
    doctor: 'ד״ר אחמד מנסור',
    procedures: [
      'ניתוחי עפעפיים (בלפרופלסטיקה)',
      'תיקון צניחת עפעפיים (פטוזיס)',
      'ניתוחי ארובות עיניים',
      'תיקון דרכי דמעות',
      'הסרת גידולים מאזור העיניים',
      'שחזור אזור העיניים לאחר טראומה',
    ],
    benefits: [
      'שיפור הראייה והתפקוד',
      'שיפור המראה האסתטי',
      'הקלה בתסמינים כמו עיניים יבשות או דומעות',
      'טכניקות מתקדמות להפחתת צלקות',
      'שילוב של שיקולים רפואיים ואסתטיים',
    ]
  },
  {
    id: 5,
    title: 'רפואה מתקדמת',
    description: 'שימוש בטכנולוגיות וטיפולים חדשניים בתחומי הכירורגיה הפלסטית ורפואת העיניים',
    image: '/services/advanced-medicine.jpg',
    doctor: 'ד״ר מוחמד מנסור',
    procedures: [
      'טיפולי PRP (פלזמה עשירה בטסיות)',
      'טיפולי גזע',
      'טכנולוגיות לייזר מתקדמות',
      'טיפולים בגלי רדיו',
      'טיפולים באולטרסאונד ממוקד',
      'טכנולוגיות חדשניות לחידוש העור',
    ],
    benefits: [
      'תוצאות משופרות',
      'זמן החלמה מהיר יותר',
      'פחות כאב ואי נוחות',
      'טיפולים מותאמים אישית',
      'שימוש בטכנולוגיות מהמתקדמות בעולם',
    ]
  },
  {
    id: 6,
    title: 'טיפול אישי',
    description: 'גישה אישית ומותאמת לכל מטופל, המתחשבת בצרכים הייחודיים ובמטרות האישיות',
    image: '/services/personalized-care.jpg',
    doctor: 'ד״ר אחמד מנסור',
    procedures: [
      'ייעוץ אישי מקיף',
      'תכנית טיפול מותאמת אישית',
      'מעקב צמוד לאחר טיפולים',
      'תמיכה רציפה לאורך כל התהליך',
      'שילוב של טיפולים שונים לתוצאות מיטביות',
      'התאמת הטיפול לאורח החיים ולצרכים האישיים',
    ],
    benefits: [
      'תוצאות מותאמות לציפיות ולרצונות האישיים',
      'יחס אישי וקשוב',
      'תחושת ביטחון ונוחות',
      'מענה מהיר לשאלות וחששות',
      'ליווי מקצועי לאורך כל התהליך',
    ]
  },
];

const ServiceDetailCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="text-6xl text-primary/30">{service.icon || '🏥'}</div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-700 mb-4">{service.description}</p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
              <CheckCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            טיפולים והליכים
          </h4>
          <ul className="space-y-1">
            {service.procedures?.map((procedure, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>{procedure}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
              <CheckCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            יתרונות
          </h4>
          <ul className="space-y-1">
            {service.benefits?.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">רופא מטפל:</span> {service.doctor}
          </p>
        </div>
        
        <div className="mt-6">
          <Link 
            href="/appointment" 
            className="inline-flex items-center justify-center w-full rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary-dark text-white py-3 px-6 text-lg group"
            aria-label={`קביעת תור ל${service.title}`}
          >
            קביעת תור
            <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">השירותים שלנו</h1>
            <p className="text-xl text-gray-700 mb-8">
              אנו מציעים מגוון רחב של שירותים רפואיים מתקדמים בתחומי הכירורגיה הפלסטית ורפואת העיניים,
              תוך שימוש בטכנולוגיות המתקדמות ביותר ובגישה אישית לכל מטופל.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <Section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          {/* <SectionHeader centered>
            <SectionTitle>השירותים המובילים שלנו</SectionTitle>
            <SectionDescription>
              מגוון הטיפולים והשירותים המקצועיים שאנו מציעים
            </SectionDescription>
          </SectionHeader> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Section>
      
      {/* Detailed Services
      <Section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <SectionHeader centered>
            <SectionTitle>פירוט השירותים</SectionTitle>
            <SectionDescription>
              מידע מפורט על השירותים והטיפולים שאנו מציעים
            </SectionDescription>
          </SectionHeader>
          
          <div className="space-y-16 mt-12">
            {serviceDetails.map((service, index) => (
              <div key={service.id} id={`service-${service.id}`} className="scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                    <div className="w-20 h-1 bg-primary mb-8"></div>
                    <p className="text-lg mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">טיפולים והליכים</h3>
                      <ul className="space-y-2">
                        {service.procedures?.map((procedure, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{procedure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">יתרונות</h3>
                      <ul className="space-y-2">
                        {service.benefits?.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      <span className="font-semibold">רופא מטפל:</span> {service.doctor}
                    </p>
                    
                    <Link 
                      href="/appointment" 
                      className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary-dark text-white py-3 px-6 text-lg group"
                      aria-label={`קביעת תור ל${service.title}`}
                    >
                      קביעת תור
                      <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                  
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <div className="text-8xl text-primary/30">{service.icon || '🏥'}</div>
                    </div>
                  </div>
                </div>
                
                {index < serviceDetails.length - 1 && (
                  <div className="border-b border-gray-200 my-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section> */}
      
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
              <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 