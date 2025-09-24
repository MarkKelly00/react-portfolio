import { ReactNode } from 'react';

export function SectionContainer({ children, id, className = '' }: { children: ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="container-grid">{children}</div>
    </section>
  );
}


