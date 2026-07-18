import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrolled } from '../hooks';

const links = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Process', to: '/process' },
];

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
        <nav
          className={`mx-4 flex max-w-7xl items-center justify-between px-4 py-2.5 transition-all duration-500 sm:mx-6 lg:mx-auto ${
            scrolled
              ? 'rounded-2xl glass shadow-soft border border-forest-900/10'
              : 'rounded-2xl bg-transparent'
          }`}
        >
          <Link to="/" className="group flex items-center gap-3" aria-label="Thompson's Design Work — home">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${scrolled ? 'bg-white shadow-soft' : 'bg-white/90'}`}>
              <img src="/ThompsonDesignWorkLogo.png" alt="TD logo" className="h-7 w-7 object-contain" />
            </div>
            <div className="hidden sm:block">
              <span className="block font-display text-[13px] font-semibold leading-none tracking-tight text-forest-900">
                Thompson's Design Work
              </span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-forest-900/50">
                Creative Studio
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`rounded-xl px-4 py-2 text-[13px] font-medium transition-colors hover:bg-forest-900/5 ${
                    active ? 'text-forest-900 bg-forest-900/5' : 'text-forest-900/70 hover:text-forest-900'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="group hidden items-center gap-1.5 rounded-xl bg-forest-800 px-4 py-2.5 text-[13px] font-medium text-cream shadow-soft transition-all duration-300 hover:bg-forest-900 hover:shadow-medium hover:-translate-y-px sm:flex"
            >
              Let's talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-800 text-cream shadow-soft md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-[60] md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div
          className={`absolute inset-0 bg-forest-900/50 backdrop-blur-md transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <div className={`absolute right-0 top-0 flex h-full w-[85%] max-w-xs flex-col bg-cream px-7 py-7 shadow-large transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <img src="/ThompsonDesignWorkLogo.png" alt="TD" className="h-8 w-8 object-contain" />
            <button onClick={() => setOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-800 text-cream" aria-label="Close menu">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-10 flex flex-col">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex items-center justify-between border-b border-forest-900/10 py-5 font-display text-2xl font-semibold text-forest-900 transition-colors hover:text-gold-700"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(10px)',
                  transition: `opacity 0.4s ease ${i * 70 + 100}ms, transform 0.4s ease ${i * 70 + 100}ms`,
                }}
              >
                {l.label}
                <ArrowUpRight className="h-4 w-4 text-gold-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-auto flex items-center justify-center gap-2 rounded-2xl bg-forest-800 py-4 text-sm font-medium text-cream"
          >
            hello@thompsondesignwork.com
          </Link>
        </div>
      </div>
    </>
  );
}
