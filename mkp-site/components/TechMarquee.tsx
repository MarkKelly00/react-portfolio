"use client";
import { useEffect, useRef } from 'react';

type Logo = { alt: string; src: string; className?: string };
const logos: Logo[] = [
  { alt: 'React', src: '/assets/logos/react-logo.svg' },
  { alt: 'Next.js', src: '/assets/logos/nextjs-seeklogo.png' },
  { alt: 'Shopify', src: '/assets/logos/shopify-logo-blue.svg' },
  { alt: 'Hydrogen', src: '/assets/logos/hydrogen-logo.png' },
  { alt: 'TypeScript', src: '/assets/logos/ts-logo-512.svg' },
  { alt: 'TailwindCSS', src: '/assets/logos/tailwind-css-wordmark-seeklogo.svg' },
  { alt: 'Framer', src: '/assets/logos/framer-motion-seeklogo.svg' },
  { alt: 'Firebase', src: '/assets/logos/firebase-logo.svg' },
  { alt: 'Heroku', src: '/assets/logos/Heroku-Logo.svg', className: 'scale-125' },
  { alt: 'PostgreSQL', src: '/assets/logos/postgresql-logo.png' }
];

export default function TechMarquee() {
  const ref = useRef<HTMLDivElement | null>(null);
  const stripeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    let x = 0;
    let velocity = -0.6; // base speed to the left
    let isDragging = false;
    let lastX = 0;

    const step = () => {
      x += velocity;
      const limit = node.scrollWidth / 2;
      if (x <= -limit) x = 0;
      if (x >= 0) x = -limit + 0.5; // keep looping seamlessly
      node.style.transform = `translateX(${x}px)`;
      // ease velocity back to base when not dragging
      if (!isDragging) velocity += (-0.6 - velocity) * 0.02;
      raf = requestAnimationFrame(step);
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      lastX = e.clientX;
      (stripeRef.current as HTMLDivElement | null)?.setPointerCapture?.(e.pointerId);
      document.body.style.cursor = 'grabbing';
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      velocity = dx * 0.5; // drag to control direction and speed
    };
    const onPointerUp = () => {
      isDragging = false;
      document.body.style.cursor = '';
    };

    stripeRef.current?.addEventListener('pointerdown', onPointerDown as any);
    window.addEventListener('pointermove', onPointerMove as any);
    window.addEventListener('pointerup', onPointerUp as any);
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      stripeRef.current?.removeEventListener('pointerdown', onPointerDown as any);
      window.removeEventListener('pointermove', onPointerMove as any);
      window.removeEventListener('pointerup', onPointerUp as any);
    };
  }, []);

  return (
    <section className="py-10">
      <div className="container-grid">
        <div className="text-center mb-8">
          <h3 className="font-tech font-light text-xl tracking-widest uppercase text-osloGray">Technologies</h3>
        </div>
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="relative overflow-hidden border border-capeCod/40">
            <div className="absolute inset-0 bg-gradient-to-r from-capeCod/60 via-capeCod/30 to-capeCod/60" />
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" />
              <div
                className="flex items-center gap-16 py-8 px-8 cursor-grab active:cursor-grabbing"
                style={{ willChange: 'transform' }}
                ref={ref}
                aria-roledescription="marquee"
              >
                {[...logos, ...logos].map((l, i) => (
                  <img
                    key={i}
                    src={l.src}
                    alt={l.alt}
                    className={`h-10 md:h-12 lg:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition will-change-transform ${l.className || ''}`}
                    loading="lazy"
                  />
                ))}
              </div>
              <div ref={stripeRef} className="absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


