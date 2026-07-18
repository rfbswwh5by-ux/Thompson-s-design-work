import { useReveal } from '../hooks';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-forest-900 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-forest-900/70">{subtitle}</p>
      )}
    </div>
  );
}
