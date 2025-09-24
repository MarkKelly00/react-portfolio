"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const steps = [
  { title: 'Discover', desc: 'Goals, constraints, and success metrics. Audit performance and content.' },
  { title: 'Design', desc: 'Experience architecture, UX flows, and a scalable component system.' },
  { title: 'Build', desc: 'Accessible, performant implementation with CI and previews.' },
  { title: 'Launch', desc: 'Zero-downtime deploys, analytics, and on-call support.' },
  { title: 'Grow', desc: 'Ongoing optimizations, experiments, and roadmap delivery.' }
];

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.9', 'end 0.2'] });
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Optional GSAP pinning for the progress bar
  useEffect(() => {
    const run = async () => {
      if (!sectionRef.current || !barRef.current) return;
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      // Pin the bar inside the section container so it never floats elsewhere.
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        onUpdate: (self) => {
          if (barRef.current) {
            const pct = Math.min(Math.max(self.progress, 0), 1) * 100;
            barRef.current.style.width = pct + '%';
          }
        }
      });
    };
    run();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="container-grid">
        <div className="mb-12 md:mb-16">
          <h2 className="heading-lg">Approach</h2>
          <p className="mt-4 text-osloGray max-w-2xl">A focused, collaborative process designed to ship quality work quickly.</p>
        </div>

        <div className="relative">
          <div ref={barRef} className="absolute h-1 bg-fuelYellow rounded-full top-0 left-0 right-0" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl p-6 border border-capeCod/40 bg-capeCod/30 shadow-card">
                <div className="text-fuelYellow font-tech font-bold text-xl tracking-wider">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mt-2 font-tech font-bold text-lg tracking-wide uppercase">{s.title}</h3>
                <p className="mt-2 text-osloGray">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}