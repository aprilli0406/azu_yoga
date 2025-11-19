import { NavLink, Link, useLocation } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";
import { useEffect, useState } from "react";

export default function Header() {
  const { locale, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const linkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "underline underline-offset-4 text-white"
        : "text-[#d1b7a7] hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-4 md:px-6 py-4 md:py-6 bg-[#302a22]/95 backdrop-blur text-white">

        {/* === Mobile Hamburger === */}
        <button
          className="md:hidden inline-flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white/10 border border-white/20"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-white mb-1.5"></span>
          <span className="block w-5 h-0.5 bg-white mb-1.5"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>

        {/* === Left Logo === */}
        <Link
          to="/"
          className="text-sm md:text-lg tracking-[0.35em] font-light text-[#d1b7a7]" 
          // ⭐ CHANGED: text-lg + spacing + full name
        >
          AZU STUDIO
        </Link>

        {/* === Desktop Nav === */}
        <div className="hidden md:flex flex-1 justify-between px-10 text-sm md:text-base font-bold tracking-widest"> 
          {/* ⭐ CHANGED: justify-between + px-10 + md:text-base for bigger evenly spread links */}

          <NavLink to="/" end className={(p) => linkClass(p)}>
            <span className="uppercase">{t("nav.home")}</span> {/* ⭐ CAPS */}
          </NavLink>

          <NavLink to="/classes" className={(p) => linkClass(p)}>
            <span className="uppercase">{t("nav.classes")}</span>
          </NavLink>

          <NavLink to="/schedule" className={(p) => linkClass(p)}>
            <span className="uppercase">{t("nav.schedule")}</span>
          </NavLink>

          <NavLink to="/price" className={(p) => linkClass(p)}>
            <span className="uppercase">{t("nav.pricing")}</span>
          </NavLink>

          <NavLink to="/account" className={(p) => linkClass(p)}>
            <span className="uppercase">{t("nav.account")}</span>
          </NavLink>
        </div>

        {/* === Language Switch === */}
        <div className="flex items-center">
          <button
            onClick={() => setLang(locale === "en" ? "fr" : "en")}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/20"
          >
            🌐 <span>{locale.toUpperCase()}</span>
          </button>
        </div>
      </nav>

      {/* === Mobile Menu === */}
      {open && (
        <div className="md:hidden bg-[#302a22] text-white border-t border-white/10">
          <div className="flex flex-col text-base font-semibold tracking-widest px-4 py-3 space-y-2">
            <NavLink to="/" end className={(p) => `py-2 ${linkClass(p)}`}>
              {t("nav.home")}
            </NavLink>
            <NavLink to="/classes" className={(p) => `py-2 ${linkClass(p)}`}>
              {t("nav.classes")}
            </NavLink>
            <NavLink to="/schedule" className={(p) => `py-2 ${linkClass(p)}`}>
              {t("nav.schedule")}
            </NavLink>
            <NavLink to="/price" className={(p) => `py-2 ${linkClass(p)}`}>
              {t("nav.pricing")}
            </NavLink>
            <NavLink to="/account" className={(p) => `py-2 ${linkClass(p)}`}>
              {t("nav.account")}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
