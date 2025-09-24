"use client";
import Link from 'next/link';
import Magnetic from './Magnetic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['center 100%', 'center 50%'] });
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.65]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);
  return (
    <section className="py-16">
      <div className="container-grid">
        <div ref={ref} className="relative rounded-2xl border border-capeCod/40 bg-capeCod/30 p-8 md:p-12 text-center shadow-card">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-3 rounded-[inherit] bg-fuelYellow/40 blur-[80px] z-[-1]"
            style={{ opacity: glowOpacity, scale: glowScale }}
          />
          <h3 className="heading-lg">Your Project. Our Mission.</h3>
          <p className="mt-3 text-osloGray">Whether it's a full-scale build or a quick refresh, we create digital experiences that convert. Let's make your brand unforgettable.</p>
          <div className="mt-6">
            <Magnetic>
              <Link href="/contact" className="btn-primary">
                <span className="font-tech tracking-wider uppercase">Initiate Launch Sequence</span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}