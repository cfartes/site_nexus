import { buildWhatsappUrl } from "@/lib/site-config"

export function WhatsappFloatButton() {
  return (
    <a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o time comercial no WhatsApp"
      className="group fixed bottom-4 right-4 z-40 flex size-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(37,211,102,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-6 sm:right-6 sm:size-14"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping motion-reduce:hidden" aria-hidden="true" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="relative size-5 sm:size-7">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.14 8.14 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24a8.19 8.19 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.23 8.24zm4.51-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.24-.65.8-.8.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.5-.41-.43-.57-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.06 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.18-.07-.11-.24-.17-.49-.29z" />
      </svg>
    </a>
  )
}
