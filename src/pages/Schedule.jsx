import { useI18n } from "../i18n/I18nProvider";

export default function Schedule() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-[#f7f3ef] px-5 py-14 text-[#302a22] sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#806657]">
            {t("schedule.eyebrow")}
          </p>
          <h1 className="mt-4 text-4xl font-light sm:text-5xl">{t("schedule.title")}</h1>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#302a22]/62">{t("schedule.intro")}</p>
        </div>

        <p className="mx-auto mt-7 max-w-3xl rounded-2xl border border-[#806657]/15 bg-[#d1b7a7]/28 px-5 py-4 text-center text-sm font-semibold leading-6 text-[#5f493e]">
          {t("schedule.matNotice")}
        </p>

        <div className="mt-9 overflow-hidden rounded-[1.75rem] border border-[#302a22]/10 bg-white p-2 shadow-sm sm:p-4">
          <iframe
            name="frame2"
            src="https://app.punchpass.com/org/20290/classes?embed=true&color_theme=light"
            height="1200"
            width="100%"
            frameBorder="0"
            allowFullScreen
            title={t("schedule.frameTitle")}
          />
        </div>
      </div>
    </main>
  );
}
