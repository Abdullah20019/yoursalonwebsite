'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-brand-200">About Us</p>
          <h2 className="font-[var(--font-sora)] text-3xl font-semibold leading-tight md:text-4xl">
            A trusted neighborhood barbershop in E-11 Markaz for clean, sharp, and reliable grooming.
          </h2>
          <p className="text-white/75">
            The Barber,s Chamber blends modern styles with classic barbering standards. Whether you need a quick office
            look or event-ready grooming, our team recommends practical styles based on your face shape and hair texture.
          </p>
          <p className="text-white/75">
            Our focus is simple: clean work, respectful service, and consistent results on every visit.
          </p>
          <Link
            href="/about"
            className="inline-flex rounded-full border border-brand-300/45 px-5 py-2.5 text-sm font-medium text-brand-100 transition hover:bg-brand-500/20"
          >
            Read Full Story
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
          <Image
            src="/assets/images/pexels-cottonbro-3998397.jpg"
            alt="Professional barber haircut session"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/70 to-transparent p-6">
            <p className="text-sm text-white/85">Professional cuts and beard work for daily confidence.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
