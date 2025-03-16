import { Scissors, Eye, Syringe, Stethoscope, Microscope, Heart } from 'lucide-react';

export const featuredServices = [
  {
    id: 1,
    icon: <Scissors className="h-10 w-10" />,
    title: 'כירורגיה פלסטית',
    description: 'טיפולים מתקדמים בכירורגיה פלסטית ואסתטית',
    link: '/services/plastic-surgery',
    doctor: 'ד״ר מוחמד מנסור',
  },
  {
    id: 2,
    icon: <Eye className="h-10 w-10" />,
    title: 'אופתלמולוגיה',
    description: 'טיפול מקיף בבעיות עיניים ומחלות עיניים',
    link: '/services/ophthalmology',
    doctor: 'ד״ר אחמד מנסור',
  },
  {
    id: 3,
    icon: <Syringe className="h-10 w-10" />,
    title: 'טיפולים אסתטיים',
    description: 'טיפולי הזרקה, בוטוקס ומילויים',
    link: '/services/aesthetic-treatments',
    doctor: 'ד״ר מוחמד מנסור',
  },
  {
    id: 4,
    icon: <Stethoscope className="h-10 w-10" />,
    title: 'כירורגיה אוקולופלסטית',
    description: 'ניתוחי עפעפיים, ארובות עיניים ודרכי דמעות',
    link: '/services/oculoplastic-surgery',
    doctor: 'ד״ר אחמד מנסור',
  },
  {
    id: 5,
    icon: <Microscope className="h-10 w-10" />,
    title: 'רפואה מתקדמת',
    description: 'טכנולוגיות וטיפולים חדשניים',
    link: '/services/advanced-medicine',
    doctor: 'ד״ר מוחמד מנסור',
  },
  {
    id: 6,
    icon: <Heart className="h-10 w-10" />,
    title: 'טיפול אישי',
    description: 'גישה אישית ומותאמת לכל מטופל',
    link: '/services/personalized-care',
    doctor: 'ד״ר אחמד מנסור',
  },
]; 