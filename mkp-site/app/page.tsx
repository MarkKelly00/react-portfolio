import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import PortfolioSlider from '@/components/PortfolioSlider';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Process from '@/components/Process';
import TechMarquee from '@/components/TechMarquee';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <PortfolioSlider />
        <About />
        <Process />
        <TechMarquee />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}


