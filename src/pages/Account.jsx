import { useI18n } from "../i18n/I18nProvider";

export default function Account() {
  const { t } = useI18n();

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f7f3ef] px-5 py-16 text-[#302a22]">
      <section className="w-full max-w-2xl rounded-[2rem] border border-[#302a22]/10 bg-white px-6 py-14 text-center shadow-sm sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#806657]">{t("account.eyebrow")}</p>
        <h1 className="mt-4 text-4xl font-light sm:text-5xl">{t("account.title")}</h1>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-[#302a22]/62">{t("account.intro")}</p>
        <a
          href="https://app.punchpass.com/account/sign_in"
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex rounded-full bg-[#302a22] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#4a4136]"
        >
          {t("account.login")}
        </a>
      </section>
    </main>
  );
}
