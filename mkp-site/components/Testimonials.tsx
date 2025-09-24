"use client";
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'MKP delivered an incredibly fast headless storefront and a smooth launch.',
    author: 'Client Name, Company'
  },
  {
    quote: 'Our Core Web Vitals jumped to green across the board. Highly recommend.',
    author: 'Marketing Director'
  },
  {
    quote: 'Great communication, polished design, and thoughtful engineering.',
    author: 'Founder'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28" aria-label="Testimonials">
      <div className="container-grid">
        <div className="mb-12">
          <h2 className="heading-lg">People talk</h2>
          <p className="mt-3 text-osloGray">A few words from partners and clients.</p>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-capeCod/40 bg-capeCod/30 p-6 shadow-card"
            >
              <p className="text-doubleSpanishWhite/90">“{t.quote}”</p>
              <footer className="mt-4 text-osloGray">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


