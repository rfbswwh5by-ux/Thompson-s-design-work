import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import { supabase } from '../lib/supabase';

const projectTypes = [
  'Web Design & Build',
  'Brand & Identity',
  'E-commerce',
  'Motion & Interaction',
  'SEO & Content',
  'Something else',
];

const budgets = ['< $2k', '$2k – $5k', '$5k – $10k', '$10k+', 'Not sure yet'];

const funFacts = [
  { emoji: '☕', text: 'Powered by an unreasonable amount of coffee' },
  { emoji: '🌙', text: 'Some of my best ideas arrive at 2am' },
  { emoji: '✏️', text: 'I still sketch on paper before I touch a screen' },
  { emoji: '🌱', text: 'Every project starts with a conversation, not a contract' },
];

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  project_type: string;
  budget: string;
  message: string;
  website: string; // honeypot
}

const emptyForm: ContactForm = {
  name: '', email: '', phone: '', company: '',
  project_type: '', budget: '', message: '', website: '',
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions: block if already sending
    if (status === 'sending') return;

    // Honeypot: if filled, silently "succeed" without doing anything
    if (form.website) {
      setStatus('sent');
      setForm(emptyForm);
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and a message.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setError('');
    try {
      // Save to database
      const { error: insertError } = await supabase
        .from('contact_inquiries')
        .insert([{
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          company: form.company || null,
          project_type: form.project_type || null,
          budget: form.budget || null,
          message: form.message,
        }]);
      if (insertError) throw insertError;

      // Send email notification via Resend edge function
      const funcUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      const emailRes = await fetch(funcUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      });
      if (!emailRes.ok) {
        const errBody = await emailRes.json().catch(() => ({}));
        throw new Error(errBody.error || 'Email send failed');
      }

      setStatus('sent');
      setForm(emptyForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please email me directly at hello@thompsondesignwork.com.');
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="italic text-gold-700">make something</span> together.</>}
        subtitle="Tell me about your project. I read every message myself and reply within a day or two — no autoresponders, no contact-form voids."
      />

      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left: info */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-semibold text-forest-900">
                Reach me directly
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-forest-900/65">
                Prefer email? Or just want to know what to expect? Here's everything you need.
              </p>

              <div className="mt-8 space-y-4">
                <a href="mailto:hello@thompsondesignwork.com" className="group flex items-center gap-4 rounded-2xl border border-forest-900/10 bg-cream/50 p-4 transition-all duration-300 hover:border-gold-500/40 hover:bg-cream hover:shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-800 text-gold-500">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-forest-900/50">Email</p>
                    <p className="text-[15px] font-medium text-forest-900 group-hover:text-gold-700">hello@thompsondesignwork.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-forest-900/10 bg-cream/50 p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-800 text-gold-500">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-forest-900/50">Location</p>
                    <p className="text-[15px] font-medium text-forest-900">Remote · working worldwide</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-forest-900/10 bg-cream/50 p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-800 text-gold-500">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-forest-900/50">Response time</p>
                    <p className="text-[15px] font-medium text-forest-900">Usually within 1–2 days</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-forest-900 p-6 text-cream">
                <p className="font-display text-lg font-semibold">Currently booking</p>
                <p className="mt-1 text-sm text-cream/70">
                  I take on a handful of projects each quarter to keep the work thoughtful. If you're thinking about a project, sooner is better than later.
                </p>
              </div>

              {/* Fun facts */}
              <div className="mt-6 space-y-2">
                {funFacts.map((f, i) => (
                  <div
                    key={f.text}
                    className="flex items-center gap-3 rounded-xl bg-cream/40 px-4 py-2.5 text-sm text-forest-900/70"
                    style={{ opacity: 0, transform: 'translateX(-10px)', animation: `fadeUp 0.5s ${0.2 + i * 0.1}s forwards` }}
                  >
                    <span className="text-base">{f.emoji}</span>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              {status === 'sent' ? (
                <div className="flex h-full flex-col items-center justify-center rounded-4xl border border-forest-900/10 bg-cream/50 p-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-forest-900">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-forest-900">Message sent.</h3>
                  <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-forest-900/65">
                    Thanks for reaching out. I'll get back to you personally within a day or two. In the meantime, feel free to browse the work.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-forest-900/20 px-5 py-2.5 text-sm font-medium text-forest-900 transition-all duration-300 hover:border-forest-900/40 hover:bg-forest-800 hover:text-cream"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-4xl border border-forest-900/10 bg-cream/50 p-7 sm:p-9">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" required>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-[15px] text-forest-900 placeholder:text-forest-900/35 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-[15px] text-forest-900 placeholder:text-forest-900/35 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      />
                    </Field>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <Field label="Phone">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="Optional"
                        className="w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-[15px] text-forest-900 placeholder:text-forest-900/35 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      />
                    </Field>
                    <Field label="Company">
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Optional"
                        className="w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-[15px] text-forest-900 placeholder:text-forest-900/35 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      />
                    </Field>
                  </div>

                  <div className="mt-5">
                    <Field label="What do you need?">
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => handleChange('project_type', t)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                              form.project_type === t
                                ? 'bg-forest-800 text-cream'
                                : 'border border-forest-900/15 bg-white text-forest-900/70 hover:border-forest-900/30'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </Field>
                  </div>

                  <div className="mt-5">
                    <Field label="Budget range">
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => handleChange('budget', b)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                              form.budget === b
                                ? 'bg-forest-800 text-cream'
                                : 'border border-forest-900/15 bg-white text-forest-900/70 hover:border-forest-900/30'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </Field>
                  </div>

                  <div className="mt-5">
                    <Field label="Tell me about your project" required>
                      <textarea
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={5}
                        placeholder="What are you building, what's the goal, and what's the timeline?"
                        className="w-full resize-none rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-[15px] text-forest-900 placeholder:text-forest-900/35 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      />
                    </Field>
                  </div>

                  {/* Honeypot — hidden from real users, bots fill it in */}
                  <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
                    <label>
                      Website (leave empty)
                      <input
                        type="text"
                        value={form.website}
                        onChange={(e) => handleChange('website', e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  {status === 'error' && (
                    <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-800 px-7 py-4 text-base font-medium text-cream shadow-medium transition-all duration-300 hover:bg-forest-900 hover:shadow-large disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                  <p className="mt-4 text-center text-xs text-forest-900/45 sm:text-left">
                    Goes straight to my inbox — no middlemen, no filters.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-forest-900">
        {label}
        {required && <span className="text-gold-700"> *</span>}
      </span>
      {children}
    </label>
  );
}
