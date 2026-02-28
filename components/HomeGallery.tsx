'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const gallery = [
  {
    src: '/assets/images/pexels-cottonbro-3998421.jpg',
    alt: 'Barber using tools for detail work'
  },
  {
    src: '/assets/images/pexels-izzet-cakalli-239176330-12464838.jpg',
    alt: 'Salon station and styling setup'
  },
  {
    src: '/assets/images/pexels-thgusstavo-1813272.jpg',
    alt: 'Fresh haircut with premium finish'
  }
];

export default function HomeGallery() {
  return (
    <section className="section-shell pb-16">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.24em] text-brand-200">Inside The Shop</p>
        <h2 className="mt-3 font-[var(--font-sora)] text-3xl font-semibold leading-tight md:text-4xl">
          Real moments from the chair, naturally styled and cleanly finished.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {gallery.map((item, index) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={900}
              height={700}
              className="h-64 w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}