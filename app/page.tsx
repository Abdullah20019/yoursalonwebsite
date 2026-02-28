import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HomeGallery from '@/components/HomeGallery';
import ReviewsSection from '@/components/ReviewsSection';
import GoogleMapSection from '@/components/GoogleMapSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <HomeGallery />
      <ReviewsSection />
      <GoogleMapSection
        title="Visit Our Shop in E-11/2 Markaz"
        subtitle="Easy access location with convenient parking and a comfortable in-shop experience."
      />
      <ContactSection />
      <Footer />
    </>
  );
}
