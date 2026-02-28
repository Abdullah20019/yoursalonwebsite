import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const galleryItems = [
  { src: '/assets/gallery/1.jpg', alt: 'Barber service photo 1' },
  { src: '/assets/gallery/2.jpg', alt: 'Barber service photo 2' },
  { src: '/assets/gallery/3.jpg', alt: 'Barber service photo 3' },
  { src: '/assets/gallery/4.jpg', alt: 'Barber service photo 4' },
  { src: '/assets/gallery/5.jpg', alt: 'Barber service photo 5' },
  { src: '/assets/gallery/6.jpg', alt: 'Barber service photo 6' },
  { src: '/assets/gallery/7.jpg', alt: 'Barber service photo 7' },
  { src: '/assets/images/pexels-cottonbro-3998397.jpg', alt: 'Pexels haircut close-up' },
  { src: '/assets/images/pexels-cottonbro-3998421.jpg', alt: 'Pexels beard styling' },
  { src: '/assets/images/pexels-izzet-cakalli-239176330-12464838.jpg', alt: 'Pexels salon station' },
  { src: '/assets/images/pexels-thgusstavo-1813272.jpg', alt: 'Pexels professional shave' }
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <section className="section-shell pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs uppercase tracking-[0.24em] text-brand-200">Gallery</p>
          <h1 className="font-[var(--font-sora)] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Our Work and Studio Moments
          </h1>
          <p className="text-sm text-white/75 sm:text-base">
            A curated collection from The Barber,s Chamber, including your uploaded gallery and additional Pexels visuals
            for a complete professional showcase.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {galleryItems.map((item, index) => {
            const isLarge = index % 5 === 0;
            return (
              <div
                key={`${item.src}-${index}`}
                className={`group overflow-hidden rounded-2xl border border-white/10 bg-black/25 ${
                  isLarge ? 'sm:col-span-2 lg:col-span-8' : 'lg:col-span-4'
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1400}
                  height={1000}
                  className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                    isLarge ? 'h-72 sm:h-80 md:h-96' : 'h-64 sm:h-72'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
