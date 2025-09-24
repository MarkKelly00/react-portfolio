"use client";
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Spotlight = {
  title: string;
  industry: string;
  subtitle: string;
  services: string[];
  href: string;
  image: string;
  testimonial: string;
  testimonialAuthor: string;
  testimonialJob?: string;
  siteOverview?: string;
  architecture?: string[];
  keyTechnologies?: string[];
  notableDetails?: string[];
};

const items: Spotlight[] = [
  {
    title: 'Tina Odell Homes',
    industry: 'Real Estate',
    subtitle: "Tina O'Dell Real Estate — Listings, lead capture, and client portal",
    services: [
      'Property listings & search',
      'Lead capture & contact flows',
      'Authenticated client portal',
      'Maps & geolocation',
      'Maintenance & support',
      'Forms & validation'
    ],
    href: 'https://www.tinaodellhomes.com',
    image: '/assets/Tina-O-Dell-Real-Estate-Thumbnail.png',
    testimonial:
      'Working with Mark Kelly Productions was a game changer for our online presence. The new site is fast, mobile-friendly, and converts visitors into leads.',
    testimonialAuthor: 'Tina O’Dell',
    testimonialJob: 'Founder, Tina Odell Homes',
    siteOverview: `Purpose\n\nThis website is built for Tina O'Dell Real Estate, a Pacific Northwest residential real estate brokerage specializing in Portland-area and surrounding markets. The site showcases property listings, provides lead capture/contact forms, and offers an authenticated client portal for saved favorites and account management.`,
    architecture: [
      'Frontend: SPA with React + TypeScript (Vite)',
      'Backend: Node.js serverless APIs for IDX proxy, image proxy, and mock data',
      'IDX Integration: IDX Broker via server-side proxy',
      'Auth & Data: Firebase (Auth + Firestore)'
    ],
    keyTechnologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Firebase',
      'IDX Broker API',
      'Node.js serverless functions',
      'Leaflet + React-Leaflet',
      'react-hook-form + yup',
      'lucide-react',
      'qrcode.react'
    ],
    notableDetails: [
      'IDX proxy to avoid CORS and centralize access keys',
      'Image proxying for MLS images',
      'Mock APIs for local development',
      'Protected routes for client portal using Firebase auth'
    ]
  },
  {
    title: 'Powers Media',
    industry: 'Media',
    subtitle: 'Portfolio, video playback and Master Classes platform',
    services: [
      'Video portfolio pages',
      'Course / Master Class flows',
      'Auth & dashboard',
      'Video playback integration',
      'Performance tuning'
    ],
    href: 'https://powers-media.vercel.app',
    image: '/assets/Powers-Media-Thumbnail.png',
    testimonial:
      'Mark delivered a polished, fast site that showcases our work — the dev experience was smooth and communication excellent.',
    testimonialAuthor: 'Powers Media',
    testimonialJob: 'Creative Director',
    siteOverview: `Purpose\n\nThe site presents the company's portfolio, service offerings, and a Master Classes product for delivering course content. It provides public marketing pages and authenticated user flows (sign-in, dashboard, course enrollment).`,
    architecture: [
      'Next.js (App Router) as the framework',
      'React + TypeScript for UI',
      'Firebase for Auth, Firestore, Storage, Analytics'
    ],
    keyTechnologies: [
      'Next.js (App Router)',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Firebase',
      'react-player',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge',
      '@stripe/stripe-js (prepared)'
    ],
    notableDetails: [
      'RootLayout wraps AuthProvider and site chrome',
      'Video playback via react-player',
      'Master Classes implemented as dynamic course routes',
      'Stripe libraries present for future payments'
    ]
  }
];

const techIconMap: Record<string, string | undefined> = {
  'React 19': '/assets/logos/react-logo.svg',
  React: '/assets/logos/react-logo.svg',
  TypeScript: '/assets/logos/ts-logo-512.svg',
  'Tailwind CSS': '/assets/logos/tailwind-css-wordmark-seeklogo.svg',
  'Tailwind CSS v4': '/assets/logos/tailwind-css-wordmark-seeklogo.svg',
  Firebase: '/assets/logos/firebase-logo.svg',
  'Next.js': '/assets/logos/nextjs-seeklogo.png',
  'Next.js (App Router)': '/assets/logos/nextjs-seeklogo.png',
  'framer-motion': '/assets/logos/framer-motion-seeklogo.svg',
  Vite: '/assets/logos/vite.svg',
  'IDX Broker API': '/assets/logos/idx-broker.svg',
  'Node.js': '/assets/logos/nodejs.svg',
  'react-player': '/assets/logos/react-player.png',
  'react-hook-form': '/assets/logos/react-hook-form.svg',
  'qrcode.react': '/assets/logos/qrcode-react.svg',
  'lucide-react': '/assets/logos/lucide-react.svg',
  'clsx': '/assets/logos/clsx.svg',
  'tailwind-merge': '/assets/logos/tailwind-merge.svg',
  '@stripe/stripe-js (prepared)': '/assets/logos/stripe.png',
  Leaflet: '/assets/logos/leaflet.svg',
  'React-Leaflet': '/assets/logos/leaflet.svg'
};

export default function ClientSpotlight() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    arrows: false
  } as const;

  return (
    <section id="client-spotlight" className="py-20 md:py-28">
      <div className="container-grid">
        <div className="mb-8 md:mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="heading-lg">Client Spotlight</h2>
            <p className="mt-3 text-osloGray">Featured clients and project highlights.</p>
          </div>
          <Link href="/portfolio" className="btn-secondary">
            View all
          </Link>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.title} className="px-2">
                <div className="grid gap-6 md:grid-cols-2 items-center">
                  <div>
                    <div>
                      <h4 className="text-sm">Industry: <u>{item.industry}</u></h4>
                      <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-osloGray">{item.subtitle}</p>
                    </div>

                    <ul className="mt-4 space-y-2 list-inside list-disc text-osloGray">
                      {item.services.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>

                    {/* Technologies carousel / icon row */}
                    {item.keyTechnologies && (
                      <div className="mt-6">
                        <h5 className="text-sm font-semibold">Technologies</h5>
                        <div className="mt-3 flex gap-4 overflow-x-auto py-2">
                          {item.keyTechnologies.map((tech) => {
                            const icon = techIconMap[tech] ?? techIconMap[tech.replace(/ v\d+/, '')];
                            return (
                              <div key={tech} className="min-w-[110px] flex-shrink-0 flex flex-col items-center">
                                <div className="w-20 h-20 rounded-2xl bg-capeCod/10 flex items-center justify-center overflow-hidden p-2">
                                  {icon ? (
                                    <Image src={icon} alt={tech} width={56} height={56} className="object-contain" />
                                  ) : (
                                    <div className="text-sm font-medium text-osloGray">{tech.split(' ')[0]}</div>
                                  )}
                                </div>
                                <div className="mt-2 text-sm text-osloGray text-center max-w-[96px] truncate">{tech}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex items-center gap-4">
                      <Link href={item.href} target="_blank" className="btn-primary">
                        view website
                      </Link>
                    </div>

                    <div className="mt-6">
                      <blockquote className="text-osloGray italic">“{item.testimonial}”</blockquote>
                      <div className="mt-3 font-medium">{item.testimonialAuthor}</div>
                      {item.testimonialJob && <div className="text-sm text-osloGray">{item.testimonialJob}</div>}
                    </div>
                  </div>

                  <div>
                    <div className="overflow-hidden rounded-2xl border border-capeCod/40 shadow-card relative h-64 md:h-[420px]">
                      <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}


