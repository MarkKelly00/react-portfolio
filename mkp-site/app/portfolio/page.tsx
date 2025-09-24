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
    { title: 'HydroJug', href: 'https://thehydrojug.com', image: '/assets/HydroJug-Thumbnail.png' },
    { title: 'Acta Wear', href: 'https://actawear.com', image: '/assets/ACTA-Thumbnail.png' },
    { title: 'Purelyte', href: 'https://purelyte.com', image: '/assets/Purelyte-Thumbnail.png' },
    { title: 'Tina Odell Homes', href: 'https://www.tinaodellhomes.com', image: '/assets/Tina-O-Dell-Real-Estate-Thumbnail.png' },
    { title: 'Powers Media', href: 'https://powers-media.vercel.app', image: '/assets/Powers-Media-Thumbnail.png' }
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
              <PortfolioFlipCard key={p.title} title={p.title} href={p.href} image={p.image} summary="Case study coming soon. High‑performance e‑commerce build with custom components." />
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


