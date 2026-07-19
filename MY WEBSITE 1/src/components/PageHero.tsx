import { Link } from 'react-router-dom';
import { useReveal } from '../hooks';
import { ArrowUpRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(50% 40% at 85% 10%, rgba(204,176,57,0.20), transparent 60%), radial-gradient(40% 30% at 10% 90%, rgba(27,54,21,0.08), transparent 60%)',
          }}
        />
        <div className="absolute -right-16 top-16 h-56 w-56 rounded-full bg-gold-300/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="reveal max-w-3xl">
          <div className="mb-6 flex items-center gap-2 text-xs text-forest-900/50">
            <Link to="/" className="transition-colors hover:text-forest-900">Home</Link>
            <span>/</span>
            <span className="text-forest-900/80">{eyebrow}</span>
          </div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
            {eyebrow}
          </p>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-forest-900 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-900/70 sm:text-xl">
              {subtitle}
            </p>
          )}
          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-4 text-base font-medium text-cream shadow-medium transition-all duration-300 hover:bg-forest-900 hover:shadow-large hover:-translate-y-0.5"
          >
            Let's talk
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
