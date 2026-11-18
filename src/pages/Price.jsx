import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";

const MAT_DISCOUNT = 0.22;
const REFORMER_DISCOUNT = 0.22;
const PUNCHPASS_URL = "https://app.punchpass.com/org/20290/passes";

const matPackages = [
  { nameKey: "introMat", classes: 1, price: 9.98, discount: false },
  { nameKey: "matDropIn", classes: 1, price: 33, discount: false },
  { nameKey: "mat5", classes: 6, paidClasses: 5, price: 155, discount: true },
  { nameKey: "mat10", classes: 11, paidClasses: 10, price: 249, discount: true },
  { nameKey: "mat20", classes: 22, paidClasses: 20, price: 420, discount: true },
  { nameKey: "mat30", classes: 33, paidClasses: 30, price: 520, discount: true },
  { nameKey: "mat40", classes: 44, paidClasses: 40, price: 585, discount: true },
  { nameKey: "trial", classes: "unlimited", price: 37, discount: false },
  { nameKey: "monthly", classes: "unlimited", price: 110, discount: false },
  { nameKey: "monthlyReduced", classes: "unlimited", price: 90, discount: false },
];

const reformerPackages = [
  { nameKey: "introReformer", classes: 1, price: 25, discount: false },
  { nameKey: "reformerDropIn", classes: 1, price: 40, discount: false },
  { nameKey: "privateReformer", classes: 1, price: 85, discount: false },
  { nameKey: "privateReformer5", classes: 5, price: 425, discount: true },
  { nameKey: "semiPrivateReformer", classes: 1, price: 50, discount: false, perPerson: true },
  { nameKey: "semiPrivateReformer5", classes: 5, price: 250, discount: true, perPerson: true },
  { nameKey: "reformer5", classes: 5, price: 190, discount: true },
  { nameKey: "reformer10", classes: 10, price: 340, discount: true },
];

