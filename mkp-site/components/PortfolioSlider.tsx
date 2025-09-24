"use client";
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Item = {
  title: string;
  href: string;
  image: string;
};

const items: Item[] = [
  { title: 'HydroJug', href: 'https://thehydrojug.com', image: '/assets/HydroJug-Thumbnail.png' },
  { title: 'Acta Wear', href: 'https://actawear.com', image: '/assets/ACTA-Thumbnail.png' },
  { title: 'Purelyte', href: 'https://purelyte.com', image: '/assets/Purelyte-Thumbnail.png' },
  { title: 'Tina Odell Homes', href: 'https://www.tinaodellhomes.com', image: '/assets/Tina-O-Dell-Real-Estate-Thumbnail.png' },
  { title: 'Powers Media', href: 'https://powers-media.vercel.app', image: '/assets/Powers-Media-Thumbnail.png' }
];

export default function PortfolioSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    arrows: false
  } as const;

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-grid">
        <div className="mb-8 md:mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="heading-lg">Selected work</h2>
            <p className="mt-3 text-osloGray">A rotating look at recent builds.</p>
          </div>
          <Link href="/portfolio" className="btn-secondary">View all</Link>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.title} className="px-2">
                <Link href={item.href} target="_blank" className="group block">
                  <div className="overflow-hidden rounded-2xl border border-capeCod/40 shadow-card relative h-[480px]">
                    <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-fuelYellow group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}


