import { useEffect, useState } from "react";
import { Cookie, Settings2, Check, X, Shield, BarChart3, Megaphone, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Prefs = {
  necessary: true; // always true
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const STORAGE_KEY = "cookie-consent-v1";

const defaultPrefs: Prefs = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

function loadPrefs(): Prefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    return { ...defaultPrefs, ...p, necessary: true };
  } catch {
    return null;
  }
}

function savePrefs(p: Prefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...p, updatedAt: new Date().toISOString() }));
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: p }));
  } catch {}
}

export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-cookie-settings"));
  }
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs);

  useEffect(() => {
    const existing = loadPrefs();
    if (!existing) {
      // Delay slightly so it doesn't fight the hero animation
      const id = window.setTimeout(() => setOpen(true), 600);
      return () => window.clearTimeout(id);
    } else {
      setPrefs(existing);
    }
  }, []);

  useEffect(() => {
    const onOpen = () => {
      const existing = loadPrefs();
      if (existing) setPrefs(existing);
      setExpanded(true);
      setOpen(true);
    };
    window.addEventListener("open-cookie-settings", onOpen);
    return () => window.removeEventListener("open-cookie-settings", onOpen);
  }, []);

  const acceptAll = () => {
    const p: Prefs = { necessary: true, analytics: true, marketing: true, preferences: true };
    setPrefs(p);
    savePrefs(p);
    setOpen(false);
    setExpanded(false);
  };
  const onlyNecessary = () => {
    const p: Prefs = { necessary: true, analytics: false, marketing: false, preferences: false };
    setPrefs(p);
    savePrefs(p);
    setOpen(false);
    setExpanded(false);
  };
  const saveChoice = () => {
    savePrefs(prefs);
    setOpen(false);
    setExpanded(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 sm:px-5 sm:pb-5"
    >
      {/* Soft backdrop only when expanded */}
      {expanded && (
        <button
          aria-label="Închide"
          onClick={() => setOpen(false)}
          className="fixed inset-0 -z-10 bg-navy/40 backdrop-blur-sm"
        />
      )}

      <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-navy/95 text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-in slide-in-from-bottom-6 duration-500">
        {/* gold accent */}
        <div
          aria-hidden
          className="h-1 w-full"
          style={{ background: "linear-gradient(90deg, var(--eu-gold), var(--teal), var(--eu-blue))" }}
        />

        <div className="relative p-5 sm:p-6">
          <button
            aria-label="Închide"
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-eu-gold/15 text-eu-gold ring-1 ring-eu-gold/30 sm:inline-flex">
              <Cookie className="h-6 w-6" />
            </div>
            <div className="min-w-0 pr-8">
              <h2 id="cookie-title" className="text-base font-bold sm:text-lg">
                Folosim cookie-uri ca să-ți oferim o experiență mai bună
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-white/70 sm:text-sm">
                Cookie-urile necesare sunt esențiale pentru funcționarea site-ului. Le poți accepta pe toate
                sau alege doar pe cele dorite. Detalii în{" "}
                <Link to="/cookies" className="font-semibold text-eu-gold underline-offset-2 hover:underline">
                  Politica de cookies
                </Link>
                .
              </p>
            </div>
          </div>

          {expanded && (
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {CATEGORIES.map((c) => {
                const checked = c.key === "necessary" ? true : (prefs as any)[c.key];
                const disabled = c.key === "necessary";
                return (
                  <li
                    key={c.key}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-teal">
                      <c.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-bold sm:text-sm">{c.label}</p>
                        <Toggle
                          checked={checked}
                          disabled={disabled}
                          onChange={(v) => setPrefs((p) => ({ ...p, [c.key]: v }))}
                          label={c.label}
                        />
                      </div>
                      <p className="mt-1 text-[11px] leading-relaxed text-white/65">{c.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <button
              onClick={acceptAll}
              className="inline-flex items-center gap-2 rounded-full bg-eu-gold px-5 py-2.5 text-xs font-bold text-navy shadow-glow transition-transform hover:scale-[1.03] sm:text-sm"
            >
              <Check className="h-4 w-4" /> Accept toate
            </button>
            {expanded ? (
              <button
                onClick={saveChoice}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/15 sm:text-sm"
              >
                Salvează alegerile
              </button>
            ) : (
              <button
                onClick={onlyNecessary}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/15 sm:text-sm"
              >
                Doar necesare
              </button>
            )}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-semibold text-white/70 transition-colors hover:text-white sm:text-xs"
            >
              <Settings2 className="h-3.5 w-3.5" />
              {expanded ? "Ascunde detalii" : "Personalizează"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-teal" : "bg-white/20"
      } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-[1.125rem]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

const CATEGORIES = [
  {
    key: "necessary" as const,
    icon: Shield,
    label: "Strict necesare",
    desc: "Esențiale pentru funcționarea site-ului: securitate, navigare, preferințe de bază. Nu pot fi dezactivate.",
  },
  {
    key: "preferences" as const,
    icon: Sparkles,
    label: "Preferințe",
    desc: "Rețin alegerile tale (limbă, regiune) pentru o experiență personalizată.",
  },
  {
    key: "analytics" as const,
    icon: BarChart3,
    label: "Analitice",
    desc: "Ne ajută să înțelegem cum este folosit site-ul, în mod anonim, pentru a-l îmbunătăți.",
  },
  {
    key: "marketing" as const,
    icon: Megaphone,
    label: "Marketing",
    desc: "Folosite pentru a-ți afișa conținut relevant și a măsura eficiența campaniilor.",
  },
];
