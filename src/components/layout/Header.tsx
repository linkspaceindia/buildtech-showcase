import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/projects", label: "Projects" },
  { to: "/leadership", label: "Leadership" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 backdrop-blur",
        scrolled
          ? "bg-[color:var(--color-bg)]/90 border-b border-[color:var(--color-line)]"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid h-9 w-9 place-items-center bg-[color:var(--color-ink)] text-[color:var(--color-brass)] font-display text-lg font-semibold">
            B
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight">
              BuildTech Studios
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
              Engineering Consultancy
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium tracking-wide transition-colors relative py-1",
                  isActive
                    ? "text-[color:var(--color-ink)]"
                    : "text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[color:var(--color-brass)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-5 py-2.5 hover:bg-[color:var(--color-brass-deep)] transition-colors"
          >
            Start a Project
          </Link>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-bg)]">
          <nav className="container-x py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-base py-1",
                    isActive
                      ? "text-[color:var(--color-ink)] font-medium"
                      : "text-[color:var(--color-muted)]",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-block bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-5 py-3 text-sm font-medium text-center"
            >
              Start a Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
