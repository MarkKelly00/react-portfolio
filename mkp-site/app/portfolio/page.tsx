import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import PortfolioSlider from '@/components/PortfolioSlider';
import ClientSpotlight from '@/components/ClientSpotlight';
import Image from 'next/image';
import PortfolioFlipCard from '@/components/PortfolioFlipCard';

export const metadata: Metadata = {
  title: 'Portfolio – Mark Kelly Productions LLC'
};

export default function PortfolioPage() {
  const projects = [
    { 
      title: 'HydroJug', 
      href: 'https://thehydrojug.com', 
      image: '/assets/HydroJug-Thumbnail.png',
      summary: 'High-performance Shopify e-commerce platform for premium hydration products. Custom product configurators, subscription management, and optimized checkout flow for fitness and wellness markets.'
    },
    { 
      title: 'Acta Wear', 
      href: 'https://actawear.com', 
      image: '/assets/ACTA-Thumbnail.png',
      summary: 'Custom Shopify Hydrogen storefront built from scratch with React, Oxygen hosting, and Node.js backend. Features AI-powered chatbot integration and advanced athletic apparel product filtering.'
    },
    { 
      title: 'Purelyte', 
      href: 'https://purelyte.com', 
      image: '/assets/Purelyte-Thumbnail.png',
      summary: 'Advanced Shopify Hydrogen e-commerce platform with custom subscription app, Swiper.js product galleries, and AI chatbot. Automated monthly electrolyte packet subscriptions with customer portal.'
    },
    { 
      title: 'Tina Odell Homes', 
      href: 'https://www.tinaodellhomes.com', 
      image: '/assets/Tina-O-Dell-Real-Estate-Thumbnail.png',
      summary: 'React SPA with IDX Broker MLS integration, Firebase authentication, and Leaflet mapping. Real-time property listings, client portal, and lead capture for Pacific Northwest real estate.'
    },
    { 
      title: 'Powers Media', 
      href: 'https://powers-media.vercel.app', 
      image: '/assets/Powers-Media-Thumbnail.png',
      summary: 'Next.js 15 video production platform with Firebase backend, React Player integration, and authenticated course delivery. Features portfolio showcase, master classes, and content management system.'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36">
        <section className="container-grid">
          <h1 className="heading-lg">Portfolio</h1>
          <p className="mt-3 text-osloGray max-w-2xl font-body-extended">A selection of recent work across commerce and content platforms.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <PortfolioFlipCard key={p.title} title={p.title} href={p.href} image={p.image} summary={p.summary} />
            ))}
          </div>
        </section>

        <div className="mt-20">
          <ClientSpotlight />
        </div>
      </main>
      <Footer />
    </>
  );
}


