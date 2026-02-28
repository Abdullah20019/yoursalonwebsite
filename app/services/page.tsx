import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const serviceCards = [
  {
    title: 'Precision Haircuts',
    description:
      'Tailored cuts designed for face shape, hair texture, and maintenance preference. Ideal for office and daily wear.',
    image: '/assets/images/pexels-cottonbro-3998397.jpg',
    duration: '35-45 min',
    price: 'From PKR 500'
  },
  {
    title: 'Beard Sculpting and Trim',
    description:
      'Clean outlines, shape correction, and natural blending for a sharp and balanced profile.',
    image: '/assets/images/pexels-cottonbro-3998421.jpg',
    duration: '20-30 min',
    price: 'From PKR 300'
  },
  {
    title: 'Classic Shave',
    description: 'Hot towel preparation and close shave finishing for a smooth and refreshed result.',
    image: '/assets/images/pexels-thgusstavo-1813272.jpg',
    duration: '20-25 min',
    price: 'From PKR 200'
  },
  {
    title: 'Fade and Blending',
    description:
      'Advanced fade transitions and precision blending for modern, clean, and structured hairstyles.',
    image: '/assets/images/pexels-izzet-cakalli-239176330-12464838.jpg',
    duration: '35-50 min',
    price: 'From PKR 700'
  },
  {
    title: 'Deluxe Grooming',
    description:
      'Complete grooming package with haircut, beard detailing, and finishing products for a polished look.',
    image: '/assets/images/pexels-cottonbro-3998397.jpg',
    duration: '55-65 min',
    price: 'From PKR 800'
  },
  {
    title: 'Event Styling',
    description:
      'Professional styling for weddings, formal gatherings, and special occasions with camera-ready finishing.',
    image: '/assets/images/pexels-cottonbro-3998421.jpg',
    duration: '45+ min',
    price: 'Custom Quote'
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="section-shell pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/assets/images/pexels-thgusstavo-1813272.jpg"
            alt="Professional barber service"
            width={1700}
            height={760}
            className="h-[280px] w-full object-cover sm:h-[320px] md:h-[360px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070d]/90 via-[#05070d]/70 to-transparent" />
          <div className="absolute inset-0 flex items-end p-5 sm:p-6 md:p-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-200">Services</p>
              <h1 className="font-[var(--font-sora)] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Premium grooming services with professional finishing.
              </h1>
              <p className="max-w-2xl text-sm text-white/75 sm:text-base">
                Every service is tailored to your features and lifestyle so your look remains clean, sharp, and easy to
                maintain.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-brand-300/45 hover:shadow-glow"
            >
              <div className="relative h-48 overflow-hidden sm:h-52">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1000}
                  height={700}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080e]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full border border-brand-300/40 bg-brand-500/20 px-3 py-1 text-xs font-semibold tracking-wide text-brand-100">
                  {service.duration}
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-[var(--font-sora)] text-xl font-semibold text-white sm:text-2xl">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{service.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <p className="text-sm font-medium text-brand-200">{service.price}</p>
                  <Link href="/contact" className="text-sm font-semibold text-white/90 transition hover:text-brand-200">
                    Book Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-brand-500/15 via-brand-500/5 to-white/[0.02] p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="font-[var(--font-sora)] text-2xl font-semibold text-white">Need a custom grooming package?</h3>
              <p className="mt-2 text-sm text-white/75">Share your requirement and we will recommend the best service combination.</p>
            </div>
            <Link href="/prices" className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-400">
              View Price List
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
