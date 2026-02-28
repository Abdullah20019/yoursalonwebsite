const reviews = [
  {
    name: 'Hussnain Shahid',
    rating: 5,
    text: 'No doubt the employees are very well trained and professional. They have magic in their hands. Truly recommended. I come from Jhelum just to get the hair cut and beard done. No joke.'
  },
  {
    name: 'AHAD ALI',
    rating: 5,
    text: 'Had a good experience at the shop. The barber was professional, listened to what I wanted, and delivered a clean satisfactory cut. The place was tidy and the service was on time. Would definitely consider coming back.'
  },
  {
    name: 'Jahanzaib',
    rating: 5,
    text: 'Very good and nice experience with Faiz bhai. Been coming here for more than a year and all the experiences were great and satisfactory. Good quality haircut with great prices.'
  },
  {
    name: 'Tayyab Akram',
    rating: 5,
    text: 'One of the best barbers. The person who attended me was Shahzad, super nice and polite. You get proper time and the cut is really good as well at a very good price.'
  },
  {
    name: 'N S',
    rating: 5,
    text: "Good barbers. Came from the UK to attend a wedding, and they freshened my fade very well. The team listened to what I wanted and was very courteous. I'm very picky and asked for touch-ups in certain areas, which they handled perfectly."
  },
  {
    name: 'Muhammad Baddar Imdad',
    rating: 5,
    text: "Your barber should know every trend in town, and mine does. Meet Shehzad, one of the best in town. Amazing ambience, clean instruments, and great expertise in haircuts, beard setting, hairstyles, and hair remedies. I strongly recommend Barber's Chamber."
  }
];

export default function ReviewsSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-brand-200">Client Reviews</p>
        <h2 className="mt-3 font-[var(--font-sora)] text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
          Trusted by clients across Islamabad.
        </h2>
        <a
          href="https://share.google/dZQcebiwx5tLrVCDF"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex rounded-full border border-brand-300/45 px-4 py-2 text-sm font-semibold text-brand-100 transition hover:bg-brand-500/20"
        >
          View all reviews on Google
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <article key={`${review.name}-${index}`} className="glass rounded-2xl p-5 sm:p-6">
            <p className="text-brand-200">{String.fromCharCode(9733).repeat(review.rating)}</p>
            <p className="mt-3 break-words text-sm leading-relaxed text-white/80">{review.text}</p>
            <p className="mt-4 text-sm font-medium text-white/90">{review.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
