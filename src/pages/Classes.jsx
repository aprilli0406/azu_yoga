import { useI18n } from "../i18n/I18nProvider";

const classesData = [
  { key: "flow", image: "/images/class-yoga-flow.webp", intensity: 2 },
  { key: "vinyasa", image: "/images/class-vinyasa.webp", intensity: 3 },
  { key: "meditation", image: "/images/class-meditation.webp", intensity: 1 },
  { key: "mat", image: "/images/class-mat-pilates.webp", intensity: 2 },
  { key: "reformer", image: "/images/class-reformer.webp", intensity: 3 },
];

function IntensityMeter({ level }) {
  return (
    <span className="inline-flex items-end gap-1" aria-hidden="true">
      {[1, 2, 3].map((bar) => (
        <span
          key={bar}
          className={`w-1.5 rounded-full ${bar <= level ? "bg-[#806657]" : "bg-[#302a22]/12"}`}
          style={{ height: `${8 + bar * 3}px` }}
        />
      ))}
    </span>
  );
}

export default function Classes() {
  const { t } = useI18n();

  return (
    <main className="bg-[#f7f3ef] pb-20 text-[#302a22]">
      <section className="border-b border-[#302a22]/10 bg-[#d1b7a7]">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5f493e]">
            {t("classes.eyebrow")}
          </p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl">
            {t("classes.heading")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#302a22]/65">
            {t("classes.sub")}
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-7 px-5 sm:px-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {classesData.map((item, index) => (
          <article
            key={item.key}
            className={`group overflow-hidden rounded-[1.75rem] border border-[#302a22]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#302a22]/10 ${
              index === classesData.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#d1b7a7]/30">
              <img
                src={item.image}
                alt={t(`classes.${item.key}Alt`)}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#806657]">
                    {t(`classes.${item.key}Category`)}
                  </p>
                  <h2 className="mt-2 text-2xl font-medium">
                    {t(`classes.${item.key}Title`)}
                  </h2>
                </div>
                <span className="rounded-full bg-[#f7f3ef] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5f493e]">
                  0{index + 1}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#302a22]/62">
                {t(`classes.${item.key}Desc`)}
              </p>

              <div className="mt-6 flex items-center justify-between gap-4 border-y border-[#302a22]/10 py-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#302a22]/45">
                    {t("classes.intensityLabel")}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#5f493e]">
                    {t(`classes.${item.key}Intensity`)}
                  </p>
                </div>
                <IntensityMeter level={item.intensity} />
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#302a22]/55">
                  {t("classes.expectLabel")}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#302a22]/65">
                  {t(`classes.${item.key}Expect`)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
