import { createFileRoute, Link } from "@tanstack/react-router";
import { Cookie, Shield, Sparkles, BarChart3, Megaphone, ArrowLeft, Settings2 } from "lucide-react";
import { openCookieSettings } from "@/components/site/CookieConsent";

const URL_CANONICAL = "https://avyron.eu/cookies";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Politica de cookies — Asociația Europa Protecția Migrației" },
      {
        name: "description",
        content:
          "Politica de cookies a Asociației Europa Protecția Migrației: ce cookie-uri folosim, categoriile lor și cum îți poți gestiona preferințele în orice moment.",
      },
      { name: "keywords", content: "politica cookies, cookie policy, GDPR cookies, preferinte cookies, Asociatia Europa" },
      { property: "og:title", content: "Politica de cookies — Asociația Europa" },
      { property: "og:description", content: "Cum folosim cookie-urile și cum poți alege preferințele tale." },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: URL_CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Politica de cookies" },
      { name: "twitter:description", content: "Cookie-urile folosite de Asociația Europa și gestionarea preferințelor." },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Politica de cookies",
          url: URL_CANONICAL,
          inLanguage: "ro-RO",
          isPartOf: { "@type": "WebSite", name: "Asociația Europa Protecția Migrației", url: "https://avyron.eu" },
        }),
      },
    ],
  }),
  component: CookiesPage,
});

const updated = "20 iunie 2026";

const categories = [
  {
    icon: Shield,
    title: "Strict necesare",
    badge: "Mereu active",
    desc:
      "Permit funcționarea site-ului: securitate, sesiune, încărcare echilibrată a paginilor și reținerea preferinței privind cookie-urile. Fără ele, site-ul nu poate funcționa corect.",
    examples: ["cookie-consent-v1 (12 luni)", "session/security tokens (sesiune)"],
  },
  {
    icon: Sparkles,
    title: "Preferințe",
    badge: "Opțional",
    desc:
      "Rețin opțiunile tale (limbă, regiune, afișare) pentru a-ți oferi o experiență consistentă la următoarele vizite.",
    examples: ["lang (12 luni)"],
  },
  {
    icon: BarChart3,
    title: "Analitice",
    badge: "Opțional",
    desc:
      "Ne ajută să înțelegem, în mod agregat și anonim, cum este folosit site-ul: pagini vizitate, timp petrecut, erori. Folosim aceste date doar pentru a îmbunătăți serviciul.",
    examples: ["_ga, _ga_* (până la 24 luni)"],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    badge: "Opțional",
    desc:
      "Permit afișarea de conținut relevant pentru tine pe alte platforme și măsurarea eficienței campaniilor noastre de informare.",
    examples: ["_fbp, _gcl_au (până la 13 luni)"],
  },
];

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 80% at 15% 0%, color-mix(in oklab, var(--eu-blue) 55%, transparent) 0%, transparent 60%), radial-gradient(50% 70% at 90% 15%, color-mix(in oklab, var(--teal) 45%, transparent) 0%, transparent 65%), radial-gradient(45% 60% at 70% 110%, color-mix(in oklab, var(--eu-gold) 30%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Înapoi acasă
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-eu-gold/40 bg-eu-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-eu-gold">
            <Cookie className="h-3.5 w-3.5" /> Politica de cookies
          </div>
          <h1 className="mt-5 text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Cookie-uri transparente. <br />
            <span
              className="text-gradient"
              style={{ backgroundImage: "linear-gradient(135deg, var(--eu-gold), white)" }}
            >
              Controlul îți aparține.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Folosim cookie-uri pentru a face site-ul rapid, sigur și util. Aici afli ce categorii există,
            ce rol au și cum îți poți schimba alegerile oricând.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => openCookieSettings()}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-navy shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Settings2 className="h-4 w-4" /> Setări cookies
            </button>
            <Link
              to="/confidentialitate"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              Politica de confidențialitate
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/55">Ultima actualizare: {updated}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="text-2xl font-black tracking-tight text-navy sm:text-3xl">Ce sunt cookie-urile?</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Cookie-urile sunt fișiere mici de text plasate pe dispozitivul tău de către site-urile pe care le
          vizitezi. Ele ajută la funcționarea site-urilor, la reținerea preferințelor și la analiza traficului
          în mod agregat. Conform Regulamentului UE 2016/679 (GDPR) și Directivei ePrivacy, cookie-urile
          neesențiale sunt activate doar cu acordul tău explicit.
        </p>

        <h2 className="mt-12 text-2xl font-black tracking-tight text-navy sm:text-3xl">
          Categoriile de cookies folosite
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {categories.map((c) => (
            <li
              key={c.title}
              className="group rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-eu-blue/30 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-eu-blue/10 text-eu-blue">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-navy">{c.title}</h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-teal">{c.badge}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                {c.examples.map((e) => (
                  <li
                    key={e}
                    className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-navy/70"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-black tracking-tight text-navy sm:text-3xl">
          Cum îți gestionezi preferințele
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          La prima vizită îți cerem acordul printr-un banner discret. Poți accepta toate cookie-urile, doar
          pe cele necesare sau le poți personaliza pe categorii. Poți reveni oricând la setări apăsând
          butonul de mai jos sau din subsol → „Setări cookies".
        </p>
        <div className="mt-5">
          <button
            onClick={() => openCookieSettings()}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white shadow-soft transition-transform hover:scale-[1.03]"
          >
            <Settings2 className="h-4 w-4" /> Deschide setările cookies
          </button>
        </div>

        <h2 className="mt-12 text-2xl font-black tracking-tight text-navy sm:text-3xl">
          Cookie-uri din browser
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          În plus față de panoul nostru, poți gestiona cookie-urile direct din browser — Chrome, Firefox,
          Safari, Edge oferă toate opțiunea de a vizualiza, șterge sau bloca cookie-urile. Reține că blocarea
          totală a cookie-urilor poate afecta funcționarea site-ului.
        </p>

        <h2 className="mt-12 text-2xl font-black tracking-tight text-navy sm:text-3xl">Contact</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Pentru întrebări legate de această politică sau de prelucrarea datelor, scrie-ne la{" "}
          <a className="font-semibold text-eu-blue underline-offset-2 hover:underline" href="mailto:asociatiemigratie@gmail.com">
            asociatiemigratie@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
