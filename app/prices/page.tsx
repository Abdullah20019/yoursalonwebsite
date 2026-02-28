import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    name: 'Hair Cut',
    price: 'PKR 500',
    description: 'Elevate your look with the perfect haircut, crafted just for you.'
  },
  {
    name: 'Shave',
    price: 'PKR 200',
    description:
      'Experience the timeless art of shaving. Our classic shave leaves your skin smooth, refreshed, and impeccably groomed.'
  },
  {
    name: 'Beard Trim',
    price: 'PKR 300',
    description:
      'Refine your look with a beard trim. Our skilled barbers sculpt and shape your beard to perfection.'
  },
  {
    name: 'Buzz Cut',
    price: 'PKR 600',
    description: 'Experience the timeless appeal of a buzz cut, redefined for the modern gentleman.'
  },
  {
    name: 'Blending',
    price: 'PKR 700',
    description:
      'Our blending technique creates a smooth transition, giving your hairstyle a polished and balanced appearance.'
  },
  {
    name: 'Hair Cut Deluxe',
    price: 'PKR 500',
    description:
      'Upgrade your style with our deluxe haircut, the ultimate grooming experience for a refined look.'
  },
  {
    name: 'Hair Wash',
    price: 'PKR 300',
    description: 'Deep cleanse and refresh your hair before or after styling for a clean finish.'
  },
  {
    name: 'Moustache Trim',
    price: 'PKR 200',
    description: 'Clean, balanced moustache shaping to sharpen your overall facial profile.'
  },
  {
    name: 'Beard Styling Deluxe',
    price: 'PKR 500',
    description: 'Detailed beard styling with line enhancement and product finish for a premium look.'
  },
  {
    name: 'Hair Color (Basic)',
    price: 'PKR 1,500',
    description: 'Natural tone correction or full basic color application tailored to your preference.'
  },
  {
    name: 'Facial Cleanup',
    price: 'PKR 1,200',
    description: 'Quick skin refresh treatment to remove dullness and restore a clean appearance.'
  },
  {
    name: 'Hair + Beard Combo',
    price: 'PKR 800',
    description:
      'A complete grooming combo with haircut and beard trim in one focused session.'
  }
];

const deals = ['/assets/deals/deal.jpg', '/assets/deals/deals.0.jpg'];

export default function PricesPage() {
  return (
    <>
      <Navbar />
      <section className="section-shell pt-32 pb-16">
        <div className="max-w-3xl space-y-5">
          <p className="inline-flex rounded-full border border-brand-400/40 bg-brand-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-200">
            Transparent Pricing
          </p>
          <h1 className="font-[var(--font-sora)] text-4xl font-semibold leading-tight text-white md:text-5xl">
            Professional grooming priced for everyday confidence.
          </h1>
          <p className="text-base text-white/75 md:text-lg">
            Final prices can vary by hair length and service detail. Share your preferred look and we will guide you to the right option.
          </p>
        </div>
      </section>

      <section className="section-shell pb-16">
        <div className="mb-6 rounded-2xl border border-brand-300/25 bg-brand-500/10 p-5">
          <p className="text-sm text-brand-100">
            All prices are in PKR. For wedding/event packages or custom combos, contact us for a tailored quote.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="group glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/40 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-[var(--font-sora)] text-xl font-semibold text-white">{service.name}</h2>
                <span className="rounded-full border border-brand-300/45 bg-brand-500/20 px-3 py-1 text-xs font-semibold tracking-wide text-brand-100">
                  {service.price}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="font-[var(--font-sora)] text-3xl font-semibold">Current Deals</h2>
          <Link href="/contact" className="rounded-full border border-brand-300/45 px-5 py-2 text-sm font-medium text-brand-100 transition hover:border-brand-200 hover:bg-brand-500/20">
            Book This Deal
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {deals.map((deal) => (
            <div key={deal} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <Image
                src={deal}
                alt="Promotional deal"
                width={900}
                height={600}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-sm text-white/85">Limited-time barber offer at The Barber,s Chamber</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
