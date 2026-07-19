import { Link } from 'react-router-dom';
import {
  MessagesSquare, PencilRuler, Code2, Rocket, ArrowUpRight, Check,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { useReveal } from '../hooks';

const steps = [
  {
    n: '01',
    icon: MessagesSquare,
    title: 'We talk',
    body: "A real conversation about your business, your goals, and what's not working. No forms, no funnels — just a chat. You'll leave with clarity, even if we don't end up working together.",
    duration: '1–2 days',
    deliverables: ['A clear project brief', 'Scope and timeline estimate', 'A no-pressure proposal'],
  },
  {
    n: '02',
    icon: PencilRuler,
    title: 'I design',
    body: "Strategy, then design. I sketch, prototype, and refine until every screen feels inevitable. You see the work early and often — your feedback shapes it.",
    duration: '1–3 weeks',
    deliverables: ['Sitemap and wireframes', 'High-fidelity mockups', 'A clickable prototype'],
  },
  {
    n: '03',
    icon: Code2,
    title: 'I build',
    body: "Hand-coded, fast, accessible, and easy for you to update. No bloated page builders, no mystery plugins — just clean code I'm proud to put my name on.",
    duration: '2–4 weeks',
    deliverables: ['A responsive, fast site', 'CMS integration', 'Cross-browser QA'],
  },
  {
    n: '04',
    icon: Rocket,
    title: 'We launch',
    body: "We ship, we watch, we refine. Launch day is a beginning, not an end. I stick around to help your site keep earning its keep.",
    duration: 'Ongoing',
    deliverables: ['A smooth, on-time launch', 'Analytics and tracking', '30 days of support'],
  },
];

const whatYouGet = [
  'A dedicated partner — me, not a rotating cast',
  'Weekly check-ins and async updates',
  'Source files and clean, documented code',
  'A site you can edit yourself',
  'Post-launch support and tweaks',
  'Honest advice at every step',
];

const principles = [
  { t: 'Transparency', d: 'You see the work as it happens. No black boxes, no surprise reveals.' },
  { t: 'Feedback loops', d: 'Early and often. Your input shapes the work — that\'s the point.' },
  { t: 'No hand-offs', d: 'The person you talk to is the person who designs and builds.' },
  { t: 'Built to last', d: 'Clean code and thoughtful systems that won\'t rot in a year.' },
];

export default function Process() {
  const ref = useReveal<HTMLDivElement>();
  const getRef = useReveal<HTMLDivElement>();
  const principlesRef = useReveal<HTMLDivElement>();

  return (
    <>
      <PageHero
        eyebrow="Process"
        title={<>A simple path from <span className="italic text-gold-700">idea to live</span>.</>}
        subtitle="No black boxes, no surprise invoices. Here's exactly what working together looks like, step by step."
      />

      {/* Steps timeline */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={ref} className="reveal">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s.n} className="group relative flex flex-col" style={{ opacity: 0, transform: 'translateY(28px)', animation: `fadeUp 0.7s ${0.1 + i * 0.12}s forwards` }}>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-forest-900/10 bg-cream/50 shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:border-gold-500/50 group-hover:shadow-medium">
                      <s.icon className="h-7 w-7 text-forest-800 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <span className="font-display text-4xl font-semibold text-forest-900/15 transition-colors duration-500 group-hover:text-gold-500/40">{s.n}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-forest-900">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-forest-900/65">{s.body}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-forest-900/5 px-3 py-1 text-xs font-medium text-forest-800">{s.duration}</p>
                  <ul className="mt-5 space-y-2 border-t border-forest-900/10 pt-5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-forest-900/70">
                        <Check className="h-4 w-4 shrink-0 text-gold-600" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={principlesRef} className="reveal">
            <SectionHeading
              eyebrow="Principles"
              title={<>How the work <span className="italic text-gold-700">actually gets done</span></>}
              subtitle="Four things that shape every project, from kickoff to launch and beyond."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p, i) => (
                <div key={p.t} className="group rounded-3xl border border-forest-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-soft" style={{ opacity: 0, transform: 'translateY(20px)', animation: `fadeUp 0.6s ${0.1 + i * 0.1}s forwards` }}>
                  <span className="font-display text-4xl font-semibold text-forest-900/15 transition-colors duration-500 group-hover:text-gold-500/50">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-forest-900">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-900/65">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={getRef} className="reveal grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                eyebrow="What you get"
                title={<>More than a website — <span className="italic text-gold-700">a partnership</span></>}
                subtitle="Working with a solo studio means you get a different kind of relationship. Here's what that looks like in practice."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {whatYouGet.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-forest-900/10 bg-cream/50 p-4" style={{ opacity: 0, transform: 'translateY(16px)', animation: `fadeUp 0.5s ${0.1 + i * 0.08}s forwards` }}>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-semibold text-forest-900">✓</span>
                    <span className="text-[15px] leading-relaxed text-forest-900/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline summary band */}
      <section className="relative overflow-hidden bg-forest-900 py-16 text-cream">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(50% 80% at 50% 50%, rgba(204,176,57,0.15), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { k: '4–8w', l: 'Typical timeline' },
              { k: '1:1', l: 'Direct access' },
              { k: '0', l: 'Junior hand-offs' },
              { k: '30d', l: 'Post-launch support' },
            ].map((s, i) => (
              <div key={s.l} className="text-center" style={{ opacity: 0, transform: 'translateY(20px)', animation: `fadeUp 0.6s ${0.1 + i * 0.1}s forwards` }}>
                <p className="font-display text-4xl font-semibold text-gold-500 sm:text-5xl">{s.k}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-cream/70">{s.l}</p>
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
              <h3 className="font-display text-2xl font-semibold text-cream">Ready to start?</h3>
              <p className="mt-1 text-cream/65">The first step is just a conversation.</p>
            </div>
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-900 transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5">
              Let's talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
