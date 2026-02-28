'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070a11]/75 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo/logo.jpg"
            alt="The Barber,s Chamber logo"
            width={44}
            height={44}
            className="rounded-full border border-white/20 object-cover"
          />
          <span className="max-w-[190px] truncate font-[var(--font-sora)] text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 sm:max-w-none sm:text-base sm:tracking-[0.18em]">
            The Barber,s Chamber
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-brand-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/prices"
            className="rounded-full border border-brand-300/45 px-4 py-2 text-sm font-medium text-brand-100 transition hover:bg-brand-500/20"
          >
            Prices
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/90 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6L18 18M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7H20M4 12H20M4 17H20" />
            </svg>
          )}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="section-shell border-t border-white/10 pb-5 md:hidden"
        >
          <div className="flex flex-col gap-3 pt-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white/5 px-4 py-2 text-sm text-white/85"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/prices"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-brand-500/15 px-4 py-2 text-sm text-brand-100"
            >
              Prices
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
