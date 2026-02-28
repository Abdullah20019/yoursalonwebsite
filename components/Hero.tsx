'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden border-b border-white/10 pt-24">
      <video
        className="pointer-events-none absolute inset-0 -z-20 hidden h-full w-full object-cover opacity-25 sm:block"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/assets/header/header.png"
      >
        <source src="/assets/video/4178109-hd_1920_1080_30fps_2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#05070d]/60 via-[#05070d]/70 to-[#05070d]" />
      <div className="absolute inset-0 -z-10 bg-radialLines" />

      <div className="section-shell py-16 sm:py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex rounded-full border border-brand-400/40 bg-brand-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-100"
        >
          Islamabad Premium Barber Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mt-6 max-w-4xl font-[var(--font-sora)] text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
        >
          Precision cuts, elevated style, and a <span className="title-gradient">professional grooming experience.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mt-6 max-w-2xl text-base text-white/75 sm:text-lg"
        >
          The Barber,s Chamber combines modern trends with classic craft so you walk out camera-ready, meeting-ready, and confident.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <Link href="/contact" className="w-full rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-400 hover:shadow-glow sm:w-auto">
            Book Appointment
          </Link>
          <Link href="/prices" className="w-full rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white/90 transition hover:border-brand-300/60 hover:bg-brand-500/10 sm:w-auto">
            View Prices
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
