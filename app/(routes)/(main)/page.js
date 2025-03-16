import Hero from '../../components/home/Hero';
import FeaturedServices from '../../components/home/FeaturedServices';
import DoctorsIntro from '../../components/home/DoctorsIntro';
import ParallaxSection from '../../components/home/ParallaxSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import CtaSection from '../../components/home/CtaSection';

export const metadata = {
  title: 'ד״ר מוחמד ואחמד מנסור - רופאים מומחים',
  description: 'ד״ר מוחמד מנסור, מומחה בכירורגיה פלסטית, וד״ר אחמד מנסור, אופתלמולוג ומנתח אוקולופלסטי, מספקים שירותי רפואה מתקדמים ואישיים.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <DoctorsIntro />
      <ParallaxSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
} 