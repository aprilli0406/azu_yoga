import { NavLink, Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider"; // NEW

export default function Header() {
  const { locale, setLang, t } = useI18n(); // NEW

  const linkClass = ({ isActive }) =>
    `hover:opacity-100 transition ${
      isActive
        ? "underline underline-offset-4 text-[#d1b7a7] opacity-100"
        : "opacity-80"
    }`;

  // 🟢 each link gets equal width + centered text
  const linkItemClass = "basis-0 flex-1 text-center";

  return (
    <header className="sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-6 py-4 md:py-6 bg-[#302a22]/95 backdrop-blur text-white">
        <Link
          to="/"
          className="text-sm md:text-base tracking-[0.3em] font-light text-[#d1b7a7]"
        >
          AZU&nbsp;STUDIO
        </Link>

        <div className="flex flex-1 justify-center md:justify-center"> 
          <div className="flex w-full max-w-5xl text-sm font-bold tracking-widest">
            {/* CHANGED: use translated labels + keep uppercase via class */}
            <NavLink to="/" end className={(p) => `${linkItemClass} ${linkClass(p)}`}>
              <span className="uppercase">{t("nav.home")}</span> {/* CHANGED */}
            </NavLink>
            <NavLink to="/classes" className={(p) => `${linkItemClass} ${linkClass(p)}`}>
              <span className="uppercase">{t("nav.classes")}</span> {/* CHANGED */}
            </NavLink>
            <NavLink to="/schedule" className={(p) => `${linkItemClass} ${linkClass(p)}`}>
              <span className="uppercase">{t("nav.schedule")}</span> {/* CHANGED */}
            </NavLink>
            <NavLink to="/price" className={(p) => `${linkItemClass} ${linkClass(p)}`}>
              <span className="uppercase">{t("nav.pricing")}</span> {/* CHANGED */}
            </NavLink>
            <NavLink to="/account" className={(p) => `${linkItemClass} ${linkClass(p)}`}>
              <span className="uppercase">{t("nav.account") /* or add nav.account key */}</span> {/* CHANGED */}
            </NavLink>
          </div>
        </div>

        {/* NEW: right-side language toggle */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setLang(locale === "en" ? "fr" : "en")}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/20"
            title={locale === "en" ? "Passer en français" : "Switch to English"}
          >
            <span aria-hidden>🌐</span>
            <span className="tracking-wider">{locale.toUpperCase()}</span>
          </button>
        </div>
        {/* /NEW */}
      </nav>
    </header>
  );
}
