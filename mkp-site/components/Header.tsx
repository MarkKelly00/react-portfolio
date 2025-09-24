"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { motion } from 'framer-motion';

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#work', label: 'Work' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/#about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 will-change-transform border-b ${scrolled ? 'bg-codGray/70 backdrop-blur-md border-capeCod/40' : 'bg-codGray/0 border-transparent'} transition-colors duration-300`}
    >
      <div className="container-grid flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="text-2xl" />
          <span className="sr-only">Mark Kelly Productions LLC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="relative text-osloGray transition-colors hover:text-doubleSpanishWhite after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-fuelYellow after:transition-all hover:after:w-full font-body-condensed font-semibold tracking-wide">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </nav>
        <button className="md:hidden text-doubleSpanishWhite" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-capeCod/40">
          <div className="container-grid py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-lg font-body-condensed font-semibold" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setOpen(false)}>Start a Project</Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}


