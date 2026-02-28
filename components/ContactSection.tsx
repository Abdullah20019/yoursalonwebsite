'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell py-16 sm:py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-brand-200">Contact</p>
          <h2 className="font-[var(--font-sora)] text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Book your session or ask for a custom package.
          </h2>
          <p className="text-white/75">
            Walk-ins are welcome, but appointments are recommended for your preferred slot.
          </p>
          <div className="space-y-2 text-sm text-white/85">
            <p>Shop#13, Ground Floor, Gul Plaza, Sector E-11/2 Markaz, SCHS, Islamabad, Pakistan, 44000</p>
            <p>Phone: (051) 8482409</p>
            <p>Email: ritz685@icloud.com</p>
            <p>WhatsApp: 0518482409</p>
            <a href="https://share.google/dZQcebiwx5tLrVCDF" target="_blank" rel="noreferrer" className="inline-block text-brand-200 transition hover:text-brand-100">
              Open Location in Maps
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass space-y-4 rounded-2xl p-5 sm:p-6"
        >
          <div>
            <label className="mb-2 block text-sm text-white/80" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand-300 focus:bg-brand-500/5"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/80" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="0312-1234567"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand-300 focus:bg-brand-500/5"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/80" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us the service you need"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand-300 focus:bg-brand-500/5"
            />
          </div>
          <button type="button" className="w-full rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400 hover:shadow-glow">
            Send Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}
