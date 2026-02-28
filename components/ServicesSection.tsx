'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Haircuts',
    description: 'From clean executive trims to textured modern cuts, tailored to your daily routine.',
    duration: '35-45 min',
    price: 'From PKR 500'
  },
  {
    title: 'Beard Grooming',
    description: 'Sharp outlining, natural blending, and clean detailing for a balanced profile.',
    duration: '20-30 min',
    price: 'From PKR 300'
  },
  {
    title: 'Classic Shave',
    description: 'Hot towel preparation with close finishing for a smooth and refreshed result.',
    duration: '20-25 min',
    price: 'From PKR 200'
  },
  {
    title: 'Hair Styling',
    description: 'Natural finish styling for meetings, formal events, and special occasions.',
    duration: '20 min',
    price: 'From PKR 600'
  },
  {
    title: 'Skin Cleanup',
    description: 'Quick facial cleanup to reduce dullness and improve overall presentation.',
    duration: '30 min',
    price: 'From PKR 1200'
  },
  {
    title: 'Wedding Prep',
    description: 'Complete groom styling with haircut, beard detailing, and premium finishing.',
    duration: '60+ min',
    price: 'Custom Quote'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-shell py-20 md:py-24">
      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-brand-200">Services</p>
          <h2 className="mt-3 font-[var(--font-sora)] text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Professional grooming services built for consistency, precision, and modern presentation.
          </h2>
        </div>
        <Link
          href="/services"
          className="inline-flex rounded-full border border-brand-300/45 px-5 py-2.5 text-sm font-medium text-brand-100 transition hover:bg-brand-500/20"
        >
          Explore Full Menu
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="glass relative overflow-hidden rounded-3xl p-6 sm:p-7 lg:col-span-1"
        >
          <div className="absolute -top-20 -right-14 h-44 w-44 rounded-full bg-brand-500/15 blur-2xl" />
          <p className="relative text-xs uppercase tracking-[0.2em] text-brand-200">Most Booked</p>
          <h3 className="relative mt-3 font-[var(--font-sora)] text-xl font-semibold sm:text-2xl">Signature Haircut + Beard</h3>
          <p className="relative mt-3 text-sm leading-relaxed text-white/75">
            Our signature grooming session combines a structured haircut with beard shaping for a polished, balanced look.
          </p>
          <div className="relative mt-6 space-y-2 text-sm text-white/75">
            <p>Duration: 55-65 min</p>
            <p>Starting Price: PKR 800</p>
            <p>Ideal For: Office, events, and weekly maintenance</p>
          </div>
          <Link
            href="/contact"
            className="relative mt-6 inline-flex rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            Reserve Slot
          </Link>
        </motion.article>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass group rounded-2xl p-6 transition-shadow duration-300 hover:shadow-glow"
            >
              <div className="mb-4 inline-flex rounded-full border border-brand-300/35 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100">
                {service.duration}
              </div>
              <h3 className="font-[var(--font-sora)] text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{service.description}</p>
              <div className="mt-4 border-t border-white/10 pt-3 text-sm font-medium text-brand-200">{service.price}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
