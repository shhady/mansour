import { Scissors, Eye, Syringe, Stethoscope, Microscope, Heart } from 'lucide-react';

export const featuredServices = [
  {
    id: 1,
    slug: 'plastic-surgery',
    icon: <Scissors className="h-10 w-10" />,
    title: 'כירורגיה פלסטית',
    description: 'טיפולים מתקדמים בכירורגיה פלסטית ואסתטית',
    link: '/services/plastic-surgery',
    doctor: 'ד״ר מוחמד מנסור',
    fullDescription: 'אנו מציעים מגוון רחב של ניתוחים פלסטיים לפנים ולגוף, המבוצעים בטכניקות המתקדמות ביותר. הניתוחים מבוצעים על ידי ד״ר מוחמד מנסור, מומחה בכירורגיה פלסטית עם ניסיון רב בתחום.',
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
    ],
    image: '/services/plastic-surgery.jpg',
  },
  {
    id: 2,
    slug: 'ophthalmology',
    icon: <Eye className="h-10 w-10" />,
    title: 'אופתלמולוגיה',
    description: 'טיפול מקיף בבעיות עיניים ומחלות עיניים',
    link: '/services/ophthalmology',
    doctor: 'ד״ר אחמד מנסור',
    fullDescription: 'שירותי רפואת עיניים מקיפים, הכוללים אבחון וטיפול במגוון רחב של בעיות ומחלות עיניים. ד״ר אחמד מנסור, מומחה ברפואת עיניים, מעניק טיפול מקצועי ואישי לכל מטופל.',
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
    ],
    image: '/services/ophthalmology.jpg',
  },
  {
    id: 3,
    slug: 'aesthetic-treatments',
    icon: <Syringe className="h-10 w-10" />,
    title: 'טיפולים אסתטיים',
    description: 'טיפולי הזרקה, בוטוקס ומילויים',
    link: '/services/aesthetic-treatments',
    doctor: 'ד״ר מוחמד מנסור',
    fullDescription: 'מגוון טיפולים אסתטיים לא פולשניים או מינימליים, המעניקים תוצאות מרשימות ללא ניתוח. הטיפולים מבוצעים על ידי ד״ר מוחמד מנסור, המתמחה בטיפולים אסתטיים מתקדמים.',
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
    ],
    image: '/services/aesthetic-treatments.jpg',
  },
  {
    id: 4,
    slug: 'oculoplastic-surgery',
    icon: <Stethoscope className="h-10 w-10" />,
    title: 'כירורגיה אוקולופלסטית',
    description: 'ניתוחי עפעפיים, ארובות עיניים ודרכי דמעות',
    link: '/services/oculoplastic-surgery',
    doctor: 'ד״ר אחמד מנסור',
    fullDescription: 'ניתוחים מתקדמים בתחום הכירורגיה האוקולופלסטית, המתמקדים בעפעפיים, ארובות העיניים ודרכי הדמעות. ד״ר אחמד מנסור מתמחה בניתוחים אלו, המשלבים היבטים פונקציונליים ואסתטיים.',
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
      'שילוב היבטים פונקציונליים ואסתטיים',
    ],
    image: '/services/oculoplastic-surgery.jpg',
  },
  {
    id: 5,
    slug: 'advanced-medicine',
    icon: <Microscope className="h-10 w-10" />,
    title: 'רפואה מתקדמת',
    description: 'טכנולוגיות וטיפולים חדשניים',
    link: '/services/advanced-medicine',
    doctor: 'ד״ר מוחמד מנסור',
    fullDescription: 'אנו מחויבים לשימוש בטכנולוגיות וטיפולים חדשניים בתחומי הרפואה השונים. ד״ר מוחמד מנסור מתעדכן באופן שוטף בחידושים האחרונים בתחום הרפואה ומיישם אותם בטיפולים.',
    procedures: [
      'טיפולים בטכנולוגיות מתקדמות',
      'שימוש במכשור רפואי חדשני',
      'טיפולים מבוססי אנרגיה',
      'טיפולים מבוססי תאים',
      'רפואה מותאמת אישית',
      'טיפולים מינימליים פולשניים',
    ],
    benefits: [
      'תוצאות טובות יותר',
      'זמן החלמה מהיר יותר',
      'פחות כאב ואי נוחות',
      'דיוק רב יותר בטיפולים',
      'פתרונות חדשניים לבעיות מורכבות',
    ],
    image: '/services/advanced-medicine.jpg',
  },
  {
    id: 6,
    slug: 'personalized-care',
    icon: <Heart className="h-10 w-10" />,
    title: 'טיפול אישי',
    description: 'גישה אישית ומותאמת לכל מטופל',
    link: '/services/personalized-care',
    doctor: 'ד״ר אחמד מנסור',
    fullDescription: 'אנו מאמינים בגישה אישית ומותאמת לכל מטופל. ד״ר אחמד מנסור מקדיש זמן להכיר כל מטופל, להבין את צרכיו הייחודיים ולהתאים את הטיפול בהתאם.',
    procedures: [
      'ייעוץ אישי מקיף',
      'תכנית טיפול מותאמת אישית',
      'מעקב צמוד לאורך כל תהליך הטיפול',
      'זמינות גבוהה למענה על שאלות',
      'תמיכה רגשית לאורך התהליך',
      'שיתוף המטופל בקבלת החלטות',
    ],
    benefits: [
      'טיפול מותאם לצרכים האישיים',
      'תחושת ביטחון ואמון',
      'תוצאות טובות יותר',
      'חוויית טיפול נעימה יותר',
      'מענה מקיף לכל הצרכים',
    ],
    image: '/services/personalized-care.jpg',
  },
]; 