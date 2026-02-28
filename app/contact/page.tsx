import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import GoogleMapSection from '@/components/GoogleMapSection';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="section-shell pt-32">
        <div className="max-w-3xl space-y-5 pb-6">
          <p className="text-xs uppercase tracking-[0.24em] text-brand-200">Contact Us</p>
          <h1 className="font-[var(--font-sora)] text-4xl font-semibold leading-tight md:text-5xl">
            Reach out for appointments, timings, and custom grooming packages.
          </h1>
          <p className="text-white/75">
            If you are planning for a busy weekend or event day, message us early and we will reserve your preferred slot.
          </p>
        </div>
      </section>
      <ContactSection />
      <GoogleMapSection
        title="Get Directions"
        subtitle="Use the map below for direct navigation to The Barber,s Chamber in Islamabad."
      />
      <Footer />
    </>
  );
}
