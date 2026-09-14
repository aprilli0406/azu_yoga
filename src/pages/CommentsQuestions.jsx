import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

const PUBLIC_CONTACT_EMAIL = "info@azustudio.ca";
const MESSAGE_EMAIL = ["aprilli199500", "gmail.com"].join("@");
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${MESSAGE_EMAIL}`;

export default function CommentsQuestions() {
  const { t } = useI18n();
  const [status, setStatus] = useState("idle");
  const faqs = t("contact.faqs");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const topic = form.get("topic");
    const message = form.get("message");
    const subject = `${t("contact.emailSubject")} — ${topic}`;

    setStatus("submitting");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          topic,
          message,
          _subject: subject,
          _template: "table",
          _honey: form.get("company"),
          _url: window.location.href,
        }),
      });
      const result = await response.json();

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || "Form submission failed");
      }

      formElement.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#302a22]/20 bg-white px-4 py-3 text-[#302a22] outline-none transition placeholder:text-[#302a22]/40 focus:border-[#806657] focus:ring-2 focus:ring-[#d1b7a7]/50";

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f8f3ef]/95 text-[#302a22]">
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-20">
        <div className="grid overflow-hidden rounded-[2rem] border border-[#302a22]/10 bg-white shadow-xl shadow-[#302a22]/10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-[#302a22] px-7 py-10 text-white sm:px-10 sm:py-12">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#d1b7a7]/20"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#d1b7a7]/10"
              aria-hidden="true"
            />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d1b7a7]">
                {t("contact.eyebrow")}
              </p>
              <h1 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">
                {t("contact.title")}
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-white/75">
                {t("contact.intro")}
              </p>

              <div className="mt-10 border-t border-white/15 pt-8">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  {t("contact.emailUs")}
                </p>
                <a
                  href={`mailto:${PUBLIC_CONTACT_EMAIL}`}
                  className="mt-3 inline-flex items-center gap-3 text-lg text-white transition hover:text-[#d1b7a7]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  {PUBLIC_CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-14">
            <h2 className="text-2xl font-semibold">{t("contact.formTitle")}</h2>
            <p className="mt-2 text-sm leading-6 text-[#302a22]/60">
              {t("contact.formIntro")}
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>
                  Company
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium">
                  {t("contact.nameLabel")}
                  <input
                    className={inputClass}
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder={t("contact.namePlaceholder")}
                    required
                  />
                </label>

                <label className="text-sm font-medium">
                  {t("contact.emailLabel")}
                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder={t("contact.emailPlaceholder")}
                    required
                  />
                </label>
              </div>

              <label className="block text-sm font-medium">
                {t("contact.topicLabel")}
                <select className={inputClass} name="topic" defaultValue="" required>
                  <option value="" disabled>
                    {t("contact.topicPlaceholder")}
                  </option>
                  <option>{t("contact.topicGeneral")}</option>
                  <option>{t("contact.topicClasses")}</option>
                  <option>{t("contact.topicMembership")}</option>
                  <option>{t("contact.topicFeedback")}</option>
                </select>
              </label>

              <label className="block text-sm font-medium">
                {t("contact.messageLabel")}
                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  name="message"
                  placeholder={t("contact.messagePlaceholder")}
                  required
                />
              </label>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#302a22] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#4a4136] focus:outline-none focus:ring-2 focus:ring-[#806657] focus:ring-offset-2 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? t("contact.submitting") : t("contact.submit")}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m5 12 14-7-4 14-3-6-7-1Z" />
                </svg>
              </button>

              <div className="min-h-6" aria-live="polite">
                {status === "success" && (
                  <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                    {t("contact.successMessage")}
                  </p>
                )}
                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                    {t("contact.errorMessage")} {" "}
                    <a className="underline" href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>
                      {PUBLIC_CONTACT_EMAIL}
                    </a>
                  </p>
                )}
                {status === "idle" && (
                  <p className="text-xs leading-5 text-[#302a22]/55">
                    {t("contact.formNote")}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#806657]">
              {t("contact.faqEyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              {t("contact.faqTitle")}
            </h2>
            <p className="mt-4 leading-7 text-[#302a22]/65">
              {t("contact.faqIntro")}
            </p>
          </div>

          <div className="mt-10 grid items-start gap-4 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#302a22]/10 bg-white p-6 shadow-sm transition open:border-[#d1b7a7] open:shadow-md"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-semibold marker:content-none">
                  <span>{faq.question}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#806657] transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <ul className="mt-4 border-t border-[#302a22]/10 pt-4 text-sm leading-6 text-[#302a22]/65">
                  <li className="ml-5 list-disc pl-1 marker:text-[#806657]">
                    {faq.answer}
                  </li>
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
