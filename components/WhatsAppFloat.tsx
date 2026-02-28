export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/92518482409"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-5 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6"
    >
      <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-white">
          <path d="M20.52 3.48A11.78 11.78 0 0012.04 0C5.49 0 .16 5.33.16 11.88c0 2.1.55 4.15 1.59 5.95L0 24l6.37-1.67a11.83 11.83 0 005.67 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.41-8.42zM12.05 21.8h-.01a9.9 9.9 0 01-5.05-1.39l-.36-.21-3.78.99 1.01-3.68-.24-.38a9.88 9.88 0 01-1.52-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 012.9 7c0 5.45-4.44 9.89-9.89 9.89zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.88 8.88 0 01-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.58-.91-2.17-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.08-.79.37-.27.3-1.03 1-1.03 2.43 0 1.42 1.05 2.8 1.2 2.99.15.2 2.06 3.14 4.99 4.4.7.3 1.25.48 1.67.61.7.22 1.35.19 1.85.12.56-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.56-.35z" />
        </svg>
      </span>
      <span>Contact Us</span>
    </a>
  );
}
