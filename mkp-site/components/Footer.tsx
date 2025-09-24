import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-capeCod/40">
      <div className="container-grid py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Logo className="text-2xl" />
          <p className="mt-3 text-osloGray max-w-sm">Designing and building performant web experiences from Utah.</p>
        </div>
        <div>
          <h4 className="font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-osloGray">
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Get in touch</h4>
          <ul className="mt-3 space-y-2 text-osloGray">
            <li><a href="mailto:hello@markkelly.dev">hello@markkelly.dev</a></li>
            <li>
              <a href="https://www.linkedin.com/in/mark-kelly-9a1436160/" target="_blank" className="inline-flex items-center gap-2 hover:text-doubleSpanishWhite">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z"/></svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-capeCod/40 py-6 text-center text-osloGray/80 text-sm">© {new Date().getFullYear()} Mark Kelly Productions LLC</div>
    </footer>
  );
}


