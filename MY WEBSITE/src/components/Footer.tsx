import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Mail, Instagram, Linkedin, Dribbble } from 'lucide-react';

const nav = {
  Studio: [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Work', to: '/work' },
    { label: 'Process', to: '/process' },
    { label: 'Contact', to: '/contact' },
  ],
  Connect: [
    { label: 'Start a project', to: '/contact' },
    { label: 'Say hello', to: '/contact' },
  ],
};

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Dribbble, label: 'Dribbble', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-900 text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(50% 60% at 50% 100%, rgba(204,176,57,0.12), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-soft transition-transform duration-500 group-hover:rotate-6">
                <img src="/ThompsonDesignWorkLogo.png" alt="Thompson's Design Work logo" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <span className="block font-display text-base font-semibold leading-none tracking-tight">
                  Thompson's Design Work
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-cream/50">
                  Creative Studio · Studio of One
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream/65">
              I'm Thompson — a solo designer & developer crafting handcrafted
              websites that help ambitious brands grow. No middlemen, no
              templates, just thoughtful work, one project at a time.
            </p>
            <div className="mt-7 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500 hover:bg-gold-500 hover:text-forest-900"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {Object.entries(nav).map(([heading, items]) => (
              <div key={heading}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                  {heading}
                </p>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className="group inline-flex items-center gap-1 text-[15px] text-cream/70 transition-colors hover:text-cream"
                      >
                        {item.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                Contact
              </p>
              <ul className="mt-5 space-y-3 text-[15px] text-cream/70">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  <span>Remote · working worldwide</span>
                </li>
                <li>
                  <a href="mailto:hello@thompsondesignwork.com" className="flex items-center gap-2 transition-colors hover:text-cream">
                    <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                    hello@thompsondesignwork.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/10 py-7 text-sm text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Thompson's Design Work. Made by one person, with care.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cream">Privacy</a>
            <a href="#" className="transition-colors hover:text-cream">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
