import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COLLECTIONS } from "../data";
import Logo from "./Logo";

type Section = "home" | "collections" | "about" | null;

function sectionFor(pathname: string): Section {
  const p = pathname.replace(/\/+$/, "") || "/";
  if (p === "/") return "home";
  if (p === "/about") return "about";
  if (p === "/collections" || COLLECTIONS.some((c) => p === `/${c.slug}`)) return "collections";
  return null;
}

/** Sits absolutely at the top of the hero / page band. Render it inside those sections. */
export default function Header() {
  const { pathname } = useLocation();
  const active = sectionFor(pathname);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close the menu when the page changes
  useEffect(() => setOpen(false), [pathname]);

  // close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const cur = (s: Section) => (active === s ? ("page" as const) : undefined);

  return (
    <header className="site-header">
      <Logo />
      <nav className="nav" aria-label="Main">
        <Link className="pill" to="/" aria-current={cur("home")}>
          Home
        </Link>

        <div className={`pill has-menu${open ? " open" : ""}`} ref={menuRef}>
          <Link to="/collections" aria-current={cur("collections")}>
            Collections
          </Link>
          <button
            className="chev"
            type="button"
            aria-expanded={open}
            aria-label="Show collections list"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M1 1.5l5 5 5-5" />
            </svg>
          </button>
          <ul className="menu">
            {COLLECTIONS.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link className="pill" to="/about" aria-current={cur("about")}>
          About
        </Link>
      </nav>
    </header>
  );
}
