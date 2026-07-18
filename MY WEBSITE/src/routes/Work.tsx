import { Link } from 'react-router-dom';
import { ArrowUpRight, Quote, ExternalLink, UtensilsCrossed } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useReveal } from '../hooks';

const featured = {
  title: "Jalisco's Mexican Restaurant",
  category: 'Restaurant · Brand & site',
  year: '2024',
  image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
  url: 'https://www.jaliscofulton.com',
  icon: UtensilsCrossed,
  blurb:
    'A warm, appetite-driven brand and website for a family-run Mexican restaurant in Fulton, Missouri — built to turn hungry visitors into seated regulars.',
  description:
    "Jalisco's came to me with great food and a dated, hard-to-update site that buried the menu and gave no sense of the room. I rebuilt the brand around the warmth of a family kitchen — a confident serif, a palette of terracotta and deep green pulled from the interior, and photography that makes the food the hero. The new site loads fast, surfaces the menu and hours immediately, and lets the owner update specials in minutes. Online orders and reservations are up, and the phone rings more on slow nights.",
  tags: ['Branding', 'Web', 'Menu CMS', 'Photography'],
  stats: [
    { k: '+62%', l: 'Online orders' },
    { k: '1.2s', l: 'Load time' },
    { k: '4.9★', l: 'Google rating' },
  ],
};

const projects = [
  {
    title: 'Maison Verde',
    category: 'Hospitality · Brand & site',
    year: '2024',
    image: 'https://images.pexels.com/photos/2028967/pexels-photo-2028967.jpeg',
    tall: true,
    blurb:
      'A serene brand and site for a boutique hotel group. I built a flexible booking experience wrapped in a calm, editorial layout that lets each property tell its own story — direct bookings are up 41% since launch.',
    tags: ['Branding', 'Web', 'Art direction'],
  },
  {
    title: 'North & Oak',
    category: 'D2C skincare · E-commerce',
    year: '2024',
    image: 'https://images.pexels.com/photos/3750145/pexels-photo-3750145.jpeg',
    tall: false,
    blurb:
      'A conversion-first storefront for a clean skincare label. A headless Shopify build with a quiz-driven product finder and a subscription flow that lifted AOV by 28% and repeat rate by a third.',
    tags: ['Shopify', 'CRO', 'Design'],
  },
  {
    title: 'Atlas Capital',
    category: 'Fintech · Platform design',
    year: '2023',
    image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg',
    tall: false,
    blurb:
      'A calm, trustworthy platform for a modern capital firm. I designed a clear, jargon-free investor portal and marketing site that turned a complex offering into something clients actually understand and trust.',
    tags: ['UI/UX', 'React', 'Strategy'],
  },
  {
    title: 'Studio Lumen',
    category: 'Architecture · Portfolio',
    year: '2023',
    image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg',
    tall: true,
    blurb:
      'A portfolio that lets the architecture speak for itself. A full-bleed, image-led case study system with quiet motion and a CMS so the studio can publish new projects without touching code.',
    tags: ['Portfolio', 'Motion', 'CMS'],
  },
  {
    title: 'Field Notes',
    category: 'Publishing · Editorial',
    year: '2023',
    image: 'https://images.pexels.com/photos/256659/pexels-photo-256659.jpeg',
    tall: false,
    blurb:
      'A reading-first editorial site for an indie publisher. Long-form typography, a distraction-free reader view, and a subscription flow that grew paid readers by 2.3× in the first six months.',
    tags: ['Editorial', 'Typography', 'Web'],
  },
  {
    title: 'Harbor Coffee',
    category: 'Hospitality · Brand & site',
    year: '2022',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    tall: false,
    blurb:
      'A warm, tactile brand for a coastal coffee roaster. From the wordmark to the packaging and a subscription-ready site, the system feels handmade — wholesale inquiries doubled within a quarter of launch.',
    tags: ['Branding', 'Packaging', 'Web'],
  },
];

const stats = [
  { k: '40+', l: 'Projects shipped' },
  { k: '10y', l: 'Years of craft' },
  { k: '38%', l: 'Avg. conversion lift' },
  { k: '100%', l: 'Made by hand' },
];

const capabilities = [
  { t: 'Brand & Identity', d: 'Logo systems, typography, color, and voice — cohesive across every touchpoint.' },
  { t: 'Web Design & Build', d: 'Custom-designed, hand-coded sites with performance and accessibility baked in.' },
  { t: 'E-commerce', d: 'Conversion-first storefronts on Shopify and headless stacks.' },
  { t: 'Motion & Interaction', d: 'Micro-interactions and scroll choreography that make a site feel alive.' },
];

