"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const services: Array<{ title: string; desc: string }>= [
  { title: 'Custom Web Design & Development', desc: 'Design systems, marketing sites, and full-stack web apps built for speed and scale.' },
  { title: 'Shopify/Hydrogen Storefronts', desc: 'Headless commerce experiences with Hydrogen + Oxygen or custom storefronts.' },
  { title: 'Performance Optimization', desc: 'Core Web Vitals tuning, image optimization, and Lighthouse score improvements.' },
  { title: 'E‑commerce Solutions', desc: 'Checkout flows, subscription products, and multi-channel integrations.' },
  { title: 'Automation & AI Integration', desc: 'Workflows, content generation, and operations powered by automation and AI.' }
];

function Card({ title, desc, icon }: { title: string; desc: string; icon?: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-capeCod/40 bg-capeCod/30 p-6 shadow-card hover:-translate-y-1 transition-transform group"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 h-10 w-10 grid place-items-center rounded-full bg-fuelYellow/10 text-fuelYellow shadow-[0_2px_8px_rgba(240,158,44,0.35),inset_0_0_0_1px_rgba(240,158,44,0.35)]">
          <motion.span
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="leading-none"
          >
            ★
          </motion.span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-osloGray">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container-grid">
        <div className="mb-12 md:mb-16">
          <h2 className="heading-lg">What we do</h2>
          <p className="mt-4 text-osloGray max-w-2xl">End‑to‑end delivery from strategy and design to production‑grade implementation.</p>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} title={s.title} desc={s.desc} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}