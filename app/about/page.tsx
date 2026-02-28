import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleMapSection from '@/components/GoogleMapSection';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="section-shell pt-32 pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.24em] text-brand-200">About The Barber,s Chamber</p>
            <h1 className="font-[var(--font-sora)] text-4xl font-semibold leading-tight md:text-5xl">
              A premium local salon experience, right in the heart of E-11 Islamabad.
            </h1>
            <p className="text-white/75">
              Our journey started with one simple goal: create a men's grooming space where quality, hygiene, and
              consistency are never compromised. Every haircut and beard session is delivered with close attention to detail.
            </p>
            <p className="text-white/75">
              Whether you are preparing for office, Friday prayers, Eid, or a wedding event, our team helps you choose
              a practical style that looks sharp and is easy to maintain.
            </p>
            <p className="text-white/75">
              We proudly serve clients from E-11, F-11, G-11, and nearby sectors with professional service and a
              welcoming environment.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/assets/images/pexels-cottonbro-3998421.jpg"
              alt="Barber tools and professional setup"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <GoogleMapSection
        title="Our Studio Location"
        subtitle="The Barber,s Chamber is located at Gul Plaza, Sector E-11/2 Markaz, Islamabad."
      />
      <Footer />
    </>
  );
}
