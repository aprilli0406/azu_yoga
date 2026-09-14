import { useI18n } from "../i18n/I18nProvider";

const ADDRESS = "5173 Chem. de la Côte-des-Neiges #4, Montréal, QC H3T 1Y1";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Azu+Yoga+%26+Pilates%2C+5173+Chem.+de+la+C%C3%B4te-des-Neiges+%234%2C+Montr%C3%A9al%2C+QC+H3T+1Y1";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#302a22] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold tracking-wide">Azu Yoga & Pilates</h3>
          <p className="mt-4 leading-relaxed text-white/75">{ADDRESS}</p>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#d1b7a7] px-4 py-2 text-sm font-medium text-[#302a22] transition hover:bg-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
            </svg>
            {t("footer.directions")}
          </a>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.16em] text-white/55">{t("footer.emailUs")}</h4>
          <a href="mailto:info@azustudio.ca" className="mt-3 block text-white/85 transition hover:text-[#d1b7a7]">
            info@azustudio.ca
          </a>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.16em] text-white/55">{t("footer.followUs")}</h4>
          <a
            href="https://www.instagram.com/azu_yoga_pilates/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="mt-4 inline-flex rounded-full bg-white/10 p-3 transition hover:bg-[#d1b7a7]/30"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.3-1-.6-1.5-1.1-.5-.5-.8-.9-1.1-1.5-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.4-.2 1-.3 2-.3 1.2-.1 1.6-.1 4.8-.1Zm0 1.8c-3.2 0-3.6 0-4.8.1-1 0-1.6.2-2 .3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.3 1-.3 2-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c0 1 .2 1.6.3 2 .2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1 1 .3 2 .3 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c1 0 1.6-.2 2-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.3-1 .3-2 .1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c0-1-.2-1.6-.3-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.1-1-.3-2-.3-1.2-.1-1.6-.1-4.8-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.1-2.8a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
            </svg>
          </a>
        </div>

        <div className="md:text-right">
          <p className="text-white/75">&copy; {year} Azu Yoga & Pilates</p>
          <span className="mt-3 inline-block text-sm text-white/45">{t("footer.credits")}</span>
        </div>
      </div>
    </footer>
  );
}
