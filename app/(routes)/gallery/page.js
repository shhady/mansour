import Link from 'next/link';
import { ArrowLeft, Camera, Calendar, Mail } from 'lucide-react';

export const metadata = {
  title: 'גלריה | ד״ר מוחמד ואחמד מנסור',
  description: 'גלריית תמונות של תוצאות טיפולים של ד״ר מוחמד מנסור וד״ר אחמד מנסור. בקרוב!',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-primary/10 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="flex items-center">
                <Camera className="h-5 w-5 mr-2" aria-hidden="true" />
                בקרוב
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">גלריית תמונות</h1>
            
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              אנו עובדים על גלריית תמונות מקיפה שתציג את התוצאות המרשימות של הטיפולים שלנו. 
              הגלריה תהיה זמינה בקרוב!
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex-1 text-center md:text-right">
                  <h2 className="text-2xl font-bold mb-4">רוצים לקבל עדכון כשהגלריה תהיה מוכנה?</h2>
                  <p className="text-gray-600 mb-6">
                    השאירו את פרטי הקשר שלכם ונעדכן אתכם ברגע שהגלריה תעלה לאוויר
                  </p>
                  
                  <form className="flex flex-col md:flex-row gap-3">
                    <div className="flex-grow">
                      <label htmlFor="email" className="sr-only">כתובת אימייל</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="block w-full rounded-md border-0 py-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                          placeholder="הכניסו את כתובת האימייל שלכם"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-white hover:bg-primary/90 py-3 px-6"
                    >
                      עדכנו אותי
                    </button>
                  </form>
                </div>
                
                <div className="hidden md:block w-px h-32 bg-gray-200"></div>
                
                <div className="flex-1 text-center md:text-right">
                  <div className="flex items-center justify-center md:justify-end mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-2" aria-hidden="true" />
                    <h2 className="text-2xl font-bold">קבעו תור לייעוץ</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    לא רוצים לחכות? קבעו תור לייעוץ אישי עם הרופאים שלנו
                  </p>
                  <Link 
                    href="/appointment" 
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-white hover:bg-primary/90 py-3 px-6"
                    aria-label="קביעת תור לייעוץ רפואי"
                  >
                    קביעת תור
                    <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative group"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-primary/50" />
                  </div>
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">בקרוב</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 