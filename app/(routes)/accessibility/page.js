import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

export const metadata = {
  title: 'הצהרת נגישות | ד״ר מוחמד ואחמד מנסור',
  description: 'הצהרת הנגישות של אתר ד״ר מוחמד ואחמד מנסור, המפרטת את מחויבותנו לנגישות ואת האמצעים שננקטו להנגשת האתר.',
};

export default function AccessibilityPage() {
  return (
    <MainLayout>
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
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">הצהרת נגישות</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-8">
              אתר זה מיועד לשימוש כלל הציבור, כולל אנשים עם מוגבלויות. אנו מחויבים להנגיש את האתר בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013 ולתקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">אמצעי הנגישות באתר</h2>
            <p className="mb-4">האתר כולל את אמצעי הנגישות הבאים:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>תמיכה בשינוי גודל הטקסט</li>
              <li>תמיכה בניגודיות גבוהה</li>
              <li>תמיכה במצב גווני אפור</li>
              <li>הדגשת קישורים</li>
              <li>ניווט באמצעות מקלדת</li>
              <li>תיאורי תמונות (alt text) לקוראי מסך</li>
              <li>מבנה דפים עקבי וברור</li>
              <li>כותרות מדורגות לניווט קל</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">כיצד להשתמש באמצעי הנגישות</h2>
            <p className="mb-6">
              באתר מוטמע וידג'ט נגישות המאפשר התאמה אישית של תצוגת האתר. הוידג'ט ממוקם בצד שמאל של המסך ומסומן בסמל הנגישות הבינלאומי.
              לחיצה על הסמל תפתח את תפריט הנגישות, המאפשר:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>הגדלה והקטנה של גודל הטקסט</li>
              <li>מעבר למצב ניגודיות גבוהה</li>
              <li>מעבר למצב גווני אפור</li>
              <li>הדגשת קישורים</li>
              <li>הפעלת מצב ניווט מקלדת</li>
              <li>איפוס כל ההגדרות</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">דפדפנים נתמכים</h2>
            <p className="mb-6">
              האתר תומך בדפדפנים המודרניים העיקריים: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari.
              מומלץ להשתמש בגרסאות העדכניות ביותר של דפדפנים אלה לחוויית גלישה מיטבית.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">מגבלות הנגישות</h2>
            <p className="mb-6">
              למרות מאמצינו להנגיש את האתר, ייתכן שחלקים מסוימים באתר טרם הונגשו באופן מלא.
              אנו ממשיכים לעבוד על שיפור הנגישות באתר ומתחייבים לעדכן את האתר בהתאם לדרישות הנגישות.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">פניות בנושא נגישות</h2>
            <p className="mb-6">
              אם נתקלת בבעיית נגישות באתר או שיש לך הצעות לשיפור הנגישות, אנא פנה אלינו באמצעות פרטי הקשר המופיעים באתר.
              אנו מתחייבים לטפל בפניות בנושא נגישות בהקדם האפשרי ולעשות כל מאמץ לפתור את הבעיה.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">רכז נגישות</h2>
            <p className="mb-6">
              רכז הנגישות מטעמנו הוא: [שם רכז הנגישות]<br />
              טלפון: [מספר טלפון]<br />
              דוא"ל: [כתובת דוא"ל]
            </p>
            
            <p className="mt-10 text-lg font-semibold">
              הצהרת נגישות זו עודכנה לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}
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
    </MainLayout>
  );
} 