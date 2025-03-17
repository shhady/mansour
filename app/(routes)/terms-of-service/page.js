import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'תנאי שימוש | ד״ר מוחמד ואחמד מנסור',
  description: 'תנאי השימוש באתר ד״ר מוחמד ואחמד מנסור, המפרטים את הכללים והתנאים לשימוש באתר ובשירותים המוצעים בו.',
};

export default function TermsOfServicePage() {
  return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <ArrowLeft className="ml-2 h-4 w-4" />
              חזרה לדף הבית
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">תנאי שימוש</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-8">
              ברוכים הבאים לאתר של ד״ר מוחמד ואחמד מנסור. השימוש באתר זה ובשירותים המוצעים בו כפוף לתנאי השימוש המפורטים להלן.
              אנא קרא תנאים אלה בעיון לפני השימוש באתר. המשך השימוש באתר מהווה הסכמה לתנאים אלה.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">שימוש באתר</h2>
            <p className="mb-6">
              האתר נועד לספק מידע כללי בלבד אודות השירותים הרפואיים המוצעים על ידי ד״ר מוחמד ואחמד מנסור.
              המידע המוצג באתר אינו מהווה ייעוץ רפואי, אבחון או טיפול, ואינו מחליף התייעצות עם רופא מוסמך.
              אין להסתמך על המידע באתר לצורך קבלת החלטות רפואיות ללא התייעצות עם רופא.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">קניין רוחני</h2>
            <p className="mb-6">
              כל התכנים המופיעים באתר, לרבות טקסטים, תמונות, סרטונים, לוגואים, עיצוב האתר וקוד המחשב,
              הם קניינם הרוחני של ד״ר מוחמד ואחמד מנסור או של צדדים שלישיים שהעניקו רישיון שימוש בהם.
              אין להעתיק, לשכפל, להפיץ, לפרסם או לעשות כל שימוש מסחרי בתכנים אלה ללא אישור מפורש בכתב.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">הגבלת אחריות</h2>
            <p className="mb-6">
              אנו עושים מאמצים לספק מידע מדויק ועדכני באתר, אך איננו מתחייבים שהמידע יהיה מלא, מדויק או עדכני בכל עת.
              השימוש באתר הוא על אחריותך בלבד. ד״ר מוחמד ואחמד מנסור לא יישאו באחריות לכל נזק ישיר, עקיף, מקרי או תוצאתי
              הנובע מהשימוש או מחוסר היכולת להשתמש באתר.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">קישורים לאתרים חיצוניים</h2>
            <p className="mb-6">
              האתר עשוי להכיל קישורים לאתרים חיצוניים שאינם בשליטתנו. איננו אחראים לתוכן, למדיניות הפרטיות
              או לנהלים של אתרים אלה, והכללת קישורים אלה אינה מהווה המלצה או אישור מצדנו לאתרים אלה.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">קביעת תורים</h2>
            <p className="mb-6">
              האתר מאפשר קביעת תורים באמצעות טופס מקוון. אנו נעשה מאמץ לאשר את התור בהקדם האפשרי,
              אך איננו מתחייבים לזמינות התורים. קביעת תור סופית תתבצע רק לאחר אישור מצדנו.
              ביטול תור יש לבצע לפחות 24 שעות מראש.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">שינויים בתנאי השימוש</h2>
            <p className="mb-6">
              אנו רשאים לשנות את תנאי השימוש מעת לעת, לפי שיקול דעתנו הבלעדי. שינויים אלה ייכנסו לתוקף מיד עם פרסומם באתר.
              המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">דין חל וסמכות שיפוט</h2>
            <p className="mb-6">
              על תנאי שימוש אלה יחולו דיני מדינת ישראל. סמכות השיפוט הבלעדית בכל עניין הנוגע לתנאי שימוש אלה
              תהיה נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">יצירת קשר</h2>
            <p className="mb-6">
              לשאלות או הבהרות בנוגע לתנאי השימוש, אנא צור קשר באמצעות פרטי הקשר המופיעים באתר.
            </p>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <ArrowLeft className="ml-2 h-4 w-4" />
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </div>
  );
} 