export default function Work() {
  const ref = useReveal<HTMLDivElement>();
  const capRef = useReveal<HTMLDivElement>();
  const featuredRef = useReveal<HTMLDivElement>();

  return (
    <>
      <PageHero
        eyebrow="Work"
        title={<>Things I'm <span className="italic text-gold-700">proud of</span>.</>}
        subtitle="A selection of projects spanning brand, web, e-commerce, and editorial. Each one made by hand, one at a time."
      />

      {/* Stats band */}
      <section className="relative overflow-hidden bg-forest-900 py-16 text-cream">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(50% 80% at 50% 50%, rgba(204,176,57,0.15), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.l} className="text-center" style={{ opacity: 0, transform: 'translateY(20px)', animation: `fadeUp 0.6s ${0.1 + i * 0.1}s forwards` }}>
                <p className="font-display text-4xl font-semibold text-gold-500 sm:text-5xl">{s.k}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-cream/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case study — Jalisco's */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={featuredRef} className="reveal mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">Featured case study</p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-forest-900 text-balance">
              A closer look at <span className="italic text-gold-700">the work</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Image */}
            <div className="lg:col-span-7" style={{ opacity: 0, transform: 'translateY(28px)', animation: 'fadeUp 0.8s 0.15s forwards' }}>
              <div className="group relative overflow-hidden rounded-5xl bg-forest-900 shadow-large">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img src={featured.image} alt={`${featured.title} — ${featured.category}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-forest-900/10 to-transparent" />
                  <div className="absolute right-5 top-5 rounded-full glass px-3 py-1 text-xs font-medium text-forest-900 shadow-soft">{featured.year}</div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col lg:col-span-5" style={{ opacity: 0, transform: 'translateY(28px)', animation: 'fadeUp 0.8s 0.3s forwards' }}>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-800 text-gold-500 shadow-soft">
                  <featured.icon className="h-5 w-5" />
                </span>
                <p className="text-xs uppercase tracking-[0.15em] text-forest-900/50">{featured.category}</p>
              </div>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl">{featured.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-forest-900/70">{featured.blurb}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-forest-900/60">{featured.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span key={t} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-forest-800">{t}</span>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-3 gap-4 border-y border-forest-900/10 py-5">
                {featured.stats.map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-2xl font-semibold text-gold-700">{s.k}</p>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-forest-900/50">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center">
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-6 py-3.5 text-sm font-semibold text-cream shadow-medium transition-all duration-300 hover:bg-forest-900 hover:-translate-y-0.5"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-forest-800 transition-colors duration-300 hover:text-gold-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">Selected work</p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-forest-900 text-balance">
              More projects from <span className="italic text-gold-700">the studio</span>
            </h2>
          </div>
          <div ref={ref} className="reveal grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`group relative overflow-hidden rounded-5xl bg-forest-900 shadow-soft transition-all duration-700 hover:shadow-large ${p.tall ? 'sm:row-span-2' : ''}`}
                style={{ opacity: 0, transform: 'translateY(32px)', animation: `fadeUp 0.8s ${0.1 + i * 0.1}s forwards` }}
              >
                <div className={`relative overflow-hidden ${p.tall ? 'aspect-[4/5] sm:aspect-[4/5.2]' : 'aspect-[4/3]'}`}>
                  <img src={p.image} alt={`${p.title} — ${p.category}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/20 to-transparent" />
                  <div className="absolute right-5 top-5 rounded-full glass px-3 py-1 text-xs font-medium text-forest-900 shadow-soft">{p.year}</div>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="flex items-end justify-between gap-4">
                      <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
                        <p className="text-xs uppercase tracking-[0.15em] text-cream/70">{p.category}</p>
                        <h3 className="mt-1.5 font-display text-2xl font-semibold text-cream sm:text-3xl">{p.title}</h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/65">{p.blurb}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span key={t} className="rounded-full bg-cream/10 px-2.5 py-1 text-xs font-medium text-cream/80">{t}</span>
                          ))}
                        </div>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 translate-y-2 items-center justify-center rounded-full bg-gold-500 text-forest-900 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={capRef} className="reveal">
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">Capabilities</p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-forest-900 text-balance">
                What goes into <span className="italic text-gold-700">every project</span>
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((c, i) => (
                <div key={c.t} className="group rounded-3xl border border-forest-900/10 bg-cream/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-soft" style={{ opacity: 0, transform: 'translateY(20px)', animation: `fadeUp 0.6s ${0.1 + i * 0.1}s forwards` }}>
                  <span className="font-display text-4xl font-semibold text-forest-900/15 transition-colors duration-500 group-hover:text-gold-500/50">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-forest-900">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-900/65">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative rounded-4xl bg-forest-900 p-10 text-center text-cream sm:p-14" style={{ opacity: 0, transform: 'translateY(24px)', animation: 'fadeUp 0.8s 0.1s forwards' }}>
            <Quote className="mx-auto h-10 w-10 text-gold-500/60" />
            <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed text-cream sm:text-3xl">
              "Thompson got our brand in a way no agency ever did. The site feels like us — warm, considered, and quietly confident."
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-sm font-semibold text-forest-900">MV</span>
              <div className="text-left">
                <p className="text-sm font-semibold text-cream">Mara Velez</p>
                <p className="text-xs text-cream/60">Founder, Maison Verde</p>
              </div>
            </figcaption>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-4xl bg-forest-900 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-2xl font-semibold text-cream">Your project could be next.</h3>
              <p className="mt-1 text-cream/65">Let's make something worth showing off.</p>
            </div>
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-900 transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5">
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
