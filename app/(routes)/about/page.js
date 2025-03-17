import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Award, Phone, Mail, Clock, ArrowRight, CheckCircle, Heart, Sparkles, ArrowLeft, MapPin, Calendar, Star, Users, Shield, Zap } from 'lucide-react';
import { doctors } from '../../data/doctors';

export const metadata = {
  title: 'אודות - קליניקת מנסור',
  description: 'הכירו את ד״ר מוחמד מנסור וד״ר אחמד מנסור, מומחים מובילים בתחומי הכירורגיה הפלסטית ורפואת העיניים',
};

const DoctorCard = ({ doctor, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl`}>
      {/* Doctor Image */}
      <div className="md:w-2/5 relative">
        <div className="relative h-[400px] w-full overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-contain object-center transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Specialties Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {doctor.specialties.map((specialty, index) => (
              <span key={index} className="bg-primary/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Doctor Info */}
      <div className="md:w-3/5 p-8 flex flex-col">
        <div className="mb-4">
          <h3 className="text-3xl font-bold text-gray-900">{doctor.name}</h3>
          <p className="text-primary text-xl mt-1">{doctor.title}</p>
          <div className="w-16 h-1 bg-primary mt-3"></div>
        </div>
        
        <p className="text-gray-700 mb-6 flex-grow">{doctor.bio}</p>
        
        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full text-primary mr-3 mt-1">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">השכלה</h4>
              <p className="text-sm text-gray-600">{doctor.education[0].institution}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full text-primary mr-3 mt-1">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">ניסיון</h4>
              <p className="text-sm text-gray-600">{doctor.id === 1 ? '12+ שנים' : '15+ שנים'}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-full text-primary mr-3 mt-1">
              <Star className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">הסמכות</h4>
              <p className="text-sm text-gray-600">{doctor.certifications.length} הסמכות מקצועיות</p>
            </div>
          </div>
        </div>
        
        {/* Services */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 flex items-center">
            <CheckCircle className="h-5 w-5 text-primary ml-2" />
            תחומי התמחות
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {doctor.services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="flex items-center mb-2">
                  <div className="text-primary ml-2">{service.icon}</div>
                  <h5 className="font-medium">{service.name}</h5>
                </div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact & CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center mb-4 md:mb-0" dir='ltr'>
            <a href={`tel:${doctor.contact.phone}`} className="text-primary hover:underline">
              {doctor.contact.phone}
            </a>
            <Phone className="h-5 w-5 text-primary ml-2" />

          </div>
          
          <Link 
            href={`/doctors/${doctor.id === 1 ? 'ahmad' : 'muhammad'}`}
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-primary hover:bg-primary-dark text-white py-2 px-4 text-base group"
          >
            פרופיל מלא
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-primary">
      <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/clinic-bg.jpg"
            alt="קליניקת מנסור"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">אודות קליניקת מנסור</h1>
            <p className="text-xl mb-8 animate-fade-in-up delay-100">
              מרכז רפואי מתקדם המציע שירותי רפואה מקצועיים בתחומי הכירורגיה הפלסטית ורפואת העיניים,
              בהובלת ד״ר מוחמד מנסור וד״ר אחמד מנסור.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
              <Link 
                href="#doctors" 
                className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-white text-primary hover:bg-gray-100 py-3 px-6 text-lg"
              >
                הכירו את הרופאים
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
              <Link 
                href="/appointment" 
                className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-6 text-lg"
              >
                קביעת תור
                <Calendar className="mr-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Clinic */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-block mb-4">
                אודות הקליניקה
              </div>
              <h2 className="text-3xl font-bold mb-6">המרכז הרפואי המוביל לכירורגיה פלסטית ורפואת עיניים</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  קליניקת מנסור הוקמה בשנת 2010 על ידי ד״ר מוחמד מנסור וד״ר אחמד מנסור, 
                  במטרה להעניק שירותי רפואה מתקדמים בתחומי הכירורגיה הפלסטית ורפואת העיניים.
                </p>
                <p className="text-lg text-gray-700">
                  הקליניקה ממוקמת במרכז העיר ומצוידת בטכנולוגיות הרפואיות המתקדמות ביותר, 
                  המאפשרות לנו להעניק טיפול מקיף ומקצועי לכל מטופל.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">צוות מקצועי</h4>
                      <p className="text-sm text-gray-600">רופאים מומחים עם ניסיון רב</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">טכנולוגיה מתקדמת</h4>
                      <p className="text-sm text-gray-600">ציוד רפואי חדשני ומתקדם</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">גישה אישית</h4>
                      <p className="text-sm text-gray-600">טיפול מותאם אישית לכל מטופל</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">בטיחות מרבית</h4>
                      <p className="text-sm text-gray-600">סטנדרטים גבוהים של בטיחות</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mt-8">
                  <MapPin className="h-5 w-5 text-primary ml-2" />
                  <span className="text-gray-700">רחוב הרצל 123, תל אביב</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/clinic-interior.jpg"
                  alt="פנים הקליניקה"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">12+</p>
                  <p className="text-sm text-gray-600">שנות ניסיון</p>
                </div>
                <div className="text-center border-x border-gray-200">
                  <p className="text-3xl font-bold text-primary">8,000+</p>
                  <p className="text-sm text-gray-600">מטופלים מרוצים</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-gray-600">טיפולים מתקדמים</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-block mb-4">
              הצוות הרפואי
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">הכירו את הרופאים המומחים שלנו</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              צוות הרופאים המומחים שלנו מחויב להעניק לכם את הטיפול הרפואי הטוב ביותר
              בסביבה מקצועית, נעימה ומתקדמת.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          <div className="space-y-12">
            {doctors.map((doctor, index) => (
              <DoctorCard key={doctor.id} doctor={doctor} reverse={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-block mb-4">
              הערכים שלנו
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">העקרונות המנחים אותנו</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              אנו מחויבים לערכים אלו בכל היבט של העבודה שלנו, מהרגע הראשון שאתם נכנסים לקליניקה ועד לסיום הטיפול.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<GraduationCap className="h-8 w-8" />}
              title="מקצועיות"
              description="אנו מחויבים לסטנדרטים הגבוהים ביותר של מקצועיות רפואית ומתעדכנים באופן שוטף בחידושים בתחום"
            />
            <ValueCard 
              icon={<Heart className="h-8 w-8" />}
              title="אמפתיה"
              description="אנו מאמינים בגישה אנושית ואמפתית, המתחשבת בצרכים הייחודיים של כל מטופל"
            />
            <ValueCard 
              icon={<Sparkles className="h-8 w-8" />}
              title="חדשנות"
              description="אנו משלבים טכנולוגיות מתקדמות וגישות חדשניות כדי להעניק את הטיפול הטוב ביותר"
            />
            <ValueCard 
              icon={<Shield className="h-8 w-8" />}
              title="אמינות"
              description="אנו מחויבים לשקיפות מלאה ולבניית יחסי אמון עם המטופלים שלנו לאורך כל תהליך הטיפול"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Preview
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">מה אומרים המטופלים שלנו</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              אלפי מטופלים מרוצים נהנים מהשירות המקצועי והאישי שלנו. הנה מה שחלקם אומרים:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-300 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="italic mb-6">"הטיפול שקיבלתי מד״ר מוחמד מנסור היה מעל ומעבר למצופה. התוצאות מדהימות והשירות היה מקצועי ואדיב."</p>
              <div className="font-semibold">- רונית כהן</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-300 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="italic mb-6">"ד״ר אחמד מנסור הוא רופא עיניים מקצועי ואכפתי. הוא הסביר לי את כל התהליך בצורה ברורה והתוצאות היו מצוינות."</p>
              <div className="font-semibold">- יוסי לוי</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-300 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="italic mb-6">"הקליניקה מודרנית ונעימה, והצוות מקצועי ואדיב. ד״ר מנסור העניק לי טיפול מעולה והתוצאות עלו על כל ציפיותיי."</p>
              <div className="font-semibold">- מיכל אברהם</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/testimonials" 
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-white text-primary hover:bg-gray-100 py-3 px-6 text-lg"
            >
              לכל חוות הדעת
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section> */}
      
      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-white">מוכנים לקבוע תור?</h2>
                <p className="text-xl mb-8 text-white/90">
                  צוות הרופאים המומחים שלנו מחכה לכם כדי להעניק לכם את הטיפול הטוב ביותר
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/appointment" 
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-white text-primary hover:bg-gray-100 py-3 px-6 text-lg"
                  >
                    קביעת תור
                    <Calendar className="mr-2 h-5 w-5" />
                  </Link>
                  <Link 
                    href="tel:+972123456789" 
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-6 text-lg"
                  >
                    התקשרו עכשיו
                    <Phone className="mr-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-full">
                <Image
                  src="/cta-image.jpg"
                  alt="קביעת תור"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 