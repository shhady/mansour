import MainLayout from './components/layout/MainLayout';
import Hero from './components/home/Hero';
import FeaturedServices from './components/home/FeaturedServices';
import DoctorsIntro from './components/home/DoctorsIntro';
import TestimonialsSection from './components/home/TestimonialsSection';
import CtaSection from './components/home/CtaSection';
import ParallaxSection from './components/home/ParallaxSection';

export const metadata = {
  title: 'ד״ר מוחמד ואחמד מנסור - רופאים מומחים',
  description: 'ד״ר מוחמד מנסור, מומחה בכירורגיה פלסטית, וד״ר אחמד מנסור, אופתלמולוג ומנתח אוקולופלסטי, מספקים שירותי רפואה מתקדמים ואישיים.',
};

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <div className="relative z-10 bg-white">
        <DoctorsIntro />
        <FeaturedServices />
        <ParallaxSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </MainLayout>
  );
}
