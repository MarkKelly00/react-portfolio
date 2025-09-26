"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -80]);
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div style={{ y: y1 }} className="absolute -top-24 -right-24 w-[50rem] h-[50rem] rounded-full blur-3xl bg-fuelYellow/10 will-change-transform" />
        <motion.div style={{ y: y2 }} className="absolute -bottom-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl bg-cello/20 will-change-transform" />
      </div>
      <div className="container-grid grid md:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <h1 className="heading-xl">
            Let's Build Something <span className="text-fuelYellow">Incredible</span>
          </h1>
          <p className="mt-6 text-lg text-osloGray max-w-2xl font-body-extended">
            Mark Kelly Productions LLC is a web design and development studio crafting performant, scalable digital products and storefronts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#services" className="btn-primary">Our Services</Link>
            <Link href="/portfolio" className="btn-secondary text-tech">See Work</Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="md:col-span-5"
        >
          <video autoPlay muted loop playsInline className="aspect-[4/3] rounded-2xl shadow-card border border-capeCod/40 object-cover w-full h-full">
            <source src="/assets/homepage_clip.mp4" type="video/mp4" />
            <div className="aspect-[4/3] rounded-2xl bg-capeCod/40 shadow-card border border-capeCod/40 flex items-center justify-center">
              <span className="text-osloGray">Video not supported</span>
            </div>
          </video>
        </motion.div>
      </div>
    </section>
  );
}