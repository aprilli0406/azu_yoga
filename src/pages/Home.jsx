import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";

const programs = [
  {
    key: "yoga",
    image: "/images/home-yoga-hero.webp",
    imagePosition: "object-[68%_center]",
  },
  {
    key: "mat",
    image: "/images/home-mat-pilates.webp",
    imagePosition: "object-center",
  },
  {
    key: "reformer",
    image: "/images/home-reformer-pilates.webp",
    imagePosition: "object-center",
  },
];

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="overflow-hidden bg-[#f7f3ef] text-[#302a22]">
      <section className="mx-auto grid min-h-[calc(100svh-88px)] max-w-[1600px] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#806657] sm:text-sm">
              {t("home.eyebrow")}
            </p>
            <h1 className="mt-6 text-5xl font-light leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              {t("home.title")}
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#302a22]/68 sm:text-xl">
              {t("home.subtitle")}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/schedule"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#302a22] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#4a4136] focus:outline-none focus:ring-2 focus:ring-[#806657] focus:ring-offset-2"
              >
                {t("home.scheduleCta")}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link
                to="/classes"
                className="inline-flex items-center justify-center rounded-full border border-[#302a22]/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition hover:border-[#302a22] hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#806657] focus:ring-offset-2"
              >
                {t("home.classesCta")}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[480px] overflow-hidden lg:min-h-[720px]">
          <img
            src="/images/home-yoga-hero.webp"
            alt={t("home.heroAlt")}
            className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#302a22]/25 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl border border-white/25 bg-[#302a22]/75 px-5 py-4 text-white shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:min-w-80 sm:px-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#d1b7a7]">
                {t("home.heroCardEyebrow")}
              </p>
              <p className="mt-1 text-lg font-medium">{t("home.heroCardTitle")}</p>
            </div>
            <span className="h-10 w-px bg-white/20" aria-hidden="true" />
            <span className="text-sm text-white/70">{t("home.heroCardNote")}</span>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#806657]">
                {t("home.programsEyebrow")}
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-light leading-tight sm:text-5xl">
                {t("home.programsTitle")}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#302a22]/62 md:justify-self-end">
              {t("home.programsIntro")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programs.map((program, index) => (
              <article
                key={program.key}
                className="group overflow-hidden rounded-[1.75rem] border border-[#302a22]/10 bg-[#f7f3ef] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#302a22]/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={program.image}
                    alt={t(`home.${program.key}Alt`)}
                    className={`h-full w-full object-cover ${program.imagePosition} transition duration-700 group-hover:scale-[1.03]`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#302a22]/25 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#806657]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium">
                    {t(`home.${program.key}Title`)}
                  </h3>
                  <p className="mt-3 min-h-18 text-sm leading-6 text-[#302a22]/62">
                    {t(`home.${program.key}Description`)}
                  </p>
                  <Link
                    to="/classes"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#5f493e] transition group-hover:gap-3"
                  >
                    {t("home.discoverCta")}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d1b7a7] px-5 py-20 sm:px-6 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5f493e]">
            {t("home.finalEyebrow")}
          </p>
          <h2 className="mt-4 text-4xl font-light sm:text-5xl">{t("home.finalTitle")}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#302a22]/68">
            {t("home.finalIntro")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/schedule"
              className="rounded-full bg-[#302a22] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#4a4136]"
            >
              {t("home.scheduleCta")}
            </Link>
            <Link
              to="/price"
              className="rounded-full border border-[#302a22]/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition hover:border-[#302a22] hover:bg-white/20"
            >
              {t("home.pricingCta")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
