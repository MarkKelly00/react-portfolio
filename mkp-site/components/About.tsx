"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-grid grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <h2 className="heading-lg">Who we are</h2>
          <p className="mt-4 text-osloGray max-w-prose font-body-extended">Mark Kelly Productions LLC is a small, senior-led studio building modern, resilient websites and commerce experiences. We merge design systems with robust engineering to ship fast, scalable products.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-osloGray font-body-condensed font-semibold">
            <li className="flex items-center gap-2"><span className="text-fuelYellow">◆</span> Performance-first builds</li>
            <li className="flex items-center gap-2"><span className="text-fuelYellow">◆</span> Design systems and component libraries</li>
            <li className="flex items-center gap-2"><span className="text-fuelYellow">◆</span> Headless Shopify and Hydrogen</li>
            <li className="flex items-center gap-2"><span className="text-fuelYellow">◆</span> Ongoing optimization & growth</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <video autoPlay muted loop playsInline className="aspect-[4/3] rounded-2xl shadow-card border border-capeCod/40 object-cover w-full h-full">
            <source src="/assets/homepage_clip3.mp4" type="video/mp4" />
            <div className="aspect-[4/3] rounded-2xl bg-capeCod/30 border border-capeCod/40 shadow-card flex items-center justify-center">
              <span className="text-osloGray">Video not supported</span>
            </div>
          </video>
        </motion.div>
      </div>
    </section>
  );
}


