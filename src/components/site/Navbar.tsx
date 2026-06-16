import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import { useI18n } from "@/lib/i18n";

const sections = [
  { id: "about", key: "nav.about" as const },
  { id: "programs", key: "nav.programs" as const },
  { id: "impact", key: "nav.impact" as const },
  { id: "map", key: "nav.map" as const },
  { id: "research", key: "nav.research" as const },
  { id: "stories", key: "nav.stories" as const },
  { id: "contact", key: "nav.contact" as const },
];

export function Navbar() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary"
        className={`liquid-glass pointer-events-auto flex w-full max-w-6xl items-center gap-2 rounded-2xl px-3 py-2 transition-all duration-500 sm:gap-3 sm:rounded-full sm:px-5 sm:py-2.5 ${
          scrolled ? "shadow-glow" : ""
        }`}
      >
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="Asociația Europa — Protecția Migrației logo"
            width={260}
            height={190}
            className="h-16 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] sm:h-20"
          />
          <span className="sr-only">Asociația Europa — Protecția Migrației</span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="rounded-full px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-white/60 hover:text-eu-blue"
              >
                {t(s.key)}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggle}
          aria-label={`Switch to ${lang === "ro" ? "English" : "Romanian"}`}
          className="ml-auto inline-flex items-center gap-1 rounded-full border border-white/60 bg-white/40 px-3 py-2 text-xs font-bold uppercase tracking-wider text-navy backdrop-blur transition-all hover:bg-white/80 hover:shadow-soft lg:ml-2"
        >
          <span className={lang === "ro" ? "text-navy" : "text-navy/40"}>RO</span>
          <span className="text-navy/30">/</span>
          <span className={lang === "en" ? "text-navy" : "text-navy/40"}>EN</span>
        </button>

        <a
          href="#cta"
          className="hidden rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.03] hover:bg-eu-blue sm:inline-flex"
        >
          {t("nav.donate")}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/40 p-2 text-navy lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="pointer-events-auto absolute inset-x-3 top-20 rounded-2xl border border-navy/10 bg-white/95 p-3 shadow-glow backdrop-blur-xl lg:hidden">
          <ul className="grid gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-navy hover:bg-eu-blue/10 hover:text-eu-blue"
                >
                  {t(s.key)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-navy px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                {t("nav.donate")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
