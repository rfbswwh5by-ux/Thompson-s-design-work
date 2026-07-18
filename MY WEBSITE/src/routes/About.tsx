import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Layers, ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { useReveal } from '../hooks';

const pillars = [
  { icon: Sparkles, title: 'Designed with intent', body: 'Every pixel earns its place. I design for clarity, emotion, and conversion — never decoration for its own sake.' },
  { icon: TrendingUp, title: 'Built to grow', body: 'Beautiful is the baseline. Your site should pull its weight — turning visitors into customers, quietly and reliably.' },
  { icon: Layers, title: 'Strategy first', body: 'I start with your business, your audience, and your story — then shape the web around them, not the other way around.' },
];

const story = [
  "I'm Thompson, and I've been designing and building websites for over a decade. I started Thompson's Design Work because I kept watching good projects get diluted by layers of account managers, junior hand-offs, and committee decisions.",
  "So I went the other way. One person, end to end. You talk to the person doing the work — every email, every call, every line of code. No middlemen, no mystery, no surprises.",
  "What you get is a website that feels handcrafted, because it is. Thoughtful, fast, a little playful, and built to actually do something for your business.",
];

const values = [
  { title: 'Honesty over hype', body: "I'll tell you what I think, not what's easiest to sell. If something isn't worth doing, I'll say so." },
  { title: 'Craft over speed', body: 'Fast matters, but never at the cost of the details that make a site feel considered.' },
  { title: 'Your success over my portfolio', body: 'A pretty site that doesn\u2019t help your business is a failure. I measure my work by your outcomes.' },
];

const currently = [
  { emoji: '🎧', label: 'Listening', value: 'Lo-fi beats', note: 'On repeat while I design' },
  { emoji: '📖', label: 'Reading', value: 'Designing Design', note: 'By Kenya Hara — a slow burn' },
  { emoji: '🛠️', label: 'Building', value: 'React + Vite', note: 'My go-to stack for speed' },
  { emoji: '☕', label: 'Drinking', value: 'Pour-over coffee', note: 'Currently cup number three' },
];

export default function About() {
  const storyRef = useReveal<HTMLDivElement>();
  const valuesRef = useReveal<HTMLDivElement>();

  const tools = ['Figma', 'React', 'TypeScript', 'Tailwind', 'Vite', 'Webflow', 'Framer', 'After Effects', 'Notion'];

  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>One person. <span className="italic text-gold-700">Your whole project.</span></>}
        subtitle="A one-person studio on purpose — because the best work happens when the person you talk to is the person doing the work."
      />

      {/* Story */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={storyRef} className="reveal grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <div className="flex items-center gap-4 rounded-3xl border border-forest-900/10 bg-cream/60 p-6">
                  <img src="/ThompsonDesignWorkLogo.png" alt="Thompson's Design Work logo" className="h-14 w-14 object-contain" />
                  <div>
                    <p className="font-display text-lg font-semibold text-forest-900">Thompson</p>
                    <p className="text-sm text-forest-900/55">Designer · Developer · Founder</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-forest-900/55">
                  Based remotely. Working with founders and small teams worldwide since 2014.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">My story</p>
              <div className="space-y-5">
                {story.map((para, i) => (
                  <p key={i} className="text-lg leading-relaxed text-forest-900/75">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How I work"
            title={<>Three things I <span className="italic text-gold-700">never compromise</span> on</>}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title} className="group relative overflow-hidden rounded-4xl border border-forest-900/10 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-medium" style={{ opacity: 0, transform: 'translateY(24px)', animation: `fadeUp 0.7s ${0.1 + i * 0.12}s forwards` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-800 text-gold-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-forest-900">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-forest-900/65">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools marquee */}
      <section className="relative overflow-hidden border-y border-forest-900/10 bg-cream py-10">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {[...tools, ...tools].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl font-medium text-forest-900/35">
              {t}<span className="text-gold-500">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={valuesRef} className="reveal">
            <SectionHeading
              eyebrow="What I value"
              title={<>The principles behind <span className="italic text-gold-700">every project</span></>}
            />
            <div className="mt-14 divide-y divide-forest-900/10 border-y border-forest-900/10">
              {values.map((v, i) => (
                <div key={v.title} className="group grid gap-4 py-7 sm:grid-cols-12 sm:gap-8" style={{ opacity: 0, transform: 'translateX(-16px)', animation: `fadeUp 0.6s ${0.1 + i * 0.1}s forwards` }}>
                  <div className="sm:col-span-1 font-display text-3xl font-semibold text-forest-900/15 transition-colors duration-500 group-hover:text-gold-500/50">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-forest-900 sm:col-span-4">{v.title}</h3>
                  <p className="text-[15px] leading-relaxed text-forest-900/65 sm:col-span-7">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Currently */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Right now"
            title={<>What I'm <span className="italic text-gold-700">into</span> these days</>}
            subtitle="A little window into what's on my desk and in my head."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {currently.map((c, i) => (
              <div key={c.label} className="group rounded-3xl border border-forest-900/10 bg-cream/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-soft" style={{ opacity: 0, transform: 'translateY(20px)', animation: `fadeUp 0.6s ${0.1 + i * 0.1}s forwards` }}>
                <span className="text-3xl">{c.emoji}</span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-forest-900/45">{c.label}</p>
                <p className="mt-1 font-display text-lg font-semibold text-forest-900">{c.value}</p>
                <p className="mt-1 text-sm text-forest-900/55">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-4xl bg-forest-900 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-2xl font-semibold text-cream">Want to work together?</h3>
              <p className="mt-1 text-cream/65">I'd love to hear what you're building.</p>
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
