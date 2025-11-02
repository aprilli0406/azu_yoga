// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black/60 backdrop-blur text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* Location */}
        <div>
          <h3 className="text-xl font-semibold tracking-wide">Azu Studio</h3>
          <p className="mt-4 text-white/80 leading-relaxed">
            5173 Côte-des-Neiges #4<br />Montréal, QC H3T 1Y1
          </p>
          <a
            href="https://maps.google.com/?q=5173+Cote-des-Neiges+Montreal"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-5 rounded bg-[#d1b7a7] px-4 py-2 text-black text-sm font-medium hover:opacity-90 transition"
          >
            {/* pin icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
            </svg>
            Directions
          </a>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <div>
            <h4 className="uppercase tracking-wide text-white/70">email us</h4>
            <a
              href="mailto:hello@azustudio.com"
              className="block mt-2 text-white/90 hover:text-[#d1b7a7] transition"
            >
              hello@azustudio.com
            </a>
          </div>
          
        </div>

        {/* Social icons */}
        <div>
          <h4 className="uppercase tracking-wide text-white/70">follow us</h4>
          <div className="mt-4 flex items-center gap-4">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded bg-white/10 hover:bg-[#d1b7a7]/30 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-white"
                aria-hidden="true"
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.3-1-.6-1.5-1.1-.5-.5-.8-.9-1.1-1.5-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.2 0-3.6 0-4.8.1-1 0-1.6.2-2 .3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.3 1-.3 2-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c0 1 .2 1.6.3 2 .2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1 1 .3 2 .3 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c1 0 1.6-.2 2-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.3-1 .3-2 .1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c0-1-.2-1.6-.3-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.1-1-.3-2-.3-1.2-.1-1.6-.1-4.8-.1Zm0 3.1a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6Zm0 2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm6-2.7a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0Z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded bg-white/10 hover:bg-[#d1b7a7]/30 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-white"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="p-2 rounded bg-white/10 hover:bg-[#d1b7a7]/30 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-white"
                aria-hidden="true"
              >
                <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.3 32.3 0 0 0 0 12a32.3 32.3 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c1.6.5 9.3.5 9.3.5s7.7 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2c.3-1.9.5-3.8.5-5.8s-.2-3.9-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p className="text-white/80">
            &copy; {year} Azu Yoga & Pilates
          </p>
          <a
            href="#"
            className="mt-3 inline-block text-white/70 hover:text-[#d1b7a7] transition"
          >
            site credits
          </a>
        </div>
      </div>
    </footer>
  );
}
