import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'Prices', href: '/prices' },
  { label: 'Contact', href: '/contact' }
];

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'WhatsApp', href: 'https://wa.me/92518482409' }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-12 pb-8">
      <div className="section-shell">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-brand-500/[0.08] p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-200">The Barber,s Chamber</p>
              <h3 className="mt-3 font-[var(--font-sora)] text-xl font-semibold leading-tight text-white sm:text-2xl md:text-3xl">
                Professional grooming in E-11, Islamabad.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Precision haircuts, clean beard work, and consistent service quality in a modern and comfortable studio.
              </p>
              <div className="mt-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <Link href="/contact" className="rounded-full bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-brand-400">
                  Book Appointment
                </Link>
                <a
                  href="https://share.google/dZQcebiwx5tLrVCDF"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-4 py-2 text-center text-sm font-semibold text-white/85 transition hover:border-brand-300/60 hover:text-white"
                >
                  Open Map
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-[var(--font-sora)] text-base font-semibold text-white">Quick Links</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-brand-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-[var(--font-sora)] text-base font-semibold text-white">Contact Details</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>Shop#13, Ground Floor, Gul Plaza, Sector E-11/2 Markaz, Islamabad</li>
                <li>Phone: (051) 8482409</li>
                <li>WhatsApp: 0518482409</li>
                <li>Email: ritz685@icloud.com</li>
                <li>Hours: 11:00 AM - 11:00 PM</li>
                {socials.map((social) => (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="transition hover:text-brand-200"
                    >
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5 text-sm text-white/55">
          <p>Copyright {new Date().getFullYear()} The Barber,s Chamber. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
