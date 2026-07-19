import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, MousePointerClick } from 'lucide-react';
import { useScrollProgress, useReveal } from '../hooks';
import SectionHeading from '../components/SectionHeading';

const services = [
  { icon: '✦', title: 'Brand & Identity', desc: 'Logo systems, typography, and voice that scale.' },
  { icon: '◆', title: 'Web Design & Build', desc: 'Hand-coded, fast, accessible, custom sites.' },
  { icon: '✺', title: 'Motion & Interaction', desc: 'Micro-interactions that make a site feel alive.' },
];

const projects = [
  {
    title: 'Maison Verde',
    category: 'Hospitality · Brand & site',
    image: 'https://images.pexels.com/photos/2028967/pexels-photo-2028967.jpeg',
    tall: true,
  },
  {
    title: 'North & Oak',
    category: 'D2C skincare · E-commerce',
    image: 'https://images.pexels.com/photos/3750145/pexels-photo-3750145.jpeg',
    tall: false,
  },
  {
    title: 'Atlas Capital',
    category: 'Fintech · Platform design',
    image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg',
    tall: false,
  },
  {
    title: 'Studio Lumen',
    category: 'Architecture · Portfolio',
    image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg',
    tall: true,
  },
];

export default function Home() {
  const { ref: heroRef, progress } = useScrollProgress<HTMLDivElement>();
  const aboutRef = useReveal<HTMLDivElement>();
  const servicesRef = useReveal<HTMLDivElement>();
  const workRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="top" ref={heroRef} className="relative overflow-hidden bg-cream pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(55% 45% at 82% 8%, rgba(204,176,57,0.22), transparent 60%), radial-gradient(45% 35% at 8% 92%, rgba(27,54,21,0.10), transparent 60%)',
            }}
          />
          <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-gold-300/40 blur-3xl" style={{ transform: `translateY(${-progress * 0.4}px)` }} />
          <div className="absolute -left-20 bottom-6 h-72 w-72 rounded-full bg-forest-300/40 blur-3xl" style={{ transform: `translateY(${progress * 0.3}px)` }} />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#1B3615 1px, transparent 1px), linear-gradient(90deg, #1B3615 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest-900/15 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-forest-800 shadow-soft backdrop-blur" style={{ animation: 'fadeUp 0.8s 0.05s both' }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-gold-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
                </span>
                One designer · endless detail
              </div>

              <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-tight text-forest-900 text-balance" style={{ animation: 'fadeUp 0.9s 0.15s both' }}>
                Websites with a{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-gold-700">pulse</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none" preserveAspectRatio="none">
                    <path d="M2 9C60 3 180 3 298 7" stroke="#CCB039" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
                ,<br />built by one pair of hands.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-forest-900/70 sm:text-xl" style={{ animation: 'fadeUp 0.9s 0.3s both' }}>
                Hi, I'm Thompson — a solo designer & developer who treats every
                project like it's my own. No agencies, no hand-offs, no filler.
                Just thoughtful, character-filled websites that make people stop
                and stay a while.
              </p>

              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center" style={{ animation: 'fadeUp 0.9s 0.45s both' }}>
                <Link to="/work" className="group inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-4 text-base font-medium text-cream shadow-medium transition-all duration-300 hover:bg-forest-900 hover:shadow-large hover:-translate-y-0.5">
                  See what I make
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full border border-forest-900/20 bg-white/70 px-7 py-4 text-base font-medium text-forest-900 backdrop-blur transition-all duration-300 hover:border-forest-900/40 hover:bg-white hover:-translate-y-0.5">
                  Say hello
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-forest-900/55" style={{ animation: 'fadeUp 0.9s 0.6s both' }}>
                <MousePointerClick className="h-4 w-4 text-gold-600" />
                <span>Psst — try moving your cursor. The site's a little alive.</span>
              </div>
            </div>

            {/* Studio cards — bento grid, no overlap */}
            <div className="lg:col-span-5" style={{ animation: 'fadeIn 1.2s 0.4s both' }}>
              <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-4">
                <div className="group rounded-4xl bg-forest-900 p-6 shadow-large transition-all duration-500 hover:-translate-y-1 hover:rotate-[-1deg]" style={{ animation: 'fadeUp 0.7s 0.5s both' }}>
                  <div className="flex items-center gap-2 text-cream/80">
                    <Sparkles className="h-4 w-4 text-gold-500" />
                    <span className="text-xs font-medium uppercase tracking-wider">Studio of one</span>
                  </div>
                  <p className="mt-4 font-display text-xl font-semibold leading-tight text-cream">You talk to the person doing the work. Always.</p>
                </div>
                <div className="group rounded-4xl border border-forest-900/10 bg-white p-6 shadow-medium transition-all duration-500 hover:-translate-y-1 hover:rotate-[1deg]" style={{ animation: 'fadeUp 0.7s 0.6s both' }}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-forest-900/50">Now booking</span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="mt-4 font-display text-xl font-semibold leading-tight text-forest-900">Currently taking on new projects.</p>
                </div>
                <div className="col-span-2 group rounded-3xl bg-gold-500 p-6 shadow-large transition-all duration-500 hover:-translate-y-1" style={{ animation: 'fadeUp 0.7s 0.7s both' }}>
                  <p className="font-display text-xl font-semibold leading-tight text-forest-900">Built to feel handcrafted — not templated.</p>
                  <span className="mt-3 block text-xs font-medium uppercase tracking-wider text-forest-900/70">Est. 2014 · 10 years of craft</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative mt-16 overflow-hidden border-y border-forest-900/10 bg-white/40 py-5 backdrop-blur sm:mt-20">
          <div className="flex w-max animate-marquee items-center gap-10 pr-10">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-lg font-medium text-forest-900/40">
                {item}<span className="text-gold-500">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={aboutRef} className="reveal grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                align="left"
                eyebrow="About"
                title={<>One person. Your whole project. <span className="italic text-gold-700">No middlemen.</span></>}
              />
              <p className="mt-6 text-lg leading-relaxed text-forest-900/70">
                Thompson's Design Work is a one-person studio — and that's the
                point. You work directly with the person designing, building, and
                obsessing over every detail of your site.
              </p>
              <Link to="/about" className="group mt-7 inline-flex items-center gap-2 text-base font-medium text-forest-900 transition-colors hover:text-gold-700">
                More about me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: '10y', l: 'In the craft' },
                  { k: '1:1', l: 'Direct access' },
                  { k: '0', l: 'Junior hand-offs' },
                  { k: '∞', l: 'Attention to detail' },
                ].map((s, i) => (
                  <div key={s.l} className="rounded-3xl border border-forest-900/10 bg-cream/50 p-6" style={{ opacity: 0, transform: 'translateY(20px)', animation: `fadeUp 0.6s ${0.1 + i * 0.1}s forwards` }}>
                    <p className="font-display text-4xl font-semibold text-forest-900">{s.k}</p>
                    <p className="mt-1 text-sm text-forest-900/60">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CURRENTLY STRIP ===== */}
      <section className="relative overflow-hidden bg-forest-900 py-14 text-cream">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(50% 80% at 50% 50%, rgba(204,176,57,0.15), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">Currently</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-cream/80">
              <span>🎧 Listening to <em className="text-gold-500 not-italic font-medium">lo-fi beats</em></span>
              <span>📖 Reading <em className="text-gold-500 not-italic font-medium">"Designing Design"</em></span>
              <span>🛠️ Building with <em className="text-gold-500 not-italic font-medium">React + Vite</em></span>
              <span>☕ On cup <em className="text-gold-500 not-italic font-medium">number 3</em></span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES TEASER ===== */}
      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={servicesRef} className="reveal">
            <SectionHeading
              eyebrow="Services"
              title={<>One studio, <span className="italic text-gold-700">the whole craft</span>.</>}
              subtitle="A taste of what I do — from first sketch to long-term growth."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {services.map((s, i) => (
                <div key={s.title} className="group rounded-4xl border border-forest-900/10 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-large" style={{ opacity: 0, transform: 'translateY(24px)', animation: `fadeUp 0.7s ${0.1 + i * 0.1}s forwards` }}>
                  <span className="text-3xl text-gold-600">{s.icon}</span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-forest-900">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-forest-900/65">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/services" className="group inline-flex items-center gap-2 rounded-full border border-forest-900/20 bg-white px-6 py-3 text-sm font-medium text-forest-900 transition-all duration-300 hover:border-forest-900/40 hover:bg-forest-800 hover:text-cream">
                See all services
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORK TEASER ===== */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={workRef} className="reveal">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                align="left"
                eyebrow="Selected work"
                title={<>Things I'm <span className="italic text-gold-700">proud of</span>.</>}
              />
              <Link to="/work" className="group inline-flex items-center gap-2 rounded-full border border-forest-900/20 px-5 py-2.5 text-sm font-medium text-forest-900 transition-all duration-300 hover:border-forest-900/40 hover:bg-forest-800 hover:text-cream">
                View all
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {projects.map((p, i) => (
                <article key={p.title} className="group relative overflow-hidden rounded-5xl bg-forest-900 shadow-soft transition-all duration-700 hover:shadow-large" style={{ opacity: 0, transform: 'translateY(28px)', animation: `fadeUp 0.8s ${0.1 + i * 0.12}s forwards` }}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={p.image} alt={`${p.title} — ${p.category}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                      <p className="text-xs uppercase tracking-[0.15em] text-cream/70">{p.category}</p>
                      <h3 className="mt-1.5 font-display text-2xl font-semibold text-cream sm:text-3xl">{p.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY QUOTE ===== */}
      <section className="relative overflow-hidden bg-forest-900 py-24 text-cream sm:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(204,176,57,0.15), transparent 60%)' }} />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <span className="font-display text-7xl leading-none text-gold-500/30">"</span>
            <blockquote className="-mt-6 font-display text-[clamp(1.6rem,4vw,2.75rem)] font-medium leading-[1.2] tracking-tight text-cream text-balance">
              A website shouldn't just look good. It should make you feel
              <span className="italic text-gold-500"> something</span> — and
              quietly do its job while you're feeling it.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <img src="/ThompsonDesignWorkLogo.png" alt="TD" className="h-8 w-8 object-contain" />
              <span className="text-sm text-cream/60">Thompson · Designer & Developer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kind words"
            title={<>What clients <span className="italic text-gold-700">say</span> after launch</>}
            subtitle="The work speaks, but so do the people I've made it for."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={t.name} className="group flex flex-col rounded-4xl border border-forest-900/10 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-medium" style={{ opacity: 0, transform: 'translateY(24px)', animation: `fadeUp 0.7s ${0.1 + i * 0.1}s forwards` }}>
                <span className="font-display text-5xl leading-none text-gold-500/40">“</span>
                <blockquote className="-mt-3 flex-1 text-[15px] leading-relaxed text-forest-900/75">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-forest-900/10 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-800 text-sm font-semibold text-gold-500">{t.initials}</span>
                  <div>
                    <p className="text-sm font-semibold text-forest-900">{t.name}</p>
                    <p className="text-xs text-forest-900/55">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={ctaRef} className="reveal relative overflow-hidden rounded-6xl bg-forest-900 px-7 py-16 text-center shadow-large sm:px-16 sm:py-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(50% 50% at 50% 0%, rgba(204,176,57,0.25), transparent 60%)' }} />
              <div className="absolute left-10 top-10 h-24 w-24 animate-float rounded-full bg-gold-500/20 blur-2xl" />
              <div className="absolute bottom-12 right-16 h-32 w-32 animate-float-slow rounded-full bg-gold-400/15 blur-3xl" style={{ animationDelay: '1.5s' }} />
            </div>
            <div className="relative mx-auto max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-500 backdrop-blur">
                Let's build something
              </div>
              <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-tight text-cream text-balance">
                Got an idea? <span className="italic text-gold-500">Let's make it real</span>.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
                Tell me where you want to go. I'll tell you honestly how I'd get
                you there — and whether I'm the right person for the job.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-semibold text-forest-900 shadow-glow transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5">
                  hello@thompsondesignwork.com
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-base font-medium text-cream transition-all duration-300 hover:border-cream/50 hover:bg-cream/5">
                  See the work first
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const testimonials = [
  { initials: 'MV', name: 'Mara Velez', role: 'Founder, Maison Verde', quote: 'Thompson got our brand in a way no agency ever did. The site feels like us — warm, considered, and quietly confident.' },
  { initials: 'JK', name: 'Jordan Kim', role: 'CEO, North & Oak', quote: 'Our conversion rate jumped 38% after the redesign. More than that, it finally feels like a brand people remember.' },
  { initials: 'RP', name: 'Ravi Patel', role: 'Partner, Atlas Capital', quote: 'Trust is everything in finance. Thompson built a site that makes our clients feel it the moment they land.' },
];

const marquee = ['Brand & Identity', 'Web Design', 'Art Direction', 'Development', 'Motion', 'SEO', 'E-commerce', 'Handcrafted'];
