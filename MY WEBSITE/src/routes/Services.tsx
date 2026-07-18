import { Link } from 'react-router-dom';
import {
  PenTool, Code2, Search, ShoppingCart, Sparkles, Gauge, ArrowUpRight, Check,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { useReveal } from '../hooks';

const services = [
  {
    icon: PenTool,
    title: 'Brand & Identity',
    desc: 'Logo systems, typography, color, and voice — a cohesive identity built to scale across every touchpoint.',
    tags: ['Logo systems', 'Art direction', 'Guidelines'],
    deliverables: ['Logo suite', 'Color & type system', 'Brand guidelines'],
  },
  {
    icon: Code2,
    title: 'Web Design & Build',
    desc: 'Custom-designed, hand-coded websites with buttery performance and accessibility baked in.',
    tags: ['UI/UX', 'React', 'Headless CMS'],
    deliverables: ['Custom design', 'Hand-coded build', 'CMS integration'],
  },
  {
    icon: Search,
    title: 'SEO & Content',
    desc: 'Technical SEO, structured content, and analytics that compound into organic growth month over month.',
    tags: ['Technical SEO', 'Schema', 'Strategy'],
    deliverables: ['Technical audit', 'On-page SEO', 'Analytics setup'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    desc: 'Conversion-first storefronts on Shopify and headless stacks — engineered to lift AOV and retention.',
    tags: ['Shopify', 'Headless', 'CRO'],
    deliverables: ['Storefront design', 'Checkout optimization', 'Product pages'],
  },
  {
    icon: Sparkles,
    title: 'Motion & Interaction',
    desc: 'Micro-interactions, scroll choreography, and signature animations that make a site feel alive.',
    tags: ['Motion', 'WebGL', 'Prototyping'],
    deliverables: ['Motion design', 'Scroll animations', 'Interactive prototypes'],
  },
  {
    icon: Gauge,
    title: 'Care & Growth',
    desc: 'Ongoing partnership: hosting, A/B testing, and iterative improvements that keep your site winning.',
    tags: ['Retainer', 'A/B testing', 'Analytics'],
    deliverables: ['Monthly improvements', 'A/B testing', 'Performance monitoring'],
  },
];

const faqs = [
  { q: 'How do you price projects?', a: 'I work on fixed project pricing, not hourly. After our first chat, I send a clear proposal with scope, timeline, and price — no surprises.' },
  { q: 'How long does a project take?', a: 'A typical marketing site takes 4–8 weeks depending on scope. I\u2019ll give you a realistic timeline up front and stick to it.' },
  { q: 'Do you work with clients remotely?', a: 'Always. I work with founders and small teams worldwide. Async-friendly, with scheduled calls when it helps.' },
  { q: 'What if I only need design, or only development?', a: 'That\u2019s fine. I\u2019m happy to do just one part of the process, or the whole thing end to end.' },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
  const faqRef = useReveal<HTMLDivElement>();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>One studio, <span className="italic text-gold-700">the whole craft</span>.</>}
        subtitle="Six disciplines, one pair of hands. Engage me for a single sprint or the whole journey — from first sketch to long-term growth."
      />

      {/* Services grid */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={ref} className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.title} className="group relative overflow-hidden rounded-4xl border border-forest-900/10 bg-cream/40 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/40 hover:bg-cream hover:shadow-large" style={{ opacity: 0, transform: 'translateY(28px)', animation: `fadeUp 0.7s ${0.1 + i * 0.1}s forwards` }}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-800 text-gold-500 shadow-soft transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-forest-900">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-forest-900/65">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-forest-900/70">
                      <Check className="h-4 w-4 text-gold-600" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-forest-800 transition-colors duration-300 group-hover:bg-forest-800 group-hover:text-cream">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div ref={faqRef} className="reveal">
            <SectionHeading
              eyebrow="Questions"
              title={<>Good things to <span className="italic text-gold-700">know</span></>}
            />
            <div className="mt-12 divide-y divide-forest-900/10 border-y border-forest-900/10">
              {faqs.map((f, i) => (
                <details key={f.q} className="group py-6" style={{ opacity: 0, transform: 'translateY(16px)', animation: `fadeUp 0.5s ${0.1 + i * 0.08}s forwards` }}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-display text-lg font-semibold text-forest-900">{f.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest-900/15 text-forest-900 transition-transform duration-300 group-open:rotate-45">
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-[15px] leading-relaxed text-forest-900/65">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process snapshot */}
      <section className="relative overflow-hidden bg-forest-900 py-20 text-cream">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(50% 80% at 50% 50%, rgba(204,176,57,0.15), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: '1:1', l: 'Direct access', n: 'You work with me, always' },
              { k: '4–8w', l: 'Typical timeline', n: 'From kickoff to launch' },
              { k: '0', l: 'Junior hand-offs', n: 'Every pixel is mine' },
              { k: '∞', l: 'Post-launch care', n: 'I stick around' },
            ].map((s, i) => (
              <div key={s.l} className="text-center" style={{ opacity: 0, transform: 'translateY(20px)', animation: `fadeUp 0.6s ${0.1 + i * 0.1}s forwards` }}>
                <p className="font-display text-5xl font-semibold text-gold-500">{s.k}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-cream/80">{s.l}</p>
                <p className="mt-1 text-sm text-cream/50">{s.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-4xl bg-forest-900 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-2xl font-semibold text-cream">Not sure which service you need?</h3>
              <p className="mt-1 text-cream/65">Tell me about your project and I'll point you in the right direction.</p>
            </div>
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-900 transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5">
              Ask me
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
