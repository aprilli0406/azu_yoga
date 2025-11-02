import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }) =>
    `hover:opacity-100 transition ${
      isActive
        ? "underline underline-offset-4 text-[#d1b7a7] opacity-100"
        : "opacity-80"
    }`;

  // 🟢 NEW: each link gets equal width + centered text
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

        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex w-full max-w-5xl text-sm font-bold tracking-widest">
            
            <NavLink to="/" end className={(p) => `${linkItemClass} ${linkClass(p)}`}>
              HOME
            </NavLink>
            <NavLink to="/classes" className={(p) => `${linkItemClass} ${linkClass(p)}`}>
              CLASSES
            </NavLink>
            <NavLink to="/schedule" className={(p) => `${linkItemClass} ${linkClass(p)}`}>
              SCHEDULE
            </NavLink>
            <NavLink to="/price" className={(p) => `${linkItemClass} ${linkClass(p)}`}>
              PRICE
            </NavLink>
            <NavLink to="/account" className={(p) => `${linkItemClass} ${linkClass(p)}`}>
              MY ACCOUNT
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
