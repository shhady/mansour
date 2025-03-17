// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, GraduationCap, Award, Stethoscope } from "lucide-react";

// export const metadata = {
//   title: "הרופאים שלנו | ד״ר מוחמד ואחמד מנסור",
//   description: "הכירו את ד״ר מוחמד מנסור, מומחה בכירורגיה פלסטית, וד״ר אחמד מנסור, רופא עיניים מומחה ומנתח אוקולופלסטי.",
//   keywords: "מוחמד מנסור, אחמד מנסור, כירורגיה פלסטית, אופתלמולוגיה, אוקולופלסטיקה, רופאים מומחים",
// };

// const doctors = [
//   {
//     id: "ahmad",
//     name: "ד״ר אחמד מנסור",
//     title: "אופתלמולוג ומנתח אוקולופלסטי",
//     bio: "ד״ר אחמד מנסור הוא אופתלמולוג בכיר ומנתח אוקולופלסטי (ניתוחי עפעפיים, ארובות עיניים ודרכי דמעות) במרכז הרפואי סורוקה, באר שבע. הוא גם מתאם טיפולי עיניים בשירותי בריאות כללית, מחוז שרון-שומרון.",
//     image: "/dr-ahmad-bg.jpg",
//     link: "/doctors/ahmad",
//     highlights: [
//       { icon: <GraduationCap className="h-4 w-4" />, text: "התמחות במרכז הרפואי ברזילי" },
//       { icon: <Award className="h-4 w-4" />, text: "מומחה בכירורגיה אוקולופלסטית" },
//       { icon: <Stethoscope className="h-4 w-4" />, text: "ניסיון של 12+ שנים" },
//     ]
//   },
//   {
//     id: "muhammad",
//     name: "ד״ר מוחמד מנסור",
//     title: "מומחה בכירורגיה פלסטית",
//     bio: "ד״ר מוחמד מנסור הוא מומחה בכירורגיה פלסטית, בוגר בית הספר לרפואה של האוניברסיטה העברית - הדסה עין כרם, ירושלים. הוא השלים את ההתמחות שלו במרכז הרפואי רבין (בילינסון) והצטרף לכללית במחוז הצפון (עפולה).",
//     image: "/dr-mohamed.png",
//     link: "/doctors/muhammad",
//     highlights: [
//       { icon: <GraduationCap className="h-4 w-4" />, text: "בוגר האוניברסיטה העברית" },
//       { icon: <Award className="h-4 w-4" />, text: "מומחה בכירורגיה פלסטית" },
//       { icon: <Stethoscope className="h-4 w-4" />, text: "ניסיון של 15+ שנים" },
//     ]
//   },
// ];

// export default function DoctorsPage() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="max-w-4xl mx-auto text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">הרופאים שלנו</h1>
      
//         <div className="w-24 h-1 bg-primary mx-auto"></div>
//       </div>

//       <div className="space-y-16">
//         {doctors.map((doctor, index) => (
//           <div 
//             key={doctor.id}
//             className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-0`}
//           >
//             <div className="md:w-1/2 relative h-80 w-full overflow-hidden">
//               <Image
//                 src={doctor.image}
//                 alt={doctor.name}
//                 fill
//                 className="object-contain object-center"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 p-6 text-white">
//                 <h2 className="text-2xl font-bold">{doctor.name}</h2>
//                 <p className="text-white/90">{doctor.title}</p>
//               </div>
//             </div>
            
//             <div className="md:w-1/2 p-6">
//               <p className="text-lg mb-6">{doctor.bio}</p>
              
//               <div className="space-y-3 mb-8">
//                 {doctor.highlights.map((highlight, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       {highlight.icon}
//                     </div>
//                     <span>{highlight.text}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <Link 
//                 href={doctor.link}
//                 className="cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary-dark text-white py-3 px-6 text-lg group"
//               >
//                 פרופיל מלא
//                 <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// } 