type GoogleMapSectionProps = {
  title?: string;
  subtitle?: string;
};

const MAP_EMBED_URL =
  'https://www.google.com/maps?q=Shop%2313%2C%20Ground%20Floor%2C%20Gul%20Plaza%2C%20Sector%20E-11%2F2%20Markaz%2C%20Islamabad&output=embed';

export default function GoogleMapSection({
  title = 'Find Us on Map',
  subtitle = 'Visit The Barber,s Chamber at E-11/2 Markaz, Islamabad.'
}: GoogleMapSectionProps) {
  return (
    <section className="section-shell pb-20">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.24em] text-brand-200">Location</p>
        <h2 className="mt-2 font-[var(--font-sora)] text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">{subtitle}</p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
        <iframe
          title="The Barber,s Chamber map"
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[280px] w-full sm:h-[340px] md:h-[430px]"
        />
      </div>
    </section>
  );
}