export default function Price() {
  const { locale, t } = useI18n();

  const formatCAD = (value) =>
    new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(value);

  const renderPromoText = (key) =>
    t(key).split(/(22\s?%)/).map((part, index) =>
      /^22\s?%$/.test(part) ? (
        <strong key={`${part}-${index}`} className="mx-1 inline-block rounded-full bg-[#ffd36e] px-3 py-1 text-xl font-black text-[#8a274a] shadow-sm">
          {part}
        </strong>
      ) : part
    );

  const renderPackageName = (pkg) => {
    const bonusClasses = typeof pkg.classes === "number" && pkg.paidClasses
      ? pkg.classes - pkg.paidClasses
      : 0;

    if (bonusClasses > 0) {
      return (
        <div>
          <div className="flex flex-wrap items-baseline gap-x-1">
            <span>{pkg.paidClasses}</span>
            <strong className="inline-flex items-baseline gap-1 rounded-md bg-[#ffd36e]/75 px-2 py-1 font-black text-[#7a2946]">
              <span>+{bonusClasses}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.06em]">
                {t(bonusClasses === 1 ? "pricing.freeClass" : "pricing.freeClasses")}
              </span>
            </strong>
          </div>
          <span className="mt-1 block text-xs font-medium uppercase tracking-[0.08em] text-[#302a22]/55">{t("pricing.matPackageLabel")}</span>
        </div>
      );
    }

    return t(`pricing.packages.${pkg.nameKey}`);
  };

  const renderRows = (packages, discountRate) =>
    packages.map((pkg, index) => {
      const isUnlimited = typeof pkg.classes !== "number";
      const paidClasses = !isUnlimited ? (pkg.paidClasses ?? pkg.classes) : pkg.classes;
      const costPer = isUnlimited ? "—" : formatCAD(pkg.price / paidClasses);
      const discounted = pkg.price * (1 - discountRate);
      const discountedPer = isUnlimited ? "—" : formatCAD(discounted / pkg.classes);
      const priceSuffix = pkg.perPerson ? ` ${t("pricing.perPerson")}` : "";

      return (
        <tr key={pkg.nameKey} className={index % 2 === 0 ? "bg-white" : "bg-[#f7f3ef]/65"}>
          <td className="px-4 py-3 font-medium">{renderPackageName(pkg)}</td>
          <td className="px-4 py-3 whitespace-nowrap">{formatCAD(pkg.price)}{priceSuffix}</td>
          <td className="px-4 py-3 whitespace-nowrap">{costPer}{priceSuffix}</td>
          <td className="px-4 py-3 whitespace-nowrap font-semibold text-[#5a3d36]">
            {pkg.discount ? <>{formatCAD(discounted)}{priceSuffix}</> : t("pricing.notApplicable")}
          </td>
          <td className="px-4 py-3 whitespace-nowrap text-[#5a3d36]">
            {pkg.discount ? <>{discountedPer}{priceSuffix}</> : t("pricing.notApplicable")}
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
        <div className="relative overflow-hidden rounded-[2rem] bg-[#302a22] px-6 py-10 text-white shadow-xl shadow-[#302a22]/15 sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#d1b7a7]/20" aria-hidden="true" />
          <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-[#d1b7a7]/10" aria-hidden="true" />
          <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d1b7a7]">{t("pricing.anniversaryEyebrow")}</p>
              <h1 className="mt-5 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">{t("pricing.anniversaryTitle")}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">{t("pricing.anniversaryIntro")}</p>
            </div>
            <div className="relative min-w-72 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#ff9caf] via-[#ffd36e] to-[#ffb3c7] p-7 text-center text-[#302a22] shadow-2xl shadow-black/30 ring-4 ring-white/15 sm:p-8">
              <span className="absolute left-4 top-3 animate-pulse text-2xl text-white/90" aria-hidden="true">✦</span>
              <span className="absolute right-4 top-5 animate-pulse text-xl text-white" aria-hidden="true">✧</span>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em]">{t("pricing.anniversaryCodeLabel")}</p>
              <div className="mt-4 rounded-xl border-2 border-dashed border-[#302a22]/45 bg-white/75 px-5 py-4 text-3xl font-bold tracking-[0.18em] shadow-sm">AZULOVE</div>
              <div className="mt-4 rounded-xl bg-[#302a22] px-5 py-4 shadow-lg">
                <span className="block text-4xl font-black tracking-[-0.03em] text-[#ffd36e]">{locale === "fr" ? "22 %" : "22%"}</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-white">{t("pricing.anniversaryDiscount")}</span>
              </div>
            </div>
          </div>
          <p className="relative mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-white/48">{t("pricing.anniversaryFinePrint")}</p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl font-light uppercase tracking-[0.12em] sm:text-4xl">{t("pricing.matHeading")}</h1>
          <p className="mt-3 font-semibold text-[#5f493e]">{renderPromoText("pricing.matPromo")}</p>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span>{t("pricing.promoCode")}:</span>
            <span className="rounded-full bg-gradient-to-r from-[#ff9caf] via-[#ffd36e] to-[#ffb3c7] px-5 py-2 text-lg font-bold tracking-[0.14em] text-[#302a22] shadow-md">AZULOVE</span>
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
          <p className="mt-4 font-semibold text-[#5f493e]">{renderPromoText("pricing.reformerPromo")}</p>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span>{t("pricing.promoCode")}:</span>
            <span className="rounded-full bg-gradient-to-r from-[#ff9caf] via-[#ffd36e] to-[#ffb3c7] px-5 py-2 text-lg font-bold tracking-[0.14em] text-[#302a22] shadow-md">AZULOVE</span>
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
        <div className="mt-6 text-center text-[#302a22]/70">
          <p className="font-medium">🎁 {t("pricing.giftCards")}</p>
          <p className="mt-2 text-sm">
            {t("pricing.giftCardsRequestPrefix")} {" "}
            <Link
              to="/contact"
              className="font-semibold text-[#7a2946] underline decoration-[#d9a067] decoration-2 underline-offset-4 transition hover:text-[#a23f63]"
            >
              {t("pricing.giftCardsContactLink")}
            </Link>
            {t("pricing.giftCardsRequestSuffix")}
          </p>
        </div>
      </div>
    </main>
  );
}
