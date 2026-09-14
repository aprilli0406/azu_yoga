import { useI18n } from "../i18n/I18nProvider";

const MAT_DISCOUNT = 0.15;
const REFORMER_DISCOUNT = 0.15;
const PUNCHPASS_URL = "https://app.punchpass.com/org/20290/passes";

const matPackages = [
  { nameKey: "introMat", classes: 1, price: 9.98, discount: false, hasFreeExtra: false },
  { nameKey: "mat5", classes: 6, price: 150, discount: true, hasFreeExtra: true },
  { nameKey: "mat10", classes: 11, price: 240, discount: true, hasFreeExtra: true },
  { nameKey: "mat20", classes: 21, price: 390, discount: true, hasFreeExtra: true },
  { nameKey: "mat30", classes: 31, price: 490, discount: true, hasFreeExtra: true },
  { nameKey: "mat40", classes: 41, price: 545, discount: true, hasFreeExtra: true },
  { nameKey: "trial", classes: "unlimited", price: 37, discount: false, hasFreeExtra: false },
  { nameKey: "monthly", classes: "unlimited", price: 110, discount: false, hasFreeExtra: false },
  { nameKey: "monthlyReduced", classes: "unlimited", price: 90, discount: false, hasFreeExtra: false },
];

const reformerPackages = [
  { nameKey: "introReformer", classes: 1, price: 25, discount: false, hasFreeExtra: false },
  { nameKey: "reformerDropIn", classes: 1, price: 40, discount: false, hasFreeExtra: false },
  { nameKey: "privateReformer", classes: 1, price: 85, discount: false, hasFreeExtra: false },
  { nameKey: "reformer5", classes: 5, price: 190, discount: true, hasFreeExtra: false },
  { nameKey: "reformer10", classes: 10, price: 340, discount: true, hasFreeExtra: false },
];

export default function Price() {
  const { locale, t } = useI18n();

  const formatCAD = (value) =>
    new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(value);

  const renderRows = (packages, discountRate) =>
    packages.map((pkg, index) => {
      const isUnlimited = typeof pkg.classes !== "number";
      const paidClasses = !isUnlimited && pkg.hasFreeExtra ? pkg.classes - 1 : pkg.classes;
      const costPer = isUnlimited ? "—" : formatCAD(pkg.price / paidClasses);
      const discounted = pkg.price * (1 - discountRate);
      const discountedPer = isUnlimited ? "—" : formatCAD(discounted / pkg.classes);

      return (
        <tr key={pkg.nameKey} className={index % 2 === 0 ? "bg-white" : "bg-[#f7f3ef]/65"}>
          <td className="px-4 py-3 font-medium">{t(`pricing.packages.${pkg.nameKey}`)}</td>
          <td className="px-4 py-3 whitespace-nowrap">{formatCAD(pkg.price)}</td>
          <td className="px-4 py-3 whitespace-nowrap">{costPer}</td>
          <td className="px-4 py-3 whitespace-nowrap font-semibold text-[#5a3d36]">
            {pkg.discount ? formatCAD(discounted) : t("pricing.notApplicable")}
          </td>
          <td className="px-4 py-3 whitespace-nowrap text-[#5a3d36]">
            {pkg.discount ? discountedPer : t("pricing.notApplicable")}
          </td>
        </tr>
      );
    });

  const PricingTable = ({ packages, discountRate, paidColumn }) => (
    <div className="w-full overflow-x-auto rounded-2xl border border-[#302a22]/10 bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-[#302a22] text-white">
          <tr>
            <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.12em]">{t("pricing.packageColumn")}</th>
            <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.12em]">{t("pricing.regularPriceColumn")}</th>
            <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.12em]">{t(paidColumn)}</th>
            <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.12em]">{t("pricing.discountPriceColumn")}</th>
            <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.12em]">{t("pricing.discountClassColumn")}</th>
          </tr>
        </thead>
        <tbody>{renderRows(packages, discountRate)}</tbody>
      </table>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#f7f3ef] px-5 py-14 text-[#302a22] sm:px-6 md:py-20">
      <section className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl font-light uppercase tracking-[0.12em] sm:text-4xl">{t("pricing.matHeading")}</h1>
          <p className="mt-4 text-[#302a22]/62">
            {t("pricing.promoIntro")} <span className="font-semibold text-[#302a22]">{t("pricing.promoHighlight")}</span>
          </p>
          <p className="mt-3 font-semibold text-[#5f493e]">{t("pricing.matPromo")}</p>
          <p className="mt-5">
            {t("pricing.promoCode")}:{" "}
            <span className="rounded-md bg-rose-100 px-3 py-1 font-semibold text-rose-800">SPECIAL15</span>{" "}
            <span className="text-sm text-[#302a22]/50">({t("pricing.matPromoNote")})</span>
          </p>
        </div>

        <div className="mt-10">
          <PricingTable packages={matPackages} discountRate={MAT_DISCOUNT} paidColumn="pricing.paidClassColumn" />
        </div>

        <div className="mt-5 rounded-2xl border border-[#302a22]/10 bg-white p-5 sm:p-6">
          <h2 className="font-semibold">{t("pricing.matTermsTitle")}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#302a22]/65 marker:text-[#806657]">
            <li>{t("pricing.matGrip")}</li>
            <li>{t("pricing.matCancellationNotice")}</li>
            <li>{t("pricing.packageTerms")}</li>
            <li>{t("pricing.eligibility")}</li>
            <li>
              <strong className="text-[#302a22]">{t("pricing.cancellationPolicy")}</strong>
              <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-[#806657]">
                <li>{t("pricing.monthlyCancellation")}</li>
                <li>{t("pricing.packageCancellation")}</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-light uppercase tracking-[0.12em] sm:text-4xl">{t("pricing.reformerHeading")}</h2>
          <p className="mt-4 font-semibold text-[#5f493e]">{t("pricing.reformerPromo")}</p>
          <p className="mt-5">
            {t("pricing.promoCode")}:{" "}
            <span className="rounded-md bg-rose-100 px-3 py-1 font-semibold text-rose-800">REFORMER2026</span>{" "}
            <span className="text-sm text-[#302a22]/50">({t("pricing.reformerPromoNote")})</span>
          </p>
        </div>

        <div className="mt-10">
          <PricingTable packages={reformerPackages} discountRate={REFORMER_DISCOUNT} paidColumn="pricing.classPriceColumn" />
        </div>

        <div className="mt-5 rounded-2xl border border-[#302a22]/10 bg-white p-5 sm:p-6">
          <h2 className="font-semibold">{t("pricing.reformerTermsTitle")}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#302a22]/65 marker:text-[#806657]">
            <li>{t("pricing.reformerDuration")}</li>
            <li>{t("pricing.reformerSocks")}</li>
            <li>{t("pricing.reformerCancellationNotice")}</li>
            <li>{t("pricing.packageTerms")}</li>
            <li>
              <strong className="text-[#302a22]">{t("pricing.cancellationPolicy")}</strong>
              <ul className="mt-2 list-disc pl-5 marker:text-[#806657]">
                <li>{t("pricing.packageCancellation")}</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center">
        <a
          href={PUNCHPASS_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#302a22] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#4a4136]"
        >
          {t("pricing.buyPackages")}
        </a>
        <p className="mt-6 text-center font-medium text-[#302a22]/70">🎁 {t("pricing.giftCards")}</p>
      </div>
    </main>
  );
}
