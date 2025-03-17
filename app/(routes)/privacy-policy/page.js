import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'מדיניות פרטיות | ד״ר מוחמד ואחמד מנסור',
  description: 'מדיניות הפרטיות של אתר ד״ר מוחמד ואחמד מנסור, המתארת כיצד אנו אוספים, משתמשים ושומרים על המידע האישי שלך.',
};

export default function PrivacyPolicyPage() {
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
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">מדיניות פרטיות</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-8">
              אנו מכבדים את פרטיות המשתמשים באתר שלנו ומתחייבים להגן על המידע האישי הנמסר לנו. 
              מדיניות פרטיות זו מתארת כיצד אנו אוספים, משתמשים ושומרים על המידע האישי שלך, 
              בהתאם לחוקי הגנת הפרטיות בישראל, כולל חוק הגנת הפרטיות, התשמ&quot;א–1981.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">איסוף מידע</h2>
            <p className="mb-4">אנו עשויים לאסוף מידע אישי בדרכים הבאות:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>מידע שנמסר על ידך:</strong> כאשר אתה יוצר קשר עמנו באמצעות טפסים באתר, 
                נרשם לשירותים שלנו או מספק מידע אישי אחר.
              </li>
              <li>
                <strong>מידע שנאסף אוטומטית:</strong> בעת השימוש באתר, אנו עשויים לאסוף מידע טכני, 
                כגון כתובת IP, סוג הדפדפן, דפים שנצפו וזמני גישה.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">שימוש במידע</h2>
            <p className="mb-4">המידע האישי שנאסף ישמש למטרות הבאות:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>מתן שירותים:</strong> כדי לספק את השירותים שביקשת, כולל מענה לפניותיך.
              </li>
              <li>
                <strong>שיפור האתר:</strong> לשיפור חוויית המשתמש והתאמת התוכן לצרכיך.
              </li>
              <li>
                <strong>תקשורת:</strong> לשליחת עדכונים, הצעות ומידע נוסף, בכפוף להסכמתך.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">שיתוף מידע עם צדדים שלישיים</h2>
            <p className="mb-4">אנו לא נשתף את המידע האישי שלך עם צדדים שלישיים, אלא במקרים הבאים:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>ספקי שירות:</strong> כאשר הדבר נחוץ לצורך תפעול האתר או מתן השירותים, 
                בכפוף להתחייבות לשמירה על סודיות.
              </li>
              <li>
                <strong>חובות חוקיות:</strong> כאשר החוק מחייב אותנו לחשוף את המידע.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">אבטחת מידע</h2>
            <p className="mb-6">
              אנו נוקטים באמצעים סבירים ומקובלים כדי להגן על המידע האישי שלך מפני גישה בלתי מורשית, 
              שימוש לרעה או חשיפה.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">עוגיות (Cookies)</h2>
            <p className="mb-6">
              האתר שלנו משתמש בעוגיות כדי לשפר את חוויית המשתמש. עוגיות הן קבצי טקסט קטנים הנשמרים 
              במכשירך ומאפשרים לנו לזהות את העדפותיך. באפשרותך לשלוט בשימוש בעוגיות דרך הגדרות הדפדפן שלך.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">זכויותיך</h2>
            <p className="mb-6">
              בהתאם לחוק הגנת הפרטיות, יש לך הזכות לעיין במידע האישי שאנו מחזיקים עליך, 
              לבקש תיקון או מחיקה שלו. למימוש זכויותיך, אנא פנה אלינו באמצעות פרטי הקשר המופיעים באתר.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">שינויים במדיניות הפרטיות</h2>
            <p className="mb-6">
              אנו רשאים לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר. 
              המשך השימוש באתר לאחר השינויים מעיד על הסכמתך למדיניות המעודכנת.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">יצירת קשר</h2>
            <p className="mb-6">
              לשאלות או הבהרות בנוגע למדיניות פרטיות זו, אנא צור קשר באמצעות פרטי הקשר המופיעים באתר.
            </p>
            
            <p className="mt-10 text-lg font-semibold">
              אנו מחויבים לשמירה על פרטיותך ופועלים בהתאם לחוקי הגנת הפרטיות בישראל.
